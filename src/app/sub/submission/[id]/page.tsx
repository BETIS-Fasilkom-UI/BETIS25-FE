import React from "react";
import { NextPage } from "next";
import SubmissionModule from "@/modules/SubmissionModule";
import { GetSubmissionDataResponse } from "@/app/sub/submission/[id]/interface";
import { GetSubmissionItemDataResponse } from "../../submission-item/[user_id]/[submission_id]/interface";
import { getUserData } from "@/hooks/user";
import { notFound, redirect } from "next/navigation";
import { getSubmissionData, getSubmissionItemData } from "@/hooks/submission";

const page: NextPage<{
  params: { id: string };
}> = async ({ params }) => {
  const user = await getUserData();
  if (!user) {
    redirect("/login");
  }

  const submissionItemData = await getSubmissionItemData(params.id);
  if (!submissionItemData) {
    notFound();
  }
  console.log(submissionItemData);

  const submissionData = await getSubmissionData(params.id);
  if (!submissionData) {
    notFound();
  }
  console.log(submissionData);

  return (
    <div className="flex justify-center flex-col gap-1 pt-16 items-center overflow-hidden">
      <SubmissionModule
        submissionItemData={submissionItemData}
        submissionData={submissionData}
      />
    </div>
  );
};

export default page;
