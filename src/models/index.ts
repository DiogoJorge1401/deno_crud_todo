import { db } from "../utils/connectionDb.ts";
import { TodoModel } from "./Todo.ts";

db.link([TodoModel]);

await db.sync();
