import { useCallback } from "react";
import { toast } from "./sonner";
import { useDropzone, DropzoneInputProps} from 'react-dropzone';
import { cn } from "@/lib/utils";
import { File, Upload } from "lucide-react";
import { Label } from './label'

export interface UploadedElementProps {
  file: File
  setFile: React.Dispatch<React.SetStateAction<File | null>>
}

export interface NotUploadedElementProps {
  secondaryMessage?: string
  getInputProps: <T extends DropzoneInputProps>(props?: T) => T
}

export interface FileInputProps {
  file: File | null
  setFile: React.Dispatch<React.SetStateAction<File | null>>
  className?: string
  secondaryMessage?: string
  label?: string
  asterisk?: boolean;
}

const UploadedElement = ({ file, setFile }: UploadedElementProps) => {
  return (
    <div className="flex flex-col gap-4 items-center px-12 py-6">
      <File color="white" size={36} />
      <p className="text-[#fef5ff]">{file.name}</p>
    </div>
  )
}

const NotUploadedElement = ({ secondaryMessage }: NotUploadedElementProps) => {
  return (
    <div className="flex flex-col gap-1 sm:gap-4 items-center px-2 sm:px-12 py-6">
      <Upload color="black" size={36} />
      <p className="text-gray-500 text-center text-xs sm:text-xs md:text-base">Please upload your File Here, Max Size 5 MB</p>
      {secondaryMessage && <p className="text-gray-500">{secondaryMessage}</p>}
    </div>
  )
}

export const FileInput = ({ file, setFile, secondaryMessage, label, asterisk }: FileInputProps) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]

    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size exceeded.')
      return
    }

    setFile(file)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png'],
      'application/zip': ['.zip'],
      'application/pdf': ['.pdf'],
    },
  })


  return (
    <div className={cn("flex flex-col gap-2", "w-full")}>
      {label && (
        <Label>
          {label}
          {asterisk && <span className="text-red-500"> *</span>}
        </Label>
      )}
      
      <div
        {...getRootProps()}
        className={cn(
          "h-[100px] sm:h-[150px] md:h-[128px] lg:h-[150px] p-3  cursor-pointer flex justify-center items-center rounded-xl border border-dashed" ,
          !file ? 'bg-white border-[#692597]' : 'bg-[#b6855e] border-white',
          isDragActive ? 'active' : '',
        )}
      >
        <input {...getInputProps()} />

        {file ? (
          <UploadedElement file={file} setFile={setFile} />
        ) : (
          <NotUploadedElement
            secondaryMessage={secondaryMessage}
            getInputProps={getInputProps}
          />
        )}
      </div>
    </div>

  )
}

