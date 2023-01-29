import { denodb } from "../lib/denodb.ts";
import { load } from "../lib/dotenv.ts";

await load({ export: true });

const conector = new denodb.MongoDBConnector({
  uri: Deno.env.get("MONGO_URI")!,
  database: "todo_db",
});

export const db = new denodb.Database(conector);
