import { getUserData, getUserService } from "@/hooks/user";
import { ProfilePageModule } from "@/modules/ProfilePageModule";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const user = await getUserData();
  if (!user) {
    redirect("/login");
  }
  return <ProfilePageModule user={user} />;
};

export default ProfilePage;
