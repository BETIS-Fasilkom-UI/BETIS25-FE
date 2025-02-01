import LoginModule from "@/modules/LoginModule";
import React from "react";
import { getUserData } from "@/hooks/user";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const user = await getUserData();

  if (user) {
    redirect("/");
  }
  return <LoginModule />;
};

export default LoginPage;
