import { PrismaClient } from '@prisma/client'
import 'dotenv/config'

// Using globalThis is the modern standard for cross-environment globals
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL,
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export async function checkDatabaseConnection(): Promise<boolean> {  
    try {
        // This 'handshake' verifies the URL and credentials are correct
        await prisma.$queryRaw`SELECT 1`;
        return true;
    } catch (error) {
        // This will now catch things like "Invalid password" or "Host unreachable"
        console.error("Database connection failed: ", error);
        return false;
    }
}