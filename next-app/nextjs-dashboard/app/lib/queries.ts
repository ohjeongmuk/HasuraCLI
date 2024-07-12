import { Client } from 'pg';
import { NodePgClient, pgTable } from 'drizzle-orm/node-postgres';

const connectionString = 'postgresql://postgres:postgrespassword@127.0.0.1:5432/postgres';
const client = new Client({ connectionString });
client.connect();

const nodePgClient = new NodePgClient(client);

export const todoTable = nodePgClient.table('Todo', {
  name: { type: 'varchar', notNull: true },
  time: { type: 'integer', notNull: true },
});

export default nodePgClient;
