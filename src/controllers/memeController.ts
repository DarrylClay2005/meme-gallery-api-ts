import { Request, Response } from 'express';
import { prisma } from '../prisma.js';
import { memeSchema } from '../schemas/meme.js';
import type { Meme } from '../types/index.js';

export const addMeme = async (request: Request, response: Response) => {
  const { title, url } = request.body as Partial<Meme>;

  const { error } = memeSchema.validate(request.body);
  if (error) {
    throw new Error(error?.details?.[0]?.message || 'Invalid request body');
  }

  const userId = parseInt((request as any).user?.userId, 10);

  const newMeme = await prisma.meme.create({
    data: { title: String(title), url: String(url), userId } as Meme,
  });

  response.status(201).json(newMeme);
};
