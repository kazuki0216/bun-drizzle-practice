import { Hono } from "hono";
import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { logger } from "hono/logger";
import { db_seeding } from "./utils/db_connection";
import { serveStatic } from "hono/bun";
import Dashboard from "./pages/Dashboard";

const db = drizzle(process.env.DB_FILE_NAME!);
const app = new Hono({ strict: false });

app.use(logger());

app.use("/static/*", serveStatic({ root: "./public" }));

app.get("/*", (c) => {
  db_seeding();
  return c.html(clientComponent());
});

function clientComponent() {
  return (
    <html lang="en">
      <head>
        <title>Task Management Dashboard</title>
        <script type="module" src="/static/client.js" defer></script>
      </head>
      <body>
        <div id="root">
          <Dashboard />
        </div>
      </body>
    </html>
  );
}

export default app;
