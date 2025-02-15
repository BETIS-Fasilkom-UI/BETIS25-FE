import BetalksModule from "@/modules/BetalksModule";
import React from "react";
import { getUserService } from "@/hooks/user";
import { redirect } from "next/navigation";

const BetalksPage = async () => {
  const user = await getUserService();
  if (user) {
    redirect("/");
  }
  return <BetalksModule />;
};

export default BetalksPage;
