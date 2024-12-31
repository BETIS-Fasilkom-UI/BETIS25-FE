"use client";
import { ContactPerson } from "@/components/elements/ContactPerson";
import Countdown from "@/components/elements/Countdown";
import { Loading } from "@/components/elements/Loading";
import TestimonyCarousel from "@/components/elements/testimony/TestimonyCarousel";
import {
  betisTestimoni,
  betisTestimoniOptions,
} from "@/components/elements/testimony/const";
import { Button } from "@/components/ui/button";
import Chip from "@/components/ui/chip";
import Pagination from "@/components/ui/pagination";
import Tooltip from "@/components/ui/tooltip";
import { useReroute } from "@/lib/reroute";
import { useState } from "react";
import { Alert } from "@/components/ui/alert";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Card,
  CardDescription,
  CardContent,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Combobox } from "@/components/ui/combobox";
import { FileInput } from "@/components/ui/file-input";
import Input from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { TabsComponent } from "@/components/ui/tabs";
import { toast } from "@/components/ui/sonner";
import { getAsset } from "@/lib/s3";

export default function Home() {
  const [page, setPage] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, _] = useReroute();

  return isLoading ? (
    <Loading />
  ) : (
    <div className="h-[400vh] flex justify-center flex-col gap-6 my-10 px-[10vw] items-center">
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
      <TestimonyCarousel
        slides={betisTestimoni}
        options={betisTestimoniOptions}
      />
      <Alert variant="success">Success</Alert>
      <Alert variant="warning">Warning</Alert>
      <Alert variant="error">Error</Alert>
      <Alert variant="info">Info</Alert>
      <DatePicker />
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
        </CardHeader>
        <CardImage src={getAsset("/Andrew.jpg")} alt="random" />
        <CardContent>Content</CardContent>
        <CardFooter>
          <Button isLoading>Click me</Button>
          <Button variant="secondary">Click me</Button>
        </CardFooter>
      </Card>
      <Checkbox />
      <Combobox choices={comboboxDummy} />
      <FileInput file={file} setFile={setFile} />
      <Input />
      <Textarea />
      <Toggle />
      <TabsComponent
        page={page}
        setPage={setPage}
        tabs={[
          { title: "Tab 1", content: <div>Tab 1</div> },
          { title: "Tab 2", content: <div>Tab 2</div> },
        ]}
      />
      <Button onClick={() => {
        if (page === 1){
          setPage(0)
        } else {
          setPage(1)
        }
      }}>Next</Button>
      {page}
    </div>
  );
}

const comboboxDummy = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
  { label: "Option 4", value: "option4" },
  { label: "Option 5", value: "option5" },
];
