import { oak } from "./lib/oak.ts";
import "./models/index.ts";
import { router } from "./routes/index.ts";

const PORT = 3000;

const app = new oak.Application();

app.use(router.routes()); // Implement our router

app.use(router.allowedMethods()); // Allow router HTTP methods

console.log(`Server listening on port ${PORT}`);

await app.listen({ port: PORT });
