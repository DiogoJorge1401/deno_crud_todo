import { TodoModel } from "../../models/Todo.ts";

export class DeleteTodoUseCase {
  async execute(todoId: string) {
    const todo = await TodoModel.find(todoId);

    if (!todo) throw new Error("Todo not found!");

    await todo.delete();
  }
}
