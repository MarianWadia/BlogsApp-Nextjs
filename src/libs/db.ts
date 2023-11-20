import { PrismaClient } from '@prisma/client';

// Function to create a Prisma client instance
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Type for the Prisma client instance
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// Access the global object (globalThis) and define the prisma property on it
const globalForPrisma = globalThis as any as { prisma: PrismaClientSingleton | undefined };

// Get the Prisma client instance from globalThis or create a new one
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

// Function to disconnect the Prisma client
const disconnect = async () => {
  await prisma.$disconnect();
};

// Export the Prisma client instance
export { prisma, disconnect };

// If not in production, store the Prisma client instance in globalThis
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
