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

  const data = await fetch(process.env.SERVER_URL + "course", {
    method: "GET",
    credentials: "omit",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  });
  const response: ApiResponse<CourseInterface[]> = await data.json();
  console.log(response);
  return <CourseList courses={response.data} />;
};

export default page;
