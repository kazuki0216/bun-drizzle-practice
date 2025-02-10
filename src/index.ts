import { Hono } from "hono";
import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { db_seeding } from "./utils/db_connection";

const db = drizzle(process.env.DB_FILE_NAME!);

const app = new Hono();

app.get("/", (c) => {
  db_seeding();
  return c.text("Hello Hono!");
});

export default app;
