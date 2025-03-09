'use client';
import { uploadFile } from '@/lib/s3';
import { getCookie } from 'cookies-next';
import z from 'zod';
import { useUserData } from './auth';

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
];

export const submissionItemSchema = z.object({
  submission: z
    .any()
    .refine((files) => {
      return files?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) =>
        files?.type === 'application/pdf' ||
        ACCEPTED_IMAGE_TYPES.includes(files?.type),
      'Only .PDF, .jpg, .jpeg, .png and .webp formats are supported.'
    ),
});

export async function useSubmission(
  values: z.infer<typeof submissionItemSchema>,
  submissionId: string,
  submissionTitle: string
) {
  try {
    console.log('Adding submission item');
    const token = await getCookie('token');
    if (!token) {
      return { isSuccess: false, message: 'Unauthorized access' };
    }
    const user = await useUserData();

    const userId = user?.id;
    const userName = user?.fullname.replace(/\s+/g, '-');

    console.log('Upload files to s3');

    console.log(user);

    // const folder = `submissions/${course}/${week}/${submissionTitle}/${userName}_${userId}`;
    const folder = `submissions/courseTest/weekTest/${submissionTitle}/${userName}_${userId}`;

    const fileName = values.submission?.name.split('.').slice(0, -1).join('.');

    // Upload Necessary files to s3
    const submissionUrl = await uploadFile(values.submission, fileName, folder);

    console.log(submissionUrl);
    console.log(values.submission?.name);

    const body = {
      submission_id: submissionId,
      user_id: userId,
      url: submissionUrl,
    };

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${API_URL}sub/submission-item`, {
      method: 'POST',
      credentials: 'omit',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const data = await response.json();
      return { isSuccess: false, message: data.message };
    }

    return { isSuccess: true, message: 'Submission successfully added' };
  } catch (error) {
    return { isSuccess: false, message: (error as Error).message };
  }
}

export async function updateSubmission(
  values: z.infer<typeof submissionItemSchema>,
  submissionItemId: string,
  submissionId: string,
  submissionTitle: string
) {
  try {
    console.log('Updating submission item');
    const token = await getCookie('token');
    if (!token) {
      return { isSuccess: false, message: 'Unauthorized access' };
    }
    const user = await useUserData();

    const userId = user?.id;
    const userName = user?.fullname.replace(/\s+/g, '-');

    const folder = `submissions/courseTest/weekTest/${submissionTitle}/${userName}_${userId}`;

    const fileName = values.submission?.name.split('.').slice(0, -1).join('.');

    // Upload Necessary files to s3
    const submissionUrl = await uploadFile(values.submission, fileName, folder);

    const body = {
      submission_id: submissionId,
      user_id: userId,
      url: submissionUrl,
    };

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(
      `${API_URL}sub/submission-item/${submissionItemId}`,
      {
        method: 'PUT',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      const data = await response.json();
      return { isSuccess: false, message: data.message };
    }

    return { isSuccess: true, message: 'Submission successfully updated' };
  } catch (error) {
    return { isSuccess: false, message: (error as Error).message };
  }
}

export async function deleteSubmission(submissionItemId: string) {
  try {
    console.log('Deleting submission item');
    const token = await getCookie('token');
    if (!token) {
      return { isSuccess: false, message: 'Unauthorized access' };
    }

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(
      `${API_URL}sub/submission-item/${submissionItemId}`,
      {
        method: 'DELETE',
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      const data = await response.json();
      return { isSuccess: false, message: data.message };
    }

    return { isSuccess: true, message: 'Submission successfully deleted' };
  } catch (error) {
    return { isSuccess: false, message: (error as Error).message };
  }
}
