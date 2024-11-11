"use client";
import { Button } from "@/components/ui/button";
import Chip from "@/components/ui/chip";
import Countdown from "@/components/elements/Countdown";
import Pagination from "@/components/ui/pagination";
import Tooltip from "@/components/ui/tooltip";
import { useState } from "react";
import { ContactPerson } from "@/components/elements/ContactPerson";

export default function Home() {
  const [page, setPage] = useState(1);
  return (
    <div className="min-h-[150vh] flex justify-center flex-col gap-6 my-10 items-center">
      <div className="grid grid-cols-1 gap-6">
        <Button>Click me</Button>
        <Button isLoading>Click me</Button>
        <Button variant="secondary">Click me</Button>
        <Button isLoading variant="secondary">
          Click me
        </Button>
        <Button variant="tertiary">Click me</Button>
        <Button isLoading variant="tertiary">
          Click me
        </Button>
        <Button variant="destructive">Click me</Button>
        <Button isLoading variant="destructive">
          Click me
        </Button>
      </div>
      <Countdown displayDate targetDate={new Date("2024-12-31T23:59:59")} />
      <Chip>Chip</Chip>
      <Chip variant="secondary">Chip</Chip>
      <Chip variant="tertiary">Chip</Chip>
      <Button>
        <Tooltip text="Tooltip">Hover me</Tooltip>
      </Button>
      <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
      <ContactPerson />
    </div>
  );
}
