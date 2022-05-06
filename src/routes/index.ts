import { oak } from "./../lib/oak.ts";
import { AddTodoController } from "./../useCases/AddTodo/AddTodoController.ts";
import { GetTodosController } from "./../useCases/GetTodos/GetTodosController.ts";
import { GetTodoController } from "./../useCases/GetTodo/GetTodoController.ts";
import { noEmptyBody } from "./../middleware/noEmptyBody.ts";
import { UpdateTodoController } from "../useCases/UpdateTodo/UpdateTodoController.ts";
import { DeleteTodoController } from "../useCases/DeleteTodo/DeleteTodoController.ts";

const router = new oak.Router();

const addTodoController = new AddTodoController();
const getTodosController = new GetTodosController();
const getTodoController = new GetTodoController();
const updateTodoController = new UpdateTodoController();
const deleteTodoController = new DeleteTodoController()

router
  .post("/api/todos", noEmptyBody, addTodoController.handle) // Add a todo
  .get("/api/todos", getTodosController.handle) // Get all todos
  .get("/api/todos/:id", getTodoController.handle) // Get all todos
  .put("/api/todos/:id", noEmptyBody, updateTodoController.handle) // Update a todo
  .delete("/api/todos/:id", deleteTodoController.handle) // Delete a todo

export { router };
