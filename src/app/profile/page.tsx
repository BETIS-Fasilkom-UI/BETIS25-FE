import { getUserData, getUserService } from "@/hooks/user";
import { ProfilePageModule } from "@/modules/ProfilePageModule"
import { redirect } from "next/navigation";

const ProfilePage = async () => {
    const user = await getUserData();

    console.log(user);
    

    if (!user) {
        redirect("/");
    }

    return <ProfilePageModule  user={user}/>    
}

export default ProfilePage
