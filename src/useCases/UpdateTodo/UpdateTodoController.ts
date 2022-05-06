import { RequestHandler } from "../../interfaces/RequestHandler.ts";
import { UpdateTodoUseCase } from "./UpdateTodoUseCase.ts";

export class UpdateTodoController {
  async handle({
    params,
    response,
    request,
  }: RequestHandler<{ id: string }>) {
    try {
      const { id } = params;

      const values = await request.body().value;

      const updateTodoUseCase = new UpdateTodoUseCase();

      const result = await updateTodoUseCase.execute(id, values);

      response.status = 200;

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
