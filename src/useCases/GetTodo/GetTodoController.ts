import { RequestHandler } from "../../interfaces/RequestHandler.ts";
import { GetTodoUseCase } from "./GetTodoUseCase.ts";

export class GetTodoController {
  async handle({
    response,
    params,
  }: RequestHandler<{ id: string }>) {
    try {
      const { id } = params;

      const getTodoUseCase = new GetTodoUseCase();

      const todo = await getTodoUseCase.execute(id);

      response.status = 200;

      response.body = {
        success: true,
        data: todo,
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
