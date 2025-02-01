import { getUserService } from "@/hooks/user";
import CourseList from "@/modules/CourseListModule/";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await getUserService();
  if (!user) {
    redirect("/login");
  }

  return <CourseList />;
};

export default page;
