import {
	S3Client,
	GetObjectCommand,
	PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const S3 = new S3Client({
	region: "auto",
	endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID!}.r2.cloudflarestorage.com`,
	credentials: {
		accessKeyId: process.env.R2_ACCESS_KEY_ID!,
		secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
	},
});

const EXPIRE_TIME = 3600;

export async function getPresignedUploadUrl(bucket: string, key: string) {
	console.log("S3 Debug: Creating presigned URL with:", {
		bucket,
		key,
		endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID!}.r2.cloudflarestorage.com`,
		hasAccessKey: !!process.env.R2_ACCESS_KEY_ID,
		hasSecretKey: !!process.env.R2_SECRET_ACCESS_KEY,
		hasAccountId: !!process.env.CLOUDFLARE_ACCOUNT_ID,
		expiresIn: EXPIRE_TIME
	});

	try {
		const command = new PutObjectCommand({
			Bucket: bucket,
			Key: key,
			Metadata: { "Access-Control-Allow-Origin": "*" },
		});

		console.log("S3 Debug: PutObjectCommand created successfully");

		const url = await getSignedUrl(S3, command, {
			expiresIn: EXPIRE_TIME,
		});

		console.log("S3 Debug: Presigned URL generated successfully:", {
			urlLength: url.length,
			urlStartsWith: url.substring(0, 50) + "..."
		});

		return url;
	} catch (error) {
		console.error("S3 Debug: Error in getPresignedUploadUrl:", {
			error,
			message: (error as Error).message,
			name: (error as Error).name,
			stack: (error as Error).stack
		});
		throw error;
	}
}

export async function getPresignedViewingUrl(bucket: string, key: string) {
	console.log("S3 Debug: Creating viewing URL for:", { bucket, key });
	
	try {
		const command = new GetObjectCommand({
			Bucket: bucket,
			Key: key,
		});

		const url = await getSignedUrl(S3, command, {
			expiresIn: EXPIRE_TIME,
		});

		console.log("S3 Debug: Viewing URL generated successfully");
		return url;
	} catch (error) {
		console.error("S3 Debug: Error in getPresignedViewingUrl:", {
			error,
			message: (error as Error).message,
			name: (error as Error).name
		});
		throw error;
	}
}
