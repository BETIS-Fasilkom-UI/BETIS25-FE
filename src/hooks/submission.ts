"use client";
import { uploadFile } from "@/lib/s3";
import z from "zod";
import { useUserData } from "./auth";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { decode, JwtPayload } from "jsonwebtoken";
import { GetSubmissionItemDataResponse, SubmissionItem } from "@/app/sub/submission-item/[user_id]/[submission_id]/interface";
import { GetSubmissionDataResponse, Submission } from "@/app/sub/submission/[id]/interface";

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
  submissionId: string,
  submissionTitle: string
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

    // const folder = `submissions/${course}/${week}/${submissionTitle}/${userName}_${userId}`;
    const folder = `submissions/courseTest/weekTest/${submissionTitle}/${userName}_${userId}`;

    // Upload Necessary files to s3
    const submissionUrl = await uploadFile(
      values.submission,
      `${values.submission?.name}`,
      folder
    );

    const body = {
      submission_id: submissionId,
      user_id: userId,
      url: submissionUrl,
    };

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

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

export const getSubmissionItemData = async (
  submissionId: string
) => {
  const token = cookies().get("token")?.value;
  if (!token) {
    return null;
  }

  const user = decode(token) as JwtPayload;
  if (!user) {
    return null;
  }

  const API_URL = process.env.SERVER_URL;

  const response = await fetch(`${API_URL}sub/submission-item/${user.id}/${submissionId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return null;
  } else {
    const data: GetSubmissionItemDataResponse = await response.json();
    const submissionItemData = data.data
    return {
      id: submissionItemData.id,
      submission_id: submissionItemData.submission_id,
      user_id: submissionItemData.user_id,
      score: submissionItemData.score,
      url: submissionItemData.url,
      comment: submissionItemData.comment,
      created_at: submissionItemData.created_at,
      updated_at: submissionItemData.updated_at,
    } as SubmissionItem;
  }
};

export const getSubmissionData = async (
  id: string
) => {
  const token = cookies().get("token")?.value;
  if (!token) {
    return null;
  }

  const user = decode(token) as JwtPayload;
  if (!user) {
    return null;
  }

  const API_URL = process.env.SERVER_URL;

  const response = await fetch(`${API_URL}sub/submission/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return null;
  } else {
    const data: GetSubmissionDataResponse = await response.json();
    const submissionData = data.data
    return {
      id: submissionData.id,
      course_section_id: submissionData.course_section_id,
      title: submissionData.title,
      description: submissionData.description,
      opened_at: submissionData.opened_at,
      closed_at: submissionData.closed_at,
      cutoff_at: submissionData.cutoff_at,
    } as Submission;
  }
};