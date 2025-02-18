import fetchServer from "@/lib/fetchServer";
import { CourseDetailModule } from "@/modules/CourseDetailModule";
import { courseId } from "@/modules/CourseDetailModule/const";
import { CourseDetail } from "@/modules/CourseDetailModule/interface";
import { NextPage } from "next";

const page: NextPage<{
  params: Promise<{ courseName: string }>;
}> = async ({ params }) => {
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
