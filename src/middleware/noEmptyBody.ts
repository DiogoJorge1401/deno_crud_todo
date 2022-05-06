import { oak } from "../lib/oak.ts";

export const noEmptyBody = async (
  {
    request,
    response,
  }: {
    request: oak.Request;
    response: oak.Response;
  },
  next: () => Promise<unknown>,
) => {
  try {
    const bodyLength = Object.keys(await request.body().value).length;

    if (!request.hasBody || !bodyLength) {
      response.status = 400;

      response.body = {
        success: false,
        msg: "No Data",
      };

      return;
    }
    await next();
  } catch (_error) {
    response.status = 400;

    response.body = {
      success: false,
      msg: "No Data",
    };

    return;
  }
};
