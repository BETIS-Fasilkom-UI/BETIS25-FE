"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileInput } from "@/components/ui/file-input";
import { toast } from "@/components/ui/sonner";
import { getAsset } from "@/lib/s3";
import Image from "next/image";
import {
  submissionItemSchema,
  updateSubmission,
  useSubmission,
} from "@/hooks/submission";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmissionItem } from "@/modules/SubmissionItemModule/interface";
import { Submission } from "@/modules/SubmissionModule/interface";

type SubmissionItemFormValues = z.infer<typeof submissionItemSchema>;

const SubmissionItemModule = ({
  data,
  submissionData,
}: {
  data: SubmissionItem | null;
  submissionData: Submission;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [FormData, setFormData] = useState<SubmissionItemFormValues | null>(
    null
  );
  const [isEdit, setIsEdit] = useState(data ? true : false);

  useEffect(() => {
    if (data?.url) {
      setIsEdit(true);
    }
  }, [data]);

  const { push } = useRouter();

  const form = useForm<SubmissionItemFormValues>({
    resolver: zodResolver(submissionItemSchema),
  });

  const targetDate = new Date(submissionData.cutoff_at.replace(" ", "T"));
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
  );
  const isSubmissionClosed = now > targetDate;

  useEffect(() => {
    if (isSubmissionClosed) {
      toast.error("Submisi sudah tutup");
      push(`/sub/submission/${submissionData.id}`);
    }
  }, []);

  const onSubmit = async (values: SubmissionItemFormValues) => {
    setIsLoading(true);
    const currentData = form.getValues();
    setFormData(currentData);

    const combinedData = { ...FormData, ...values };

    let result = { isSuccess: false, message: "Unknown Error"};
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (!isEdit) {
      result = await useSubmission(
        combinedData,
        submissionData.id,
        submissionData.title
      );
    } else if (isEdit && data) {
      result = await updateSubmission(
        combinedData,
        data.id,
        submissionData.id,
        submissionData.title
      );
    }

    if (result.isSuccess) {
      toast.success("Submission success");
      form.reset();
      setFormData(null);

      push(`/sub/submission/${submissionData.id}`);
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

      <form
        className="relative grid place-items-center -top-[1px] sm:top-[9.7px] md:-top-[43px] lg:-top-[58px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 gap-1 sm:gap-2 p-6 w-[260.968px] sm:w-[305.968px] md:w-[500.672px] lg:w-[530.672px]">
          <div className="text-center text-[#87101a] text-2xl translate-y-[3px] sm:-translate-y-[1px] md:-translate-y-[2px] lg:-translate-y-[1px] sm:text-3xl md:text-4xl font-black font-cinzel">
            week 4
          </div>
          <div className="text-center text-[#500910] text-sm md:text-[15px] lg:text-[17px] font-semibold font-raleway">
            File Submission
          </div>

          <FileInput
            file={form.watch("submission")}
            setFile={(file) => form.setValue("submission", file)}
          />

          <div className="relative flex flex-col -translate-y-5 sm:translate-y-0 sm:flex-row justify-center gap-1 sm:gap-3 w-[100%]">
            <Button
              onClick={() => {
                push(`/sub/submission/${submissionData.id}`);
              }}
              className="h-[10%] sm:w-[50%] sm:h-[80%] sm:text-t7"
              variant="secondary"
            >
              Cancel
            </Button>

            <Button
              isLoading={isLoading}
              type="submit"
              onClick={() => {
                if (form.getValues().submission === undefined) {
                  toast.warning("Please fill in all required fields");
                } else if (form.formState.errors.submission) {
                  toast.warning(
                    typeof form.formState.errors.submission?.message ===
                      "string"
                      ? form.formState.errors.submission.message
                      : ""
                  );
                }
              }}
              className="h-[10%] sm:w-[50%] sm:h-[80%]"
            >
              Save Changes
            </Button>
          </div>
        </div>
      </form>

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
