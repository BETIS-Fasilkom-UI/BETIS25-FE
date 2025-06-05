'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { forgotPasswordSchema, useForgotPassword } from '@/hooks/auth';
import { z } from 'zod';
import Link from 'next/link';
import Image from 'next/image';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Input from '@/components/ui/input';
import StarryBackground from '../LoginModule/module-elements/background';

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordModule = () => {
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useForgotPassword(values);
      console.log('Password reset email sent successfully');
    } catch (error) {
      console.error('Failed to send reset password email', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <StarryBackground />

      <div className="absolute inset-0 bg-black opacity-30 z-10 pointer-events-none"></div>

      <div className="flex flex-grow items-center justify-center py-[15rem] px-5 z-20">
        <Card className="w-full max-w-md lg:max-w-lg px-8 md:px-12">
          <CardHeader>
            <CardTitle className="text-center text-4xl md:text-4xl lg:text-5xl py-5">
              Lupa Password
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  asterisk
                  onChange={(e) => {
                    form.setValue('email', e.target.value);
                  }}
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div className="flex justify-center pt-3">
                <Button
                  type="submit"
                  className="w-full rounded-[20px] lg:py-7"
                  size="lg"
                >
                  Submit
                </Button>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex justify-center pb-2">
            <p className="text-sm">
              Ingat Kata Sandi Anda?{' '}
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
          src={'/s3/RumahJamur.png'}
          width={280}
          height={373}
          alt="Jamur"
          className="lg:hidden absolute bottom-0 right-0 -z-10 md:w-[380px] md:h-[573px]"
        />
      </div>

      <div className="relative">
        <Image
          src={'/s3/Pohon3.png'}
          width={300}
          height={493}
          alt="Pohon"
          className="lg:hidden absolute bottom-[-2rem] left-[-4rem] -z-10 md:w-[500px] md:h-[693px]"
        />
      </div>

      <div className="relative">
        <Image
          src={'/s3/PohonBesar.png'}
          width={700}
          height={790}
          alt="Pohon Besar"
          className="max-lg:hidden absolute bottom-0 right-0 -z-10"
        />

        <Image
          src={'/s3/Daun2.png'}
          width={153}
          height={126}
          alt="Daun"
          className="max-lg:hidden absolute bottom-0 right-[22rem] -z-10"
        />

        <Image
          src={'/s3/Daun3.png'}
          width={166}
          height={126}
          alt="Daun"
          className="max-lg:hidden absolute bottom-0 right-0 -z-10"
        />
      </div>

      <div className="relative">
        <Image
          src={'/s3/MascotDewasa.png'}
          width={118}
          height={319}
          alt="Mascot"
          className="max-lg:hidden absolute bottom-0 right-[18rem] -z-10"
        />
      </div>

      <div className="relative">
        <Image
          src={'/s3/RumahJamur4.png'}
          width={740}
          height={703}
          alt="Jamur"
          className="max-lg:hidden absolute bottom-0 left-0 -z-10"
        />
      </div>

      <div className="relative">
        <Image
          src={'/s3/PohonKecil2.png'}
          width={306}
          height={417}
          alt="Pohon Kecil"
          className="max-lg:hidden absolute bottom-0 left-0 -z-10"
        />

        <Image
          src={'/s3/PohonKecil.png'}
          width={148}
          height={228}
          alt="Pohon Kecil"
          className="max-lg:hidden absolute bottom-0 left-[37rem] -z-10"
        />
      </div>
    </div>
  );
};

export default ForgotPasswordModule;
