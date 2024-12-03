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

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const registerSchema = z
  .object({
    email: z.string().email(),
    fullName: z.string(),
    username: z.string(),
    phoneNumber: z.string().regex(/[1-9]\d{10,14}$/),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password must be the same",
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

      const response = await fetch(
        "http://localhost:8080/api/v1/auth/create-session/",
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
