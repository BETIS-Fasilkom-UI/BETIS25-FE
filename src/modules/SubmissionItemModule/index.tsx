"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Tooltip from "@/components/ui/tooltip";
import { FileInput } from "@/components/ui/file-input";
import { toast } from "@/components/ui/sonner";
import { getAsset, uploadFile } from "@/lib/s3";
import Image from "next/image";
import { Calendar, Clock, File, Link } from "lucide-react";
import { submissionItemSchema, useSubmission } from "@/hooks/submissionItem";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmissionItem } from "@/app/sub/submission-item/[user_id]/[submission_id]/interface";
import { Submission } from "@/app/sub/submission/[id]/interface";

type SubmissionItemFormValues = z.infer<typeof submissionItemSchema>;

const SubmissionItemModule = ({
  data,
  submissionData,
}: {
  data: SubmissionItem;
  submissionData: Submission;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [FormData, setFormData] = useState<SubmissionItemFormValues | null>(
    null
  );
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (data.url) {
      setFormData({ submission: data.url });
      setIsEdit(true);
    }
  }, [data]);

  const { push, replace } = useRouter();

  const form = useForm<SubmissionItemFormValues>({
    resolver: zodResolver(submissionItemSchema),
  });

  const targetDate = new Date("2025-02-14T23:55:00+07:00"); // TODO: ganti ke yg cut off time
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
  );
  const isSubmissionClosed = now > targetDate;

  useEffect(() => {
    if (isSubmissionClosed) {
      toast.error("Submisi sudah tutup");
      replace(`/sub/submission/${data.submission_id}`);
    }
  }, []);

  const onSubmit = async (values: SubmissionItemFormValues) => {
    setIsLoading(true);
    const currentData = form.getValues();
    setFormData(currentData);

    const combinedData = { ...FormData, ...values };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const result = await useSubmission(
      combinedData,
      data.submission_id,
      submissionData.title
    );
    if (result.isSuccess) {
      toast.success("Registration success");
      form.reset();
      setFormData(null);

      replace(`/sub/submission/${data.submission_id}`);
    } else {
      toast.error(result.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (FormData) {
      (Object.keys(FormData) as (keyof typeof FormData)[]).forEach((key) => {
        form.setValue(key, FormData[key]);
      });
    }
  }, [FormData, form]);

  return (
    <div className="relative flex items-start md:items-center justify-center h-screen w-screen">
      <div className="absolute md:w-[581.588px] md:h-[389.025px] lg:w-[664.672px] lg:h-[444.6px] max-md:hidden">
        <Image
          alt="Scroll"
          src={getAsset("/scroll.png")}
          fill
          priority
          sizes="none"
          className="object-contain"
        />
      </div>

      <div className="absolute w-[305.968px] h-[350.88px] sm:w-[382.46px] sm:h-[438.6px] md:hidden">
        <Image
          alt="ScrollKecil"
          src={getAsset("/scrollkecil.png")}
          fill
          priority
          sizes="none"
          className="object-contain"
        />
      </div>

      <div className="relative grid place-items-center -top-[1px] sm:top-[9.7px] md:-top-[43px] lg:-top-[58px]">
        <div className="grid grid-cols-1 gap-1 sm:gap-2 p-6 w-[260.968px] sm:w-[305.968px] md:w-[500.672px] lg:w-[530.672px]">
          <div className="text-center text-[#87101a] text-2xl translate-y-[3px] sm:-translate-y-[1px] md:-translate-y-[2px] lg:-translate-y-[1px] sm:text-3xl md:text-4xl font-black font-cinzel">
            week 4
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="text-center text-[#500910] text-sm md:text-[15px] lg:text-[17px] font-semibold font-raleway">
              File Submission
            </div>

            <FileInput
              file={form.watch("submission")}
              setFile={(file) => form.setValue("submission", file)}
            />
            {form.formState.errors.submission && (
              <p className="text-sm text-red-500">
                {typeof form.formState.errors.submission?.message === "string"
                  ? form.formState.errors.submission.message
                  : ""}
              </p>
            )}

            <div className="relative flex flex-col -translate-y-5 sm:translate-y-0 sm:flex-row justify-center gap-1 sm:gap-3 w-[100%]">
              <Link href="/sub/submission/[id]">
                <Button
                  onClick={() => {
                    replace(`/sub/submission/${data.submission_id}`);
                  }}
                  className="h-[10%] sm:w-[50%] sm:h-[80%] sm:text-t7"
                  variant="secondary"
                >
                  Cancel
                </Button>
              </Link>

              <Button
                isLoading={isLoading}
                type="submit"
                onClick={() => {
                  if (form.getValues().submission === undefined) {
                    toast.warning("Please fill in all required fields");
                  }
                }}
                className="h-[10%] sm:w-[50%] sm:h-[80%]"
              >
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="absolute -z-20 h-2/5 sm:h-2/3 aspect-[1/3] sm:aspect-[1/2] md:h-full -left-5 -bottom-[88px] sm:-bottom-16 md:-bottom-[98px] lg:bottom-0 lg:aspect-[2/3]">
        <Image
          alt="BG"
          src={getAsset("/SubmissionBGKIRI.png")}
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
      <div className="absolute -z-20 h-2/5 sm:h-2/3 aspect-[1/3] sm:aspect-[1/2]  md:h-full -right-5 -bottom-[86px] sm:-bottom-16 md:-bottom-[86px] lg:bottom-0 lg:aspect-[2/3]">
        <Image
          alt="BG"
          src={getAsset("/SubmissionBGKANAN.png")}
          fill
          sizes="none"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default SubmissionItemModule;
