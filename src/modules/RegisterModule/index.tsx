"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerUser } from "@/hooks/auth";
import { z } from "zod";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import Link from "next/link";
import StarryBackground from "../LoginModule/module-elements/background";

type RegisterFormValues = z.infer<typeof registerSchema>;

const RegisterModule = () => {
  const {
    //register,
    handleSubmit,
    //formState: { errors, isSubmitting },
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (values: RegisterFormValues) => {
    const result = await registerUser(values);
    if (!result.isSuccess) {
      console.error("Login failed");
    }
  };

  return (
    <div className="min-h-screen">
      <StarryBackground />
      
      <div className="min-h-screen flex items-center justify-center mt-32 px-5">
        <Card className="max-lg:w-full max-lg:max-w-md lg:w-[70%] px-8 lg:px-24">
          <CardHeader>
            <CardTitle className="text-center text-4xl md:text-4xl lg:text-5xl py-5">Register</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="lg:flex lg:space-x-8">
                <div className="lg:w-1/2 space-y-5">
                  {/* Nama Lengkap Input */}
                  <div className="lg:order-1">
                    <Input
                      label="Nama Lengkap"
                      type="text"
                      placeholder="Enter your full name"
                      asterisk
                    />
                    {errors.fullName && (
                      <p className="text-sm text-red-500">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* No HP / WA Input */}
                  <div className="lg:order-2">
                    <Input
                      label="No HP / WA"
                      type="text"
                      placeholder="Enter your phone number"
                      asterisk
                    />
                    {errors.phoneNumber && (
                      <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
                    )}
                  </div>

                  {/* Password Input */}
                  <div className="lg:order-3">
                    <Input
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      asterisk
                    />
                    {errors.password && (
                      <p className="text-sm text-red-500">{errors.password.message}</p>
                    )}
                  </div>
                </div>

                {/* Kolom Kanan */}
                <div className="lg:w-1/2 space-y-5">
                  {/* Nama Panggilan Input */}
                  <div className="lg:order-4">
                    <Input
                      label="Nama Panggilan"
                      type="text"
                      placeholder="Enter your name"
                      asterisk
                    />
                    {errors.username && (
                      <p className="text-sm text-red-500">{errors.username.message}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="lg:order-5">
                    <Input
                      label="Email Aktif"
                      type="email"
                      placeholder="Enter your email"
                      asterisk
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Konfirmasi Password Input */}
                  <div className="lg:order-6 lg:pb-4">
                    <Input
                      label="Konfirmasi Password"
                      type="password"
                      placeholder="Enter your password"
                      asterisk
                    />
                    {errors.confirmPassword && (
                      <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-3">
                <Button type="submit" className="w-full lg:w-1/2 rounded-[20px] lg:py-7" size="lg">
                  Daftar
                </Button>
              </div>

            </form>
          </CardContent>

          <CardFooter className="flex justify-center pb-2">
            <p className="text-sm">
              Sudah punya Akun?{" "}
              <Link href="/register" className="text-yellow-400 font-bold">
                Login
              </Link>
            </p>
          </CardFooter>

        </Card>
      </div>
    </div>
  );
};

export default RegisterModule;
