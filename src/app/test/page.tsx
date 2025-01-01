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
import { uploadFile } from "@/lib/s3";
import Image from "next/image";

export default function Home() {
  const [page, setPage] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, _] = useReroute();
  const [urlPhoto, setUrlPhoto] = useState<string | null>(null);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="h-[100vh] flex justify-center flex-col gap-6 my-10 px-[10vw] items-center">
      <FileInput file={file} setFile={setFile} />
      <Button
        onClick={async () => {
          if (file) {
            const url = await uploadFile(file, crypto.randomUUID(), "test");
            setUrlPhoto(url);
            toast.success(url);
          } else {
            toast.error("No file selected");
          }
        }}
      >
        Upload
      </Button>
      {urlPhoto && (urlPhoto)}
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
