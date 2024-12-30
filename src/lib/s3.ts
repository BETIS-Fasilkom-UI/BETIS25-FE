import {
    PutObjectCommand,
    S3Client
} from "@aws-sdk/client-s3";

const Bucket = process.env.AMPLIFY_BUCKET;
const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
});

const uploadFile = async (file: File, key?: string) => { 
    const Body = Buffer.from(await file.arrayBuffer());
    const Key = `ticket/${key ? key : file.name}`;
    const response = await s3.send(new PutObjectCommand({ Bucket, Key, Body }));
    if (!response || response.$metadata.httpStatusCode !== 200) {
        throw new Error('Failed to upload file to S3');
    }
    const url = `https://${Bucket}.s3.amazonaws.com/${Key}`;

    return url;
}

export { Bucket, s3, uploadFile };
