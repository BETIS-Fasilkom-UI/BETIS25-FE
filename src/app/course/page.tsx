import React from "react";
import CourseList from "@/modules/CourseListModule/";
import { getUserService } from "@/hooks/user";
import { redirect } from "next/navigation";
import { ApiResponse } from "@/hooks/interface";
import { CourseInterface } from "@/modules/CourseListModule/interface";

const page = async () => {
  const user = await getUserService();
  if (!user) {
    redirect("/login");
  }

  return <CourseList />;
};

export default page;
