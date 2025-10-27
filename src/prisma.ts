import { PrismaClient } from '@prisma/client';

// Instantiate a single PrismaClient for the app
export const prisma = new PrismaClient();
