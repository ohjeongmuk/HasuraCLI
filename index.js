"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_core_1 = require("drizzle-orm/pg-core");
const node_postgres_1 = require("drizzle-orm/node-postgres");
const pg_1 = require("pg");
const client = new pg_1.Client({
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "postgrespassword",
    database: "postgres",
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const db = (0, node_postgres_1.drizzle)(client);
        // 예제 테이블 생성
        const users = (0, pg_core_1.pgTable)("users", {
            id: (0, pg_core_1.serial)("id").primaryKey(),
            name: (0, pg_core_1.varchar)("name").notNull(),
            email: (0, pg_core_1.varchar)("email").notNull().unique(),
        });
        // 테이블 생성
        yield db.schema.createTable(users).execute();
        // 데이터 삽입
        yield db.insertInto(users).values({ name: "Alice", email: "alice@example.com" }).execute();
        // 데이터 조회
        const result = yield db.select().from(users).execute();
        console.log(result);
        yield client.end();
    });
}
main().catch(console.error);
