// drizzle.config.ts

import { PostgresDriver, drizzle } from 'drizzle-orm';
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgrespassword',
  port: 5432,
});

const db = drizzle(new PostgresDriver(pool));

console.log('Database connected successfully:', db); // 연결 확인 로그 추가

export { db };
