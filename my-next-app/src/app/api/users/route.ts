// src/app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectDb, usersTable } from '../../../lib/db';

export async function GET() {
  const db = await connectDb();
  const result = await db.select().from(usersTable).execute();
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const { name, email } = await req.json();
  const db = await connectDb();
  await db.insertInto(usersTable).values({ name, email }).execute();
  return NextResponse.json({ message: 'User created' });
}
