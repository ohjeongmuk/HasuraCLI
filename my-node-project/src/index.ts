// index.ts

import client from './db';
import { drizzle } from "drizzle-orm/node-postgres";

// drizzles todo table

// hasura fetch todo table using GraphQL-request



async function main() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database');

    // 여기에 데이터베이스 관련 작업을 추가할 수 있습니다.

  } catch (error) {
    console.error('Error connecting to PostgreSQL:', error);
  } finally {
    await client.end();
    console.log('Disconnected from PostgreSQL database');
  }
}

main();
