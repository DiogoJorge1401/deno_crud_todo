import { DeleteTodoUseCase } from "./DeleteTodoUseCase.ts";
import { RequestHandler } from "../../interfaces/RequestHandler.ts";

export class DeleteTodoController {
  async handle({ params, response }: RequestHandler<{ id: string }>) {
    try {
      const { id } = params;

      const deleteTodoUseCase = new DeleteTodoUseCase();

      await deleteTodoUseCase.execute(id);

      response.status = 200;

      response.body = {
        success: true,
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
