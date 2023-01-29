import { ObjectId } from "https://deno.land/x/mongo@v0.28.1/bson/bson.ts";

type FieldValue = number | string | boolean | Date | ObjectId | null;

type Values = { [key: string]: FieldValue };

export interface TodoData extends Values {
  title: string;
  complete: boolean;
}
