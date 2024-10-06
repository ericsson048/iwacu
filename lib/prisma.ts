import { PrismaClient } from '@prisma/client';

// Creating a global variable to hold the PrismaClient instance
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Exporting a singleton instance of PrismaClient
export const prisma =
  globalForPrisma.prisma || // If a PrismaClient instance already exists in the global scope, use it
  new PrismaClient({ // Otherwise, create a new instance
    log: ['query'], // Enable logging for queries
  });

// If the environment is not production, store the PrismaClient instance in the global variable
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
