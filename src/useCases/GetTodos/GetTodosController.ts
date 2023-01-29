import { RequestHandler } from "../../interfaces/RequestHandler.ts";
import { GetTodosUseCase } from "./GetTodosUseCase.ts";

export class GetTodosController {
  async handle({ response, request }: RequestHandler) {
    try {
      const completeQueryValue = request.url.searchParams.get(
        "complete",
      ) === "true";

      const getTodosUseCase = new GetTodosUseCase();

      const allTodos = await getTodosUseCase.execute(completeQueryValue);

      response.status = 200;

      response.body = {
        success: true,
        data: allTodos,
      };
    } catch (error) {
      response.status = 400;
      response.body = {
        success: false,
        msg: error.message,
      };
    }
  }
}
