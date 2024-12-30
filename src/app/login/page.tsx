import LoginModule from "@/modules/LoginModule";
import React from "react";
import { getUserService } from "@/hooks/user";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const user = await getUserService();
  if (user) {
    redirect("/");
  }
  return <LoginModule />;
};

export default LoginPage;
