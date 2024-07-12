// src/app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectDb, todoTable } from '../../../lib/db';
import { GraphQLClient, gql } from 'graphql-request';
import type { NextApiResponse } from 'next';


// Drizzle ORM
async function fetchTodoFromDB() {
  const db = await connectDb();
  const result = await db.select().from(todoTable).execute();
  return result;
}

// GraphQL
async function fetchTodoFromHasura() {
  const endpoint = 'http://localhost:8080/v1/graphql'; 
  const client = new GraphQLClient(endpoint, {
    headers: {
      'x-hasura-admin-secret': 'nVyTda2uc8EPAqttYjJ66nztNSIHGiWzXIm2q49TJe2NY8rQU6NOuz2Jwn41p6x2'
    },
  });

  const query = gql`
    query GetTodos {
      Todo {
        name
        time
      }
    }
  `;

  const data = await client.request(query);
  return data.Todo;
}


export async function GET() {
  try {
    // Drizzle ORM
    const dbResult = await fetchTodoFromDB();
    // Hasura GraphQL
    const hasuraResult = await fetchTodoFromHasura();
    return NextResponse.json({ dbResult, hasuraResult });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, time } = await req.json();
    const db = await connectDb();
    await db.insertInto(todoTable).values({ name, time }).execute();
    return NextResponse.json({ message: 'Todo Created' });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}


export default async function handler(req: any, res: NextApiResponse) {
  const endpoint = 'http://localhost:8080/v1/graphql';
  //const adminSecret = 'your-hasura-admin-secret'; // Hasura 관리자 비밀번호

  const client = new GraphQLClient(endpoint, {
    // headers: {
    //   'x-hasura-admin-secret': adminSecret,
    // },
  });

  const mutation = gql`
    mutation AddTodo {
      insert_Todo_one(object: { name: "New Todo", time: 5 }) {
        name
        time
      }
    }
  `;

  try {
    const data = await client.request(mutation);
    res.status(200).json({ message: 'Todo added successfully', data });
  } catch (error) {
    console.error('Error adding todo:', error);
    res.status(500).json({ message: 'Failed to add todo', error: error.message });
  }
}
