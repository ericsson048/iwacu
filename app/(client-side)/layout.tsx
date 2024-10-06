import ClientHeader from "@/components/layout/ClientHeader";
import "../globals.css";
import ClientFooter from "@/components/layout/ClientFooter";
import Provider from "./provider";

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
        <ClientHeader/>
        {children}
        <ClientFooter/>
        </Provider>
        </body>
    </html>
  )
}
