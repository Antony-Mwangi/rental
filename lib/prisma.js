import { PrismaClient } from "@prisma/client";

const globalForPrisma = global;

// For MongoDB, pass adapter
const prisma = globalForPrisma.prisma || new PrismaClient({
  adapter: "mongodb" // required for Prisma 7+
});

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export { prisma };
