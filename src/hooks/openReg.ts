"use client";
import z from "zod";
import useCloudinaryUpload from "./cloudinary";

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const openRegSchema = z.object({
  fullName: z.string(),
  username: z.string(),
  phoneNumber: z.string().regex(/[1-9]\d{1,14}$/),
  birthDate: z.date(),
  address: z.string(),
  identityCard: z
    .any()
    .refine((files) => {
      return files?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  studyMethood: z.string(),
  parentName: z.string(),
  relationWithParent: z.string(),
  parentPhoneNumber: z.string().regex(/[1-9]\d{1,14}$/),
  parentIdentityCard: z
    .any()
    .refine((files) => {
      return files?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  highschoolName: z.string(),
  highschoolClass: z.string(),
  meanScore: z.string(),
  studentReport: z
    .any()
    .refine((files) => {
      return files?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  motivationLetter: z
    .any()
    .refine((files) => {
      return files?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => files?.type === "application/pdf",
      "Only .PDF formats are supported."
    ),
  commitmentLetter: z
    .any()
    .refine((files) => {
      return files?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => files?.type === "application/pdf",
      "Only .PDF formats are supported."
    ),
  proofOfFollowing: z
    .any()
    .refine((files) => {
      return files?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) => files?.type === "application/pdf",
      "Only .PDF formats are supported."
    ),
  proofOfTwibbon: z
    .any()
    .refine((files) => {
      return files?.size <= MAX_FILE_SIZE;
    }, `Max image size is 5MB.`)
    .refine(
      (files) =>
        files?.type === "application/pdf" ||
        ACCEPTED_IMAGE_TYPES.includes(files?.type),
      "Only .PDFm .jpg, .jpeg, .png and .webp formats are supported."
    ),
  referralCode: z.string().optional(),
});

const validateFile = (
  file: File,
  acceptedTypes: string[],
  errorMessage: string
) => {
  if (file.size > MAX_FILE_SIZE) {
    return { isSuccess: false, message: "Max image size is 5MB." };
  } else if (!acceptedTypes.includes(file.type)) {
    return { isSuccess: false, message: errorMessage };
  }
  return { isSuccess: true };
};

export async function useOpenReg(
  values: z.infer<typeof openRegSchema>,
  optionalFiles: {
    povertyLetter?: File;
    housePhoto?: File;
    electricityBill?: File;
  }
) {
  const { povertyLetter, housePhoto, electricityBill } = optionalFiles;

  if (povertyLetter) {
    const validation = validateFile(
      povertyLetter,
      ["application/pdf"],
      "Only .PDF formats are supported."
    );
    if (!validation.isSuccess) return validation;
    const uploadImage = useCloudinaryUpload(povertyLetter);
    console.log(uploadImage);
  }

  if (housePhoto) {
    const validation = validateFile(
      housePhoto,
      ACCEPTED_IMAGE_TYPES,
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    );
    if (!validation.isSuccess) return validation;
    const uploadImage = useCloudinaryUpload(housePhoto);
    console.log(uploadImage);
  }

  if (electricityBill) {
    const validation = validateFile(
      electricityBill,
      ACCEPTED_IMAGE_TYPES,
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    );
    if (!validation.isSuccess) return validation;
    const uploadImage = useCloudinaryUpload(electricityBill);
    console.log(uploadImage);
  }

  
  //TODO: Logic pindahin file ke cloudinary terus convert jadi link

  const response = await fetch("http://localhost:8080/api/v1/open-reg/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    const data = await response.json();
    return { isSuccess: false, message: data.message };
  }

  return { isSuccess: true, message: "Registration success" };
}
