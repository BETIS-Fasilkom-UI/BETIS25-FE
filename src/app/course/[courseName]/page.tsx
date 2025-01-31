import React from "react";
import { CourseDetailModule } from "@/modules/CourseDetailModule";
import { getUserService } from "@/hooks/user";
import { redirect } from "next/navigation";
import { CourseDetailResponse } from "@/modules/CourseDetailModule/interface";
import { NextPage } from "next";
import { courseId } from "@/modules/CourseDetailModule/const";

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

  const res = await fetch(process.env.SERVER_URL + `course/${courseName?.id}`, {
    method: "GET",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  });
  const response: CourseDetailResponse = await res.json();

  return <CourseDetailModule courseData={response.data} />;
};

export default page;
