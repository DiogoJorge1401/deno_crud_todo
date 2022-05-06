import { TodoModel } from "../../models/Todo.ts";
import { TodoData } from "../../interfaces/TodoData.ts";

export class AddTodoUseCase {
  async execute(todoData: TodoData) {
    return await TodoModel.create(todoData);
  }
}
