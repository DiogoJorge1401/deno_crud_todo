import { denodb } from "../lib/denodb.ts";

const conector = new denodb.MongoDBConnector({
  uri: "mongodb://localhost:27017",
  database: "todo_db",
});

export const db = new denodb.Database(conector);
