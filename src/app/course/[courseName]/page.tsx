import { getUserService } from "@/hooks/user";
import fetchServer from "@/lib/fetchServer";
import { CourseDetailModule } from "@/modules/CourseDetailModule";
import { courseId } from "@/modules/CourseDetailModule/const";
import { CourseDetail, CourseDetailResponse } from "@/modules/CourseDetailModule/interface";
import { NextPage } from "next";
import { redirect } from "next/navigation";

const page: NextPage<{
  params: Promise<{ courseName: string }>;
}> = async ({ params }) => {
  const user = await getUserService();
  if (!user) {
    redirect("/login");
  }

  const paramsReady = await params;

  const courseName = courseId.find(
    (course) => course.name === paramsReady.courseName
  );

  const response = await fetchServer<CourseDetail>(`course/${courseName?.id}`);

  if (!response.data) {
    return <div>An Error Occured! Please Refresh: {response.error}</div>;
  }

  const data = response.data;

  return <CourseDetailModule courseData={data} />;
};

export default page;
