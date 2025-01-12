import { getUserData } from "@/hooks/user";
import CourseList from "@/modules/CourseListModule/CourseList";
import { HomePageModule } from "@/modules/HomePageModule";

export default async function Page() {

  return <CourseList/>;
}
