import { s3, Bucket } from '@/lib/s3';
import { DeleteObjectCommand } from '@aws-sdk/client-s3';

export async function DELETE(req: Request) {
  try {
    const { fullKey } = await req.json();

    const response = await s3.send(
      new DeleteObjectCommand({ Bucket, Key: fullKey })
    );
    if (!response || response.$metadata.httpStatusCode !== 204) {
      throw new Error('Failed to delete file from S3');
    }

    return new Response(null, { status: 204 });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return new Response(error.message, { status: 500 });
    }
    return new Response('An unknown error occurred', { status: 500 });
  }
}
