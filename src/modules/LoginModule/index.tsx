"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, loginUser } from "@/hooks/auth";
import { z } from "zod";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import Link from "next/link";
import StarryBackground from "./module-elements/background";

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginModule = () => {
  const {
    //register,
    handleSubmit,
    //formState: { errors, isSubmitting },
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginFormValues) => {
    const result = await loginUser(values);
    if (!result.isSuccess) {
      console.error("Login failed");
    }
  };

  return (
    <div className="min-h-screen py-8">
      <StarryBackground />
      
      <div className="min-h-screen flex items-center justify-center mt-32 px-5">
        <Card className="w-full max-w-md lg:max-w-lg px-8">
          <CardHeader>
            <CardTitle className="text-center text-4xl md:text-4xl lg:text-5xl py-5">Login</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="">
              {/* Email Input */}
              <div className="pb-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  asterisk
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="pb-2">
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
              
              <div className="text-right pb-4">
                <Link href="/forgot-password" className="text-sm">
                  Lupa Password?
                </Link>
              </div>

              <Button type="submit" className="w-full rounded-[20px]" size="lg">
                Login
              </Button>

            </form>
          </CardContent>

          <CardFooter className="flex justify-center pb-2">
            <p className="text-sm">
              Belum Punya Akun?{" "}
              <Link href="/register" className="text-yellow-400 font-bold">
                Daftar
              </Link>
            </p>
          </CardFooter>

        </Card>
      </div>
    </div>
  );
};

export default LoginModule;
