import { getUserData } from "@/hooks/user";
import { HomePageModule } from "@/modules/HomePageModule";
import { redirect } from "next/navigation";

export default async function Page() {
  const userData = await getUserData();

  return <HomePageModule
    userData={userData}
  />;
}