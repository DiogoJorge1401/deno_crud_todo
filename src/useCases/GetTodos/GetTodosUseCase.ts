import { TodoModel } from "../../models/Todo.ts";

export class GetTodosUseCase {
  async execute(
    completeQuery: boolean,
  ) {
    return await TodoModel.where(
      "complete",
      completeQuery,
    ).all();
  }
}
