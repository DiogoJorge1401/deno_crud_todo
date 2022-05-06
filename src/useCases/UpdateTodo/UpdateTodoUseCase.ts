import { TodoData } from "../../interfaces/TodoData.ts";
import { TodoModel } from "../../models/Todo.ts";

export class UpdateTodoUseCase {
  async execute(todoId: string, { complete, title }: TodoData) {
    const todo = await TodoModel.find(todoId);

    if (!todo) throw new Error("Todo not found");

    todo.complete = complete ?? todo.complete;
    todo.title = title || todo.title;

    return await todo.update();
  }
}
