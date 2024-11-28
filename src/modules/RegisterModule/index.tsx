"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, useRegister } from "@/hooks/auth";
import { z } from "zod";
import Link from "next/link";
import Image from "next/image";

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/input";
import StarryBackground from "../LoginModule/module-elements/background";

type RegisterFormValues = z.infer<typeof registerSchema>

const RegisterModule = () => {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (values: RegisterFormValues) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const result = await useRegister(values);
    if (!result.isSuccess) {
      console.error("Register failed")
    }
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      <StarryBackground />
      
      <div className="absolute inset-0 bg-black opacity-30 z-10 pointer-events-none"></div>

      <div className="flex flex-grow items-center justify-center py-[12rem] px-5 z-20">
        <Card className="max-lg:w-full max-lg:max-w-md lg:w-[70%] px-8 lg:px-24">
          <CardHeader>
            <CardTitle className="text-center text-4xl md:text-4xl lg:text-5xl py-5">Register</CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <div className="lg:flex lg:space-x-8 space-y-4">
                <div className="lg:w-1/2 space-y-5">
                  {/* Nama Lengkap Input */}
                  <div className="lg:order-1">
                    <Input
                      label="Nama Lengkap"
                      type="text"
                      placeholder="Enter your full name"
                      onChange={(e) => {form.setValue('fullName', e.target.value)}}
                      asterisk
                    />
                    {form.formState.errors.fullName && (
                      <p className="text-sm text-red-500">{form.formState.errors.fullName.message}</p>
                    )}
                  </div>

                  {/* No HP / WA Input */}
                  <div className="lg:order-2">
                    <Input
                      label="No HP / WA"
                      type="text"
                      placeholder="Enter your phone number"
                      asterisk
                      onChange={(e) => {form.setValue('phoneNumber', e.target.value)}}
                    />
                    {form.formState.errors.phoneNumber && (
                      <p className="text-sm text-red-500">{form.formState.errors.phoneNumber.message}</p>
                    )}
                  </div>

                  {/* Password Input */}
                  <div className="lg:order-3">
                    <Input
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      asterisk
                      onChange={(e) => {form.setValue('password', e.target.value)}}
                    />
                    {form.formState.errors.password && (
                      <p className="text-sm text-red-500">{form.formState.errors.password.message}</p>
                    )}
                  </div>
                </div>

                <div className="lg:w-1/2 space-y-5">
                  {/* Nama Panggilan Input */}
                  <div className="lg:order-4">
                    <Input
                      label="Nama Panggilan"
                      type="text"
                      placeholder="Enter your username"
                      asterisk
                      onChange={(e) => {form.setValue('username', e.target.value)}}
                    />
                    {form.formState.errors.username && (
                      <p className="text-sm text-red-500">{form.formState.errors.username.message}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="lg:order-5">
                    <Input
                      label="Email Aktif"
                      type="email"
                      placeholder="Enter your email"
                      asterisk
                      onChange={(e) => {form.setValue('email', e.target.value)}}
                    />
                    {form.formState.errors.email && (
                      <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                    )}
                  </div>

                  {/* Konfirmasi Password Input */}
                  <div className="lg:order-6 lg:pb-4">
                    <Input
                      label="Konfirmasi Password"
                      type="password"
                      placeholder="Enter your password"
                      asterisk
                      onChange={(e) => {form.setValue('confirmPassword', e.target.value)}}
                    />
                    {form.formState.errors.confirmPassword && (
                      <p className="text-sm text-red-500">{form.formState.errors.confirmPassword.message}</p>
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
              <Link href="/login" className="text-yellow-400 font-bold">
                Login
              </Link>
            </p>
          </CardFooter>

        </Card>
      </div>

      {/* BACKGROUND IMAGE */}
      <div className="relative">
        <Image
          src="/Pohon4.png"
          width={302}
          height={498}
          alt="Pohon"
          className="lg:hidden absolute bottom-[-2rem] right-0 -z-10"
        />
      </div>

      <div className="relative">
        <Image
          src="/Dedaunan.png"
          width={360}
          height={159}
          alt="Dedaunan"
          className="max-lg:hidden absolute bottom-0 right-36 -z-10"
        />
      </div>

      <div className="relative">
        <Image
          src="/RumahJamur3.png"
          width={400}
          height={495}
          alt="Jamur"
          className="absolute bottom-0 left-0 -z-10 md:w-[500px] md:h-[614px] lg:w-[600px] lg:h-[714px]"
        />
      </div>

      <div className="relative">
        <Image
          src="/Daun.png"
          width={186}
          height={178}
          alt="Daun"
          className="absolute bottom-0 right-0 -z-10 md:w-[150px] md:h-[150px] lg:w-[250px] lg:h-[250px]"
        />
      </div>

    </div>
  )
}

export default RegisterModule
