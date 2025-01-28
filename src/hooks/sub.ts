import { cookies } from "next/headers";
import { decode, JwtPayload } from "jsonwebtoken";
import {
  GetSubmissionItemDataResponse,
  SubmissionItem,
} from "@/modules/SubmissionItemModule/interface";
import {
  GetSubmissionDataResponse,
  Submission,
} from "@/modules/SubmissionModule/interface";

export const getSubmissionItemData = async (
  submissionId: string,
  userId: string
) => {
  const token = cookies().get("token")?.value;
  if (!token) {
    return null;
  }

  const API_URL = process.env.SERVER_URL;

  const response = await fetch(
    `${API_URL}sub/submission-item/${userId}/${submissionId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    return null;
  } else {
    const data: GetSubmissionItemDataResponse = await response.json();
    const submissionItemData = data.data;
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

export const getSubmissionData = async (id: string) => {
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
    const submissionData = data.data;
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
