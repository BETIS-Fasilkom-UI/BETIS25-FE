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

  const courseName = courseId.find(
    async (course) => course.name === (await params).courseName
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
