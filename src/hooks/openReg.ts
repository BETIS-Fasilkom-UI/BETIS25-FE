"use client";
import { uploadFile } from "@/lib/s3";
import z from "zod";
import { useUserData } from "./auth";
import { getCookie } from "cookies-next";

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
  proofOfSg: z
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
    paycheck?: File;
  }
) {
  try {
    console.log("Registering user");
    const token = await getCookie("token");
    if (!token) {
      return { isSuccess: false, message: "Unauthorized access" };
    }
    const user = await useUserData();

    const userId = user?.id;
    const userName = user?.fullname.replace(/\s+/g, "-");

    console.log("Upload files to s3");

    console.log(user);

    const folder = `open-reg/${userName}_${userId}`;

    // Upload Necessary files to s3
    const identityCardUrl = await uploadFile(
      values.identityCard,
      `identity-card_${userName}_${userId}`,
      folder
    );

    const studentReportUrl = await uploadFile(
      values.studentReport,
      `student-report_${userName}_${userId}`,
      folder
    );

    const motivationLetterUrl = await uploadFile(
      values.motivationLetter,
      `motivasi-letter_${userName}_${userId}`,
      folder
    );

    const commitmentLetterUrl = await uploadFile(
      values.commitmentLetter,
      `commitment-letter_${userName}_${userId}`,
      folder
    );

    const proofOfFollowingUrl = await uploadFile(
      values.proofOfFollowing,
      `proof-of-following_${userName}_${userId}`,
      folder
    );

    const proofOfTwibbonUrl = await uploadFile(
      values.proofOfTwibbon,
      `proof-of-twibbon_${userName}_${userId}`,
      folder
    );

    const proofOfSg = await uploadFile(
      values.proofOfSg,
      `proof-of-sg_${userName}_${userId}`,
      folder
    );

    const { povertyLetter, housePhoto, electricityBill, paycheck } =
      optionalFiles;

    let povertyLetterUrl = null;
    let housePhotoUrl = null;
    let electricityBillUrl = null;
    let parentPaycheckUrl = null;

    if (paycheck) {
      const validation = validateFile(
        paycheck,
        ACCEPTED_IMAGE_TYPES,
        "Only .jpg, .jpeg, .png and .webp formats are supported."
      );
      if (!validation.isSuccess) return validation;

      parentPaycheckUrl = await uploadFile(
        paycheck,
        `parent-paycheck_${userName}_${userId}`,
        folder
      );
    }

    if (povertyLetter) {
      const validation = validateFile(
        povertyLetter,
        ["application/pdf"],
        "Only .PDF formats are supported."
      );
      if (!validation.isSuccess) return validation;
      povertyLetterUrl = await uploadFile(
        povertyLetter,
        `poverty-letter_${userName}_${userId}`,
        folder
      );
    }

    if (housePhoto) {
      const validation = validateFile(
        housePhoto,
        ACCEPTED_IMAGE_TYPES,
        "Only .jpg, .jpeg, .png and .webp formats are supported."
      );
      if (!validation.isSuccess) return validation;

      housePhotoUrl = await uploadFile(
        housePhoto,
        `house-photo_${userName}_${userId}`,
        folder
      );
    }

    if (electricityBill) {
      const validation = validateFile(
        electricityBill,
        ACCEPTED_IMAGE_TYPES,
        "Only .jpg, .jpeg, .png and .webp formats are supported."
      );
      if (!validation.isSuccess) return validation;

      electricityBillUrl = await uploadFile(
        electricityBill,
        `electricity-bill_${userName}_${userId}`,
        folder
      );
    }

    const body = {
      user_id: userId,
      full_name: values.fullName,
      email: user?.email,
      phone_number: values.phoneNumber,
      nickname: values.fullName,
      date_of_birth: values.birthDate.toISOString(),
      address: values.address,
      identity_card_url: identityCardUrl,
      study_method: values.studyMethood,
      guardian_name: values.parentName,
      guardian_relationship: values.relationWithParent,
      guardian_phone: values.parentPhoneNumber,
      paycheck_url: parentPaycheckUrl,
      school_name: values.highschoolName,
      grade: values.highschoolClass,
      average_score: parseFloat(values.meanScore),
      report_card_url: studentReportUrl,
      motivation_letter_url: motivationLetterUrl,
      commitment_statement_url: commitmentLetterUrl,
      social_media_following_url: proofOfFollowingUrl,
      twibbon_upload_url: proofOfTwibbonUrl,
      post_sg_proof_url: proofOfSg,
      financial_need_letter_url: povertyLetterUrl ?? "",
      electric_bill_document_url: electricityBillUrl ?? "",
      residence_photo_url: housePhotoUrl ?? "",
      affiliation_code: values.referralCode,
    };

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${API_URL}user/daftar-peserta`, {
      method: "POST",
      credentials: "omit",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, 
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const data = await response.json();
      return { isSuccess: false, message: data.message };
    }

    return { isSuccess: true, message: "Registration success" };
  } catch (error) {
    return { isSuccess: false, message: (error as Error).message };
  }
}
