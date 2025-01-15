import React from "react";
import { NextPage } from "next";
import SubmissionItemModule from "@/modules/SubmissionItemModule";
import { GetSubmissionItemDataResponse } from "./interface";
import { GetSubmissionDataResponse } from "@/app/sub/submission/[id]/interface";

const page: NextPage<{
  params: { user_id: string, submission_id: string };
}> = async ({ params }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const submission_item_response = await fetch(
    `${API_URL}sub/submission-item/${params.user_id}/${params.submission_id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
      },
    }
  );
  const submission_item_data: GetSubmissionItemDataResponse = await submission_item_response.json();
  console.log(submission_item_data);

  const submission_response = await fetch(
    `${API_URL}sub/submission/${params.submission_id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
      },
    }
  );
  const submission_data: GetSubmissionDataResponse = await submission_response.json();
  console.log(submission_data);

  return (
    <div className="flex justify-center flex-col gap-1 pt-16 items-center overflow-hidden">
      <SubmissionItemModule data={submission_item_data.data} submissionData={submission_data.data} />
    </div>
  );
};

export default page;