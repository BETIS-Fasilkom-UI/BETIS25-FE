"use client";

import {FileInput} from "@/components/ui/file-input";
import React from "react";
import {useForm} from "react-hook-form";
import useCloudinaryUpload from "@/hooks/cloudinary";
import {zodResolver} from "@hookform/resolvers/zod";
import { z } from "zod";
import {Button} from "@/components/ui/button";

const uploadSchema =  z.object({
  file: z.any()
})

type FormValues = z.infer<typeof uploadSchema>

const UploadPage = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(uploadSchema),
    defaultValues: {
      file: null,
    }
  });

  const onSubmit = async (_: FormValues) => {
    try {
      const {file} = form.getValues();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const res = await useCloudinaryUpload(file);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return <div className="mt-36">
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FileInput
        label="Bukti Upload Twibbon (JPG/PNG/JPEG/PDF)"
        file={form.watch("file")}
        setFile={(file) =>
          form.setValue(
            "file",
            file
          )
        }
        className="w-full"
        asterisk
      />
    <Button type="submit" variant="primary">Submit</Button>
    </form>
  </div>
}

export default UploadPage