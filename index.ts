import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  host: "127.0.0.1",
  port: 5432,
  user: "postgres",
  password: "postgrespassword",
  database: "postgres",
});

async function main() {
  await client.connect();
  const db = drizzle(client);

  // 예제 테이블 생성
  const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    email: varchar("email").notNull().unique(),
  });

  // 테이블 생성
  await db.schema.createTable(users).execute();

  // 데이터 삽입
  await db.insertInto(users).values({ name: "Alice", email: "alice@example.com" }).execute();

  // 데이터 조회
  const result = await db.select().from(users).execute();
  console.log(result);

  await client.end();
}

main().catch(console.error);
