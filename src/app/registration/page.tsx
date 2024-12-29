import { getUserService } from "@/hooks/user";
import RegistrationModule from "@/modules/RegistrationModule";
import { redirect } from "next/navigation";
import React from "react";

const RegistrationPage = async () => {
  const user = await getUserService();
  if (!user) {
    redirect("/login");
  }
  return <RegistrationModule />;
};

export default RegistrationPage;
