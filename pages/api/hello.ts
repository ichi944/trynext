import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const book = await prisma.book.findFirst()
	res.status(200).json({ book });
}