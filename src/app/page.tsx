import { getUserService } from "@/hooks/user";

export default async function Page() {
  const user = await getUserService();
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="font-cinzel text-[96px] text-violet-900/40">
        Coming Soon
      </h1>
      <div className="">
        <h2 className="font-cinzel text-t6 md:text-t3">
          We are cooking something good!
        </h2>
        <h3 className="font-raleway text-t8 md:text-t6 max-md:mt-3">
          Please wait and check back later.
        </h3>
      </div>
      {user && ( // If user is logged in
        <p className="text-xs mt-5">
          Welcome back, {user.name}! You are currently logged in.
        </p>
      )}
    </main>
  );
}
