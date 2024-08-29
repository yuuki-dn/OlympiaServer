import Elysia, {t} from "elysia";
// @ts-ignore
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "dev";

interface LoginRequest {
	loginCode: string
}

export default new Elysia({ prefix: "/auth" })
	.post(
		"/login",
		async ({ body }: { body: LoginRequest }) => {
			if (body.loginCode === "admin") {
				jwt.sign("admin", secret, { expiresIn: "1d" });
			}
			else {

			}
		},
		{
			body: t.Object({
				loginCode: t.String()
			})
		}
	)
	.get(
		"/validate",
		async (ctx) => {

		}
	);