"use client";
import { uploadFile } from "@/lib/s3";
import z from "zod";
import { useUserData } from "./auth";
import { getCookie } from "cookies-next";

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const submissionItemSchema = z.object({
  submission: z
    .any()
    .refine((files) => {
      return files?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) =>
        ACCEPTED_IMAGE_TYPES.includes(files?.type) ||
        files?.type === "application/pdf",
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

export async function useSubmission(
  values: z.infer<typeof submissionItemSchema>,
  submissionId: string
) {
  try {
    console.log("Adding submission item");
    const token = await getCookie("token");
    if (!token) {
      return { isSuccess: false, message: "Unauthorized access" };
    }
    const user = await useUserData();

    const userId = user?.id;
    const userName = user?.fullname.replace(/\s+/g, "-");

    console.log("Upload files to s3");

    console.log(user);

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const res = await fetch(`${API_URL}sub/submission/${user?.email}`, {
      credentials: "omit",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const folder = `submissions/${userName}_${userId}`;
    // const folder = `submissions/${course}/${week}/${submissionTitle}/${userName}_${userId}`;

    // Upload Necessary files to s3
    const submissionUrl = await uploadFile(
      values.submission,
      `${userName}`,
      folder
    );

    const body = {
      submission_id: submissionId,
      url: submissionUrl,
    };

    const response = await fetch(`${API_URL}sub/submission-item`, {
      method: "POST",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const data = await response.json();
      return { isSuccess: false, message: data.message };
    }

    return { isSuccess: true, message: "Submission successfully added" };
  } catch (error) {
    return { isSuccess: false, message: (error as Error).message };
  }
}
