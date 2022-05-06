import { denodb } from "../lib/denodb.ts";

export class TodoModel extends denodb.Model {
  static table = "todos";
  static timestamps = true;

  static fields = {
    _id: { primaryKey: true },
    title: denodb.DATA_TYPES.STRING,
    complete: denodb.DATA_TYPES.BOOLEAN,
  };
}
