// app/lib/schema.ts

import { Entity, Column } from 'drizzle-orm';

@Entity()
export class Todo {
  @Column({ primaryKey: true })
  id: number;

  @Column()
  name: string;

  @Column()
  time: number;
}