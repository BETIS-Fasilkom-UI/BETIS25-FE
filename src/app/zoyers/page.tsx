"use client";
import { Loading } from "@/components/elements/Loading";
import { useReroute } from "@/lib/reroute";
import CountdownSNBTModule from "@/modules/CountdownSNBTModule";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, _] = useReroute();

  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex justify-center flex-col gap-6 my-10 items-center py-[90px]">
      <CountdownSNBTModule/>
    </div>
  );
}