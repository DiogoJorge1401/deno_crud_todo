import { TodoModel } from "../../models/Todo.ts";

export class GetTodoUseCase {
  async execute(todoId: string) {
    const todo = await TodoModel.find(todoId);

    if (!todo) throw new Error("Todo not found!");

    return todo;
  }
}
