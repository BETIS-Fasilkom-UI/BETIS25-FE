import React from "react";
import { NextPage } from "next";
import SubmissionItemModule from "@/modules/SubmissionItemModule";
import { GetSubmissionItemDataResponse } from "./interface";

const page: NextPage<{
  params: { user_id: string, submission_id: string };
}> = async ({ params }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(
    `${API_URL}sub/submission-item/${params.user_id}/${params.submission_id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
      },
    }
  );
  const data: GetSubmissionItemDataResponse = await response.json();
  console.log(data);

  return (
    <div className="flex justify-center flex-col gap-1 pt-16 items-center overflow-hidden">
      <SubmissionItemModule data={data.data} />
    </div>
  );
};

export default page;