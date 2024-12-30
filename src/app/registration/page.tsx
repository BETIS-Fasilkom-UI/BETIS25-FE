import { getUserData, getUserService } from "@/hooks/user";
import RegistrationModule from "@/modules/RegistrationModule";
import { redirect } from "next/navigation";
import React from "react";

const RegistrationPage = async () => {
  const user = await getUserService();
  if (!user) {
    redirect("/login");
  }

  const userData = await getUserData();

  if (userData?.address !== "") {
    redirect("/profile");
  }

  return <RegistrationModule />;
};

export default RegistrationPage;
