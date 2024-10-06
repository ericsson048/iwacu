import { env } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import nextAuth, { AuthOptions } from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@auth/prisma-adapter';

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    theme: {
        logo: '/images/iwacu.png',
    },
    providers: [
        GithubProvider({
            clientId: env.GITHUB_ID,
            clientSecret: env.GITHUB_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ profile }) {
            // Vérifiez si le profil est défini
            if (!profile || !profile.email) {
                return '/api/auth/error?error=ProfileNotFound'; // Redirigez si le profil n'est pas trouvé
            }

            const existingUser = await prisma.user.findUnique({
                where: { email: profile.email },
            });

            if (!existingUser) {
                // Créer un nouvel utilisateur
                const newUser = await prisma.user.create({
                    data: {
                        username: profile.email.split('@')[0],
                        firstName: profile.name?.split(' ')[0] || "",
                        lastName: profile.name?.split(' ')[1] || "",
                        email: profile.email,
                        country: "", // Ajouté pour répondre aux exigences de type
                        phone: "", // Ajouté pour répondre aux exigences de type
                        password: "", // Ajouté pour répondre aux exigences de type
                        img: profile.image,
                        // Ajoutez d'autres champs si nécessaire
                    },
                });

                // Lier le compte GitHub à ce nouvel utilisateur
                await prisma.account.create({
                    data: {
                        userId: newUser.id,
                        provider: "github",
                        providerAccountId: String(profile.name), // Use profile.login instead of profile.id
                        type: "oauth", // Ajouter le type pour préciser le type de compte
                    },
                });
            } else {
                // Vérifier si le compte GitHub est déjà lié à cet utilisateur
                const account = await prisma.account.findUnique({
                    where: {
                        provider_providerAccountId: {
                            provider: "github",
                            providerAccountId: String(profile.name),
                        },
                    },
                });

                if (!account) {
                    return '/api/auth/error?error=OAuthAccountNotLinked';
                }
            }

            return true; // Autoriser la connexion
        },
        session({ session, user }) {
            if (session.user) {
                session.user.id = user.id;
                session.user.image = user.image;
            }
            return session;
        },
    }
};

export default nextAuth(authOptions);
