import Elysia from "elysia";

export default new Elysia({ prefix: "/ws" })
	.ws(
		"/",
		{}
	)
;