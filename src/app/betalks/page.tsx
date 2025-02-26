import BetalksModule from "@/modules/BetalksModule";
import { redirect } from "next/navigation";

const BetalksPage = async () => {
  
  redirect('/')

  return <BetalksModule />;
};

export default BetalksPage;
