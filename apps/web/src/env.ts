import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		CLERK_SECRET_KEY: z.string().optional(),
		AWS_SES_ACCESS_KEY: z.string().optional(),
		AWS_SES_SECRET_ACCESS_KEY: z.string().optional(),
		AWS_REGION: z.string().optional(),
		AWS_SES_EMAIL_FROM: z.string().optional(),
		INTERNAL_AUTH_KEY: z.string().optional(),
		BOT_API_URL: z.string().optional(),
		HK_ENV: z.string().optional(),
		NODE_ENV: z
			.enum(["development", "test", "production"])
			.default("development"),
		CLOUDFLARE_ACCOUNT_ID: z.string().optional(),
		R2_ACCESS_KEY_ID: z.string().optional(),
		R2_SECRET_ACCESS_KEY: z.string().optional(),
		TURSO_AUTH_TOKEN: z.string().optional(),
		TURSO_DATABASE_URL: z.string().optional(),
		UPSTASH_REDIS_REST_TOKEN: z.string().optional(),
		UPSTASH_REDIS_REST_URL: z.string().optional(),
	},
	client: {
		NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().optional(),
	},
	experimental__runtimeEnv: {
		NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
			process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
	},
	// Enable the flag to treat empty strings as undefined
	emptyStringAsUndefined: true,
});
