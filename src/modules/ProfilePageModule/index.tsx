"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "@/hooks/interface";
import StarryBackground from "../LoginModule/module-elements/background";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ProfilePageModule = ({ user }: { user: User }) => {
  const isRegisterPeserta = user.address !== "";
  return (
    <main className="min-h-screen flex items-center justify-center">
      <StarryBackground />
      <section className="w-[80vw] p-6 lg:p-10 flex flex-col gap-6 bg-[#f8ebf30c] rounded-xl shadow-[4px_4px_12px_0px_rgba(254,245,255,0.40),-4px_-4px_12px_0px_rgba(254,245,255,0.40)] backdrop-blur-md my-40">
        <Avatar className="w-40 h-40 mb-6 max-md:mx-auto">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>
            {user.fullname.charAt(0).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-lg font-semibold">Nama Lengkap</h3>
              <p className="md:text-base text-sm">{user.fullname}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Nama Panggilan</h3>
              <p className="md:text-base text-sm">{user.nickname}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="md:text-base text-sm">{user.email}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Nomor Telepon</h3>
              <p className="md:text-base text-sm">{user.phoneNumber}</p>
            </div>
            {isRegisterPeserta ? (
              <div>
                <h3 className="text-lg font-semibold">Alamat</h3>
                <p className="md:text-base text-sm">{user.address}</p>
              </div>
            ) : (
              <Link href="/registration">
                <Button>Register Peserta BETIS</Button>
              </Link>
            )}
          </div>
          {isRegisterPeserta && (
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-lg font-semibold">Nama Sekolah</h3>
                <p className="md:text-base text-sm">{user.school_name}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Kelas</h3>
                <p className="md:text-base text-sm">{user.grade}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Metode Belajar</h3>
                <p className="md:text-base text-sm">{user.study_method}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Wakil</h3>
                <p className="md:text-base text-sm">
                  <span className="font-semibold">
                    {user.guardian_relationship}
                  </span>
                  {" " + user.guardian_name}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Nomor Telepon Wakil</h3>
                <p className="md:text-base text-sm">{user.guardian_phone}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};
