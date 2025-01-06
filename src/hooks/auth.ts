"use client";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { toast } from "@/components/ui/sonner";
import z from "zod";
import { GetUserDataResponse, LoginResponse, User } from "./interface";
import { getCookie, setCookie } from "cookies-next";
import { decode, JwtPayload } from "jsonwebtoken";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerSchema = z
  .object({
    email: z.string().email(),
    fullName: z.string(),
    username: z.string(),
    phoneNumber: z.string().regex(/^\d{1,3}[1-9]\d{10,14}$/), // Ensure country code is included
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  });

export const forgotPasswordSchema = z.object({
  email: z.string().email(),
});

export async function useLogin(values: z.infer<typeof loginSchema>) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    values.email,
    values.password
  )
    .then(async (userCred) => {
      const user = userCred.user;
      if (!user.emailVerified) {
        return {
          isSuccess: false,
          message: "Email belum terverifikasi, silahkan cek email",
        };
      }
      const idToken = await user.getIdToken();
      const userData = user.displayName?.split("<|>") || [];

      const API_URL = process.env.NEXT_PUBLIC_API_URL;

      const response = await fetch(
        `${API_URL}auth/create-session/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_token: idToken,
            full_name: userData[0],
            nickname: userData[1],
            phone_number: userData[2],
          }),
        }
      );

      if (response.ok) {
        const data: LoginResponse = await response.json();
        setCookie("token", data.token, {
          maxAge: 60 * 60 * 24 * 5,
        });
        return { isSuccess: true, message: "Login success" };
      } else {
        return { isSuccess: false, message: "Login failed" };
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      return {
        isSuccess: false,
        message: ` ${
          (errorCode === "auth/invalid-credential" && "Wrong email/password") ||
          "Login failed"
        }`,
      };
    });
  return userCredential;
}

export async function useRegister(values: z.infer<typeof registerSchema>) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    values.email,
    values.password
  )
    .then(async (userCred) => {
      if (userCred.user) {
        const user = userCred.user;
        await updateProfile(user, {
          displayName: `${values.fullName}<|>${values.username}<|>${values.phoneNumber}`,
        });
        sendEmailVerification(user);

        return {
          isSuccess: true,
          message: "Register success, silahkan cek email untuk verifikasi",
        };
      } else {
        return { isSuccess: false, message: "Register failed" };
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      return {
        isSuccess: false,
        message: ` ${
          (errorCode === "auth/email-already-in-use" &&
            "Email already in use") ||
          "Register failed"
        }`,
      };
    });

  return userCredential;
}

export function useForgotPassword(
  values: z.infer<typeof forgotPasswordSchema>
) {
  sendPasswordResetEmail(auth, values.email)
    .then(() => {
      toast.success("Email reset password telah dikirim");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorCode, errorMessage);
    });
}

export const useUserData: 
  () => Promise<User | null>
= async () => {
  const token = await getCookie("token");
  if (!token) {
    return null;
  }

  const user = decode(token) as JwtPayload;
  if (!user) {
    return null;
  }

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(
    `${API_URL}user/${user?.email}`,
    {
      credentials: "omit",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    return null;
  } else {
    const data: GetUserDataResponse = await response.json();
    const userData = data.data;
    return {
      id: userData.id,
      fullname: userData.fullname,
      email: userData.email,
      phoneNumber: userData.phone_number,
      nickname: userData.nickname,
      address: userData.address,
      identity_card_url: userData.identity_card_url,
      study_method: userData.study_method,
      guardian_name: userData.guardian_name,
      guardian_relationship: userData.guardian_relationship,
      guardian_phone: userData.guardian_phone,
      guardian_document_url: userData.guardian_document_url,
      school_name: userData.school_name,
      grade: userData.grade,
      average_score: userData.average_score,
      report_card_url: userData.report_card_url,
      motivation_letter_url: userData.motivation_letter_url,
      commitment_statement_url: userData.commitment_statement_url,
      social_media_following_url: userData.social_media_following_url,
      twibbon_upload_url: userData.twibbon_upload_url,
      financial_need_letter_url: userData.financial_need_letter_url,
      electric_bill_document_url: userData.electric_bill_document_url,
      residence_photo_url: userData.residence_photo_url,
      affiliation_code: userData.affiliation_code,
      isVerified: userData.is_verified,
    } as User;
  }
};