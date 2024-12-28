const useCloudinaryUpload = async (file: File) => {
  const uploadPreset = "qft4d2nxt";
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  // Convert file to base64
  const fileToBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const base64File = await fileToBase64(file);

  // Prepare upload request body
  const uploadBody = JSON.stringify({
    file: base64File,
    upload_preset: uploadPreset,
    api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  });

  // Upload to Cloudinary
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: uploadBody,
    }
  );

  
  const result = await response.json();
  
  if (!response.ok) {
    return result;
  }

  return result;
};

export default useCloudinaryUpload;
