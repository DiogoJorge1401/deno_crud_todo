// deno-lint-ignore-file
import { oak } from "../lib/oak.ts";

export interface RequestHandler<T = {}> {
  request: oak.Request;
  response: oak.Response;
  params: T;
}
