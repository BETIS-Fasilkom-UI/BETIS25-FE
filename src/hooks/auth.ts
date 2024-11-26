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
    phoneNumber: z.string().regex(/[1-9]\d{1,14}$/),
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
  );

  if (!userCredential) {
    toast.error("Email/Password salah");
    return { isSuccess: false };
  }

  if (!userCredential.user?.emailVerified) {
    toast.error("Email belum terverifikasi");
    return { isSuccess: false };
  }

  const user = userCredential.user;
  const idToken = await user.getIdToken();

  const response = await fetch(
    "http://localhost:8080/api/v1/auth/create-session/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id_token: idToken }),
    }
  );

  if (response.ok) {
    toast.success("Login success");
    return { isSuccess: true };
  } else {
    toast.error("Login failed");
    return { isSuccess: false };
  }
}

export async function useRegister(values: z.infer<typeof registerSchema>) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    values.email,
    values.password
  );

  if (userCredential.user) {
    const user = userCredential.user;
    await updateProfile(user, {
      displayName: values.fullName,
    });
    sendEmailVerification(user);
    toast.success("Register success, silahkan cek email untuk verifikasi");

    // add logic ke db buat create user user

    return { isSuccess: true };
  } else {
    toast.error("Register failed");
    return { isSuccess: false };
  }
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
