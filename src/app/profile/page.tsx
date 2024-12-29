import React from "react";
import { ProfileModule } from "@/modules/ProfileModules";
import { getUserService } from "@/hooks/user";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await getUserService();
  if (!user) {
    redirect("/login");
  }
  return <ProfileModule />;
};

export default page;
