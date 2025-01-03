import {
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

const uploadFile = async (file: File, key?: string, folder?: string) => { 
    const formData = new FormData();

    formData.append('file', file);
    formData.append('data', JSON.stringify({ key, folder }));

    // Fetch
    const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
    })

    if (!response.ok) {
        throw new Error('Failed to upload file');
    }

    const data: {url: string} = await response.json();

    return data.url;
}

const getAsset = (key: string): string => { 
    const cleanedKey = key.replace(/^\/|\/$/g, '');
    const url = `https://betis25.s3.ap-southeast-2.amazonaws.com/assets/${cleanedKey}`;

    return url;
}

export { Bucket, s3, uploadFile, getAsset};

