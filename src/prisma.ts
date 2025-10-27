// Lightweight runtime fallback when Prisma Client is not generated in this environment.
// In a full setup, replace this with: import { PrismaClient } from '@prisma/client'; export const prisma = new PrismaClient();
import type { Meme } from './types/index.js';

let idSeq = 1;
const memes: Meme[] = [];

export const prisma = {
  meme: {
    async create({ data }: { data: Meme }): Promise<Meme> {
      const created: Meme = { id: idSeq++, title: data.title, url: data.url, userId: data.userId };
      memes.push(created);
      return created;
    },
  },
};
