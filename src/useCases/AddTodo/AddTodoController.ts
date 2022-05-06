import { RequestHandler } from "../../interfaces/RequestHandler.ts";
import { AddTodoUseCase } from "./AddTodoUseCase.ts";

export class AddTodoController {
  async handle({ request, response }: RequestHandler) {
    try {
      const addTodoUseCase = new AddTodoUseCase();

      const { value } = request.body();

      const todo = await value;

      const result = await addTodoUseCase.execute(todo);

      response.status = 201;

      response.body = {
        success: true,
        data: result,
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
