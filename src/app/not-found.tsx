import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="font-cinzel text-[160px] md:text-[200px] lg:text-[288px] text-violet-900/40">
        404
      </h1>
      <h2 className="font-cinzel text-t5 md:text-t3 lg:text-t2">
        Oops! Something&apos;s went wrong
      </h2>
      <h3 className="font-raleway text-t7 md:text-t6 lg:text-t5 max-md:mt-3">
        seems like the page you&apos;re trying to open is not ready
      </h3>
      <Link href={"/"}>
        <Button variant="primary" className="mt-8">
          Back to Home
        </Button>
      </Link>
    </main>
  );
};

export default NotFound;
