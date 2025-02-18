import React from "react";
import { NextPage } from "next";
import SubmissionItemModule from "@/modules/SubmissionItemModule";
import { getUserData } from "@/hooks/user";
import { redirect } from "next/navigation";
import { getSubmissionData, getSubmissionItemData } from "@/hooks/sub";
import NotFound from "@/app/not-found";

const page: NextPage<{
  params: { submission_id: string };
}> = async props => {
  const params = await props.params;
  const user = await getUserData();
  if (!user) {
    redirect("/login");
  }

  const submissionData = await getSubmissionData(params.submission_id);
  if (!submissionData) {
    <NotFound />
    return null
  }
  console.log(submissionData);

  const submissionItemData = await getSubmissionItemData(params.submission_id, user.id);
  console.log(submissionItemData);

  return (
    <div className="flex justify-center flex-col gap-1 pt-16 items-center overflow-hidden">
      <SubmissionItemModule
        data={submissionItemData}
        submissionData={submissionData}
      />
    </div>
  );
};

export default page;