import NotFound from "@/app/not-found";
import { getSubmissionData, getSubmissionItemData } from "@/hooks/sub";
import { getUserData } from "@/hooks/user";
import SubmissionItemModule from "@/modules/SubmissionItemModule";
import { NextPage } from "next";
import { redirect } from "next/navigation";

const page: NextPage<{
  params: Promise<{ submission_id: string }>;
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