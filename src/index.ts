import Elysia from "elysia";
import auth from "./routes/auth";
import websocket from "./routes/websocket";

const port = parseInt(process.env.PORT || "8080");

const app = new Elysia()
	.use(auth)
	.use(websocket)
	.listen(port, () => {
		console.log("Server is listening on port %d", port);
	});