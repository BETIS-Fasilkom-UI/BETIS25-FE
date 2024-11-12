import { useCallback } from "react";
import { toast } from "./sonner";
import { useDropzone, DropzoneInputProps} from 'react-dropzone';
import { cn } from "@/lib/utils";
import { File, Upload } from "lucide-react";

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
}

const UploadedElement = ({ file, setFile }: UploadedElementProps) => {
  return (
    <div className="flex flex-col gap-4 items-center px-12 py-6">
      <File color="black" size={36} />
      <p className="text-gray-500">{file.name}</p>
    </div>
  )
}

const NotUploadedElement = ({ secondaryMessage }: NotUploadedElementProps) => {
  return (
    <div className="flex flex-col gap-4 items-center px-12 py-6">
      <Upload color="black" size={36} />
      <p className="text-gray-500">Please upload your File Here, Max Size 5 MB</p>
      {secondaryMessage && <p className="text-gray-500">{secondaryMessage}</p>}
    </div>
  )
}

export const FileInput = ({ file, setFile, secondaryMessage }: FileInputProps) => {
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
    <div
      {...getRootProps()}
      className={cn(
        "h-full p-3  cursor-pointer flex justify-center items-center rounded-xl",
        !file ? 'bg-white' : 'bg-violet-100',
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
  )
}

