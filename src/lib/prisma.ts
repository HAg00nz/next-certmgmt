import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Check if prisma exists as a global variable,
// if not, initialize a new PrismaClient instance
// This creates a singleton instance if one doesn't exist
export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ["query", "info", "warn"],
    });

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}
