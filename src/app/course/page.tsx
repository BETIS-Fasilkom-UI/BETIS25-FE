import React from "react";
import CourseList from "@/modules/CourseListModule/CourseList";
import { getUserService } from "@/hooks/user";
import { redirect } from "next/navigation";

const page = async () => {
  //const user = await getUserService();
  //if (user) {
  //  redirect("/login");
  //}
  return <CourseList />;
};

export default page;
