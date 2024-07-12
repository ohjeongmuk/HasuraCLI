import { pgTable, integer, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

let client: Client | null = null;
let db: ReturnType<typeof drizzle> | null = null;

const connectDb = async () => {
  if (!client) {
    client = new Client({
      host: "127.0.0.1",
      port: 5432,
      user: "postgres",
      password: "postgrespassword",
      database: "postgres",
    });
    await client.connect();
    db = drizzle(client);
  }
  return db;
};

const todoTable = pgTable("Todo", {
  name: varchar("name").notNull(),
  time: integer("time").notNull(),
});
export { connectDb, todoTable };
