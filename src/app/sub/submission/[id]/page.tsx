import React from "react";
import { NextPage } from "next";
import SubmissionModule from "@/modules/SubmissionModule";
import { getUserData } from "@/hooks/user";
import { redirect } from "next/navigation";
import { getSubmissionData, getSubmissionItemData } from "@/hooks/sub";
import NotFound from "@/app/not-found";

const page: NextPage<{
  params: Promise<{ id: string }>;
}> = async props => {
  const params = await props.params;
  const user = await getUserData();
  if (!user) {
    redirect("/login");
  }

  const submissionData = await getSubmissionData(params.id);
  if (!submissionData) {
    <NotFound />
    return null
  }

  const submissionItemData = await getSubmissionItemData(params.id, user.id);

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