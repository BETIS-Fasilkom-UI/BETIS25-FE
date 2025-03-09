'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Input from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';
import { loginSchema, useLogin } from '@/hooks/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import StarryBackground from './module-elements/background';

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginModule = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const result = await useLogin(values);

    if (result.isSuccess) {
      toast.success(result.message);
      window.location.reload();
    } else {
      toast.error(result.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <StarryBackground />

      <div className="absolute inset-0 bg-black opacity-30 z-10 pointer-events-none"></div>

      <div className="flex flex-grow items-center justify-center py-[15rem] px-5 z-20">
        <Card className="w-full max-w-md lg:max-w-lg px-8">
          <CardHeader>
            <CardTitle className="text-center text-4xl md:text-4xl lg:text-5xl py-5">
              Login
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="pb-4">
                <Input
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    form.setValue('email', e.target.value);
                  }}
                  asterisk
                />
                {form.formState.errors.email && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div className="pb-2">
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => {
                    form.setValue('password', e.target.value);
                  }}
                  asterisk
                />
                {form.formState.errors.password && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </div>

              <div className="text-right pb-4">
                <Link href="/reset-password" className="text-sm">
                  Lupa Password?
                </Link>
              </div>

              <Button
                isLoading={isLoading}
                type="submit"
                className="w-full rounded-[20px]"
                size="lg"
              >
                Login
              </Button>
            </form>
          </CardContent>

          <CardFooter className="flex justify-center pb-2">
            <p className="text-sm">
              Belum Punya Akun?{' '}
              <Link href="/register" className="text-yellow-400 font-bold">
                Daftar
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
          className="md:hidden absolute bottom-0 right-0 -z-10"
        />

        <Image
          src={'/s3/RumahJamur2.png'}
          width={495}
          height={606}
          alt="Jamur"
          className="max-md:hidden absolute bottom-0 right-0 -z-10"
        />

        <Image
          src={'/s3/JamurMini.png'}
          width={184}
          height={208}
          alt="Jamur Mini"
          className="max-lg:hidden absolute bottom-0 right-[20rem] -z-10"
        />
      </div>

      <div className="relative">
        <Image
          src={'/s3/Pohon1.png'}
          width={215}
          height={515}
          alt="Pohon"
          className="lg:hidden absolute bottom-0 left-0 -z-10 md:h-[1024px] md:w-[312px]"
        />

        <Image
          src={'/s3/Pohon2.png'}
          width={556}
          height={979}
          alt="Pohon"
          className="max-lg:hidden absolute bottom-0 left-0 -z-10"
        />

        <Image
          src={'/s3/Pohon3.png'}
          width={445}
          height={668}
          alt="Pohon"
          className="max-lg:hidden absolute bottom-0 left-[23rem] -z-10"
        />
      </div>

      <div className="relative">
        <Image
          src={'/s3/Mascot.png'}
          width={140}
          height={213}
          alt="Mascot"
          className="absolute bottom-0 left-5 -z-10 md:w-[206px] md:h-[314px] md:left-36"
        />
      </div>

      <div className="relative">
        <Image
          src={'/s3/Dedaunan.png'}
          width={251}
          height={111}
          alt="Dedaunan"
          className="max-lg:hidden absolute bottom-0 right-1/2 translate-x-[-3rem] -z-10 "
        />

        <Image
          src={'/s3/Dedaunan2.png'}
          width={251}
          height={111}
          alt="Dedaunan"
          className="max-lg:hidden absolute bottom-0 left-1/2 translate-x-12 -z-10 "
        />

        <Image
          src={'/s3/Dedaunan3.png'}
          width={251}
          height={111}
          alt="Dedaunan"
          className="max-lg:hidden absolute bottom-0 left-1/2 translate-x-[-6rem] -z-10 "
        />
      </div>
    </div>
  );
};

export default LoginModule;
