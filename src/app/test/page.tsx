'use client';
import { Loading } from '@/components/elements/Loading';
import { Button } from '@/components/ui/button';
import { FileInput } from '@/components/ui/file-input';
import { toast } from '@/components/ui/sonner';
import { useReroute } from '@/lib/reroute';
import { useState } from 'react';

import { uploadFile } from '@/lib/s3';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading] = useReroute();
  const [urlPhoto, setUrlPhoto] = useState<string | null>(null);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="h-[100vh] flex justify-center flex-col gap-6 my-10 px-[10vw] items-center">
      <FileInput file={file} setFile={setFile} />
      <Button
        onClick={async () => {
          if (file) {
            const url = await uploadFile(file, crypto.randomUUID(), 'test');
            setUrlPhoto(url);
            toast.success(url);
          } else {
            toast.error('No file selected');
          }
        }}
      >
        Upload
      </Button>
      {urlPhoto && urlPhoto}
    </div>
  );
}
