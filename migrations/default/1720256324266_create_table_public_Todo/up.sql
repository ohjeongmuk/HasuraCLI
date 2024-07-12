CREATE TABLE "public"."Todo" ("name" text, "time" integer NOT NULL DEFAULT 0, PRIMARY KEY ("name") , UNIQUE ("name"));COMMENT ON TABLE "public"."Todo" IS E'Todo_Data';
