import { getPresignedUploadUrl } from "@/lib/utils/server/s3";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { staticUploads } from "config";

interface RequestBody {
	location: string;
	fileName: string;
}

export async function POST(request: Request): Promise<NextResponse> {
	try {
		const body: RequestBody = (await request.json()) as RequestBody;

		const { userId } = await auth();
		if (!userId) {
			return new NextResponse(
				"You do not have permission to upload files",
				{
					status: 401,
				},
			);
		}

		// Check if R2 environment variables are configured
		const missingVars = [];
		if (!process.env.R2_BUCKET_NAME) missingVars.push("R2_BUCKET_NAME");
		if (!process.env.R2_ACCESS_KEY_ID) missingVars.push("R2_ACCESS_KEY_ID");
		if (!process.env.R2_SECRET_ACCESS_KEY) missingVars.push("R2_SECRET_ACCESS_KEY");
		if (!process.env.CLOUDFLARE_ACCOUNT_ID) missingVars.push("CLOUDFLARE_ACCOUNT_ID");

		if (missingVars.length > 0) {
			console.error("R2 Upload Error: Missing environment variables:", missingVars);
			return NextResponse.json(
				{ 
					error: `File upload service is not configured. Missing: ${missingVars.join(", ")}. Please contact support.`,
					missingVars 
				},
				{ status: 500 }
			);
		}

		console.log("R2 Upload Debug: Environment variables found:", {
			hasBucketName: !!process.env.R2_BUCKET_NAME,
			hasAccessKey: !!process.env.R2_ACCESS_KEY_ID,
			hasSecretKey: !!process.env.R2_SECRET_ACCESS_KEY,
			hasAccountId: !!process.env.CLOUDFLARE_ACCOUNT_ID,
			bucketName: process.env.R2_BUCKET_NAME,
			accountId: process.env.CLOUDFLARE_ACCOUNT_ID
		});

		const randomSeq = crypto.randomUUID();
		const [fileName, extension] = body.fileName.split(".");
		const key = `${body.location}/${fileName}-${randomSeq}.${extension}`;
		
		console.log("R2 Upload Debug: Attempting to get presigned URL for:", {
			bucket: process.env.R2_BUCKET_NAME,
			key: key,
			location: body.location,
			fileName: body.fileName
		});

		const url = await getPresignedUploadUrl(
			process.env.R2_BUCKET_NAME!,
			key,
		);

		console.log("R2 Upload Success: Presigned URL generated for key:", key);
		return NextResponse.json({ url, key });
	} catch (error) {
		console.error("R2 Upload Error Details:", {
			error: error,
			message: (error as Error).message,
			stack: (error as Error).stack,
			name: (error as Error).name
		});
		
		return NextResponse.json(
			{ 
				error: "An error occurred when fetching the presigned url. Please try again or contact support.",
				details: (error as Error).message,
				errorType: (error as Error).name
			},
			{ status: 400 },
		);
	}
}

export const runtime = "edge";
