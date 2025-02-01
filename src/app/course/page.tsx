"use server";
import { getUserData } from "@/hooks/user";
import CourseList from "@/modules/CourseListModule/";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await getUserData();
  if (!user) {
    redirect("/login");
  }

  return <CourseList />;
};

export default page;
