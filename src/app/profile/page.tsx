import { getUserData, getUserService } from "@/hooks/user";
import ProfileModule from "@/modules/ProfileModule";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const user = await getUserData();
  if (!user) {
    redirect("/login");
  }
  return <ProfileModule user={user} />;
};

export default ProfilePage;
