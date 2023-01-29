import { oak } from "../lib/oak.ts";

// deno-lint-ignore ban-types
export interface RequestHandler<T = {}> {
  request: oak.Request;
  response: oak.Response;
  params: T;
}
