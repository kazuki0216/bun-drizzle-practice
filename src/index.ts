import { Hono } from "hono";
import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { db_seeding } from "./utils/db_connection";
import { html } from "hono/html";

const db = drizzle(process.env.DB_FILE_NAME!);

const app = new Hono({ strict: false });

const fetch_pokemon = async (url: string): Promise<T> => {
  return await fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => data);
};

app.get("/", (c) => {
  db_seeding();
  return c.text("Hello Hono!");
});

app.get("/pokemon", async (c) => {
  // fetch pokemon api
  const url = "https://pokeapi.co/api/v2/pokemon/ditto";
  const result = await fetch_pokemon(url);
  if (result) {
    for (const key in result) {
      if (key === "game_indices") {
        for (const index of result[key]) {
          console.log(`Game Index: ${index.game_index}`);
          console.log(`Version: ${index.version.name}`);
          console.log(`Version URL: ${index.version.url}`);
          return c.html(index.version.url);
        }
      }
    }
  }
});

export default app;
