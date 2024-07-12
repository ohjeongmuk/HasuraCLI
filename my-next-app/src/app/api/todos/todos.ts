// pages/api/todos.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../drizzle.config';
import { Todo } from '../lib/schema';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`Received ${req.method} request`);

  if (req.method === 'GET') {
    try {
      const todos = await db.select().from(Todo).all();
      res.status(200).json(todos);
    } catch (error) {
      console.error('Error fetching todos:', error);
      res.status(500).json({ message: 'Error fetching todos' });
    }
  } else if (req.method === 'POST') {
    try {
      const { name, time } = req.body;
      await db.insert().into(Todo).values({ name, time }).execute();
      res.status(201).json({ message: 'Todo added successfully' });
    } catch (error) {
      console.error('Error adding todo:', error);
      res.status(500).json({ message: 'Error adding todo' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
