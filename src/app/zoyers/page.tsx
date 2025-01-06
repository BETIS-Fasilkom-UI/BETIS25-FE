"use client";
import { Loading } from "@/components/elements/Loading";
import { useReroute } from "@/lib/reroute";
import Submission from "@/modules/SubmissionModule";
import { useState } from "react";

export default function Home() {
  const [isLoading, _] = useReroute();

  return isLoading ? (
    <Loading />
  ) : (
    <div className="h-[95vh] flex justify-center flex-col gap-1 mt-16 items-center overflow-hidden">
      <Submission />
    </div>
  );
}