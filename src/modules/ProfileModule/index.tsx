"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { User } from "@/hooks/interface";
import { getAsset } from "@/lib/s3";
import { Background } from "@/modules/ProfileModule/components/background"; // Import your custom DatePicker
import Input from "@/modules/ProfileModule/components/input";
import { Modal, ModalButton } from "@/modules/ProfileModule/components/modal"; // Adjust the import path
import { getCookie } from "cookies-next";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProfileModule = ({ user }: { user: User }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("/Pp-girl1.png"); // Default avatar
  const [newAvatar, setNewAvatar] = useState(selectedAvatar); // Avatar selected in the modal

  const avatarOptions = [
    "/Pp-girl1.png",
    "/Pp-girl2.png",
    "/Pp-boy1.png",
    "/Pp-boy2.png",
  ];

  // Load the saved avatar from localStorage when the component mounts
  useEffect(() => {
    const savedAvatar = user.avatar;
    if (savedAvatar) {
      setSelectedAvatar(avatarOptions[savedAvatar]); // Update state with the saved avatar
      setNewAvatar(avatarOptions[savedAvatar]); // Ensure modal starts with the saved avatar
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleSave = async () => {
    setSelectedAvatar(newAvatar); // Update main avatar
    const idx = avatarOptions.indexOf(newAvatar);

    const url = process.env.NEXT_PUBLIC_API_URL || '';
    const token = await getCookie('token');
    const res = await fetch(url + 'user/avatar/' + user.id + '/' + idx, {
      method: "PATCH",
      headers: {
        "Authorization": "Bearer " + token,
      }
    });

    if (res.ok) {
      toast.success("Avatar updated successfully");
    }
    setModalOpen(false); // Close modal
  };

  return (
    <>
      <div className="relative pt-[230px] flex overflow-y-clip overflow-x-hidden max-w-full flex-col items-center justify-center min-h-screen pb-[299px]">
        <div className="fixed w-screen h-screen bg-[url('/background-salju.png')] bg-repeat left-0 top-0 right-0 bottom-0 -z-10 "></div>

        <Background />
        {/* Avatar and User Information */}
        <div className="relative flex flex-col items-center relative">
          <Image
            src="/EllipseLight.png"
            width={2000}
            height={2000}
            alt="light"
            className="absolute -top-[100px] object-contain scale-[2]"
          />


          <div className="relative mb-4 w-[300px] h-[300px] mb-[28px]">

            <Avatar className="relative h-full w-full z-20">
              <AvatarImage src={getAsset(selectedAvatar)} alt="Profile Picture " />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>


            {/* Edit Button */}
            <Button
              className="rounded-full absolute bottom-3 z-20 right-9 bg-transparent p-0"
              style={{
                width: "46px",
                height: "46px",
              }}
              aria-label="Edit Avatar"
              onClick={() => setModalOpen(true)} // Open modal on click
            >
              <Image
                src="/EditButton.png"
                width={100}
                height={100}
                alt="Edit Icon"
                className="w-full h-full object-contain z-20"
              />
            </Button>
          </div>
          {/* User's Name */}
          <h2 className="text-white text-5xl font-semibold font-cinzel mb-[20px]">
            {user.nickname}
          </h2>
          {/* User's Role */}
          <span className="relative inline-block w-[85vw] max-w-[528px] h-[56px] rounded-[20px] text-center leading-[56px] text-[#A7327A] text-3xl font-cinzel bg-gradient-to-r from-[#82275F] to-[#A7327A] p-[2px] mb-0">
            <span className="flex items-center justify-center w-full h-full bg-white rounded-[18px]">
              PESERTA
            </span>
          </span>
        </div>

        <Card className="border-none mt-[60px] p-6 lg:py-[44px] lg:px-[40px] w-[91vw] max-w-[774px] lg:h-[644px] bg-[#F8EBF333] bg-opacity-20">
          {/* Contact Information */}

          <div className="relative top-0 left-0 right-0 space-y-[20px] flex flex-col items-center justify-center mr-0 h-full w-full px-5 py-1 lg:px-10">
            {/* Nama Lengkap */}
            <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between w-full ">
              <Label
                htmlFor="nama-lengkap"
                className="text-white mb-4 lg:mb-0 flex-col text-[20px] leading-[28px]"
              >
                Nama Lengkap
              </Label>
              <Input
                id="nama-lengkap"
                type="text"
                className="max-h-[52px] h-[110vh] lg:max-w-[382px] w-full text-[20px] leading-[28px] flex-grow border-none outline-none mb-0 font-bold "
                value={user.fullname}
                readOnly
              />
            </div>

            {/* Nama Panggilan */}
            <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between w-full ">
              <Label
                htmlFor="nama-panggilan"
                className=" text-white mb-4 lg:mb-0 text-[20px] leading-[28px]"
              >
                Nama Panggilan
              </Label>
              <Input
                id="nama-panggilan"
                type="text"
                className="max-h-[52px] h-[110vh] lg:max-w-[382px] w-full text-[20px] leading-[28px] flex-grow border-none outline-none mb-0 font-bold "
                value={user.nickname}
                readOnly
              />
            </div>

            {/* Tanggal Lahir */}
            <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between w-full ">
              <Label
                htmlFor="tanggal-lahir"
                className="text-white mb-4 text-[20px] leading-[28px] lg:mb-0"
              >
                Tanggal Lahir
              </Label>
              <Input
                id="nama-panggilan"
                type="text"
                className="max-h-[52px] h-[110vh] lg:max-w-[382px] w-full text-[20px] leading-[28px] flex-grow border-none outline-none mb-0 font-bold "
                value={new Date(user.date_of_birth.replace(' WIB', '')).toLocaleDateString("id-ID")}
                readOnly
              />
            </div>

            {/* Nomor HP/WA */}
            <div className="flex lg:flex-row flex-col text-[20px] leading-[28px] lg:items-center items-start justify-between w-full">
              <Label
                htmlFor="nomor-hp"
                className=" text-white mb-4 text-[20px] leading-[28px] lg:mb-0"
              >
                Nomor HP/WA
              </Label>
              <Input
                id="nomor-hp"
                type="text"
                className="max-h-[52px] h-[110vh] text-[20px] leading-[28px] lg:max-w-[382px] w-full flex-grow border-none outline-none mb-0 font-bold "
                value={user.phoneNumber}
                readOnly
              />
            </div>

            {/* Email */}
            <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between w-full ">
              <Label
                htmlFor="email"
                className="text-white mb-4 text-[20px] leading-[28px] lg:mb-0"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                className="max-h-[52px] h-[110vh] text-[20px] leading-[28px] lg:max-w-[382px] w-full flex-grow border-none outline-none mb-0 font-bold "
                value={user.email}
                readOnly
              />
            </div>

            {/* Asal SMA/SMK */}
            <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between w-full">
              <Label
                htmlFor="asal-sma"
                className=" text-white mb-4 text-[20px] leading-[28px] lg:mb-0"
              >
                Asal SMA/SMK
              </Label>
              <Input
                id="asal-sma"
                type="text"
                className="max-h-[52px] h-[110vh] text-[20px] leading-[28px] lg:max-w-[382px] w-full flex-grow border-none outline-none mb-0 font-bold "
                value={user.school_name}
                readOnly
              />
            </div>

            {/* Kelas */}
            <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between w-full ">
              <Label
                htmlFor="kelas"
                className=" text-white mb-4 text-[20px] leading-[28px] lg:mb-0"
              >
                Kelas
              </Label>
              <Input
                id="kelas"
                type="text"
                className="max-h-[52px] h-[110vh] lg:max-w-[382px] text-[20px] leading-[28px] flex-grow order-none outline-none mb-0 font-bold l"
                value={user.grade === 'gap-year' ? 'Gap Year' : 'Kelas XII'}
                readOnly
              />
            </div>

            {/* Alamat */}
            <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between w-full ">
              <Label
                htmlFor="alamat"
                className=" text-white mb-4 text-[20px] leading-[28px] lg:mb-0"
              >
                Alamat
              </Label>
              <Input
                id="alamat"
                type="text"
                className="max-h-[52px] h-[110vh] lg:max-w-[382px] w-full text-[20px] leading-[28px] flex-grow border-none outline-none mb-0 font-bold "
                value={user.address}
                readOnly
              />
            </div>
          </div>
        </Card>

        {/* Modal Component */}
        <Modal
          open={isModalOpen}
          onOpenChange={setModalOpen}
          title="Select Avatar"
        >
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              {avatarOptions.map((avatar) => (
                <button
                  key={avatar}
                  onClick={() => setNewAvatar(avatar)}
                  className={`p-1 border-4 rounded-full ${newAvatar === avatar
                    ? "border-[#692597]"
                    : "border-transparent"
                    }`}
                >
                  <img
                    src={getAsset(avatar)}
                    alt="Avatar Option"
                    className="w-24 h-24 object-cover rounded-full"
                  />
                </button>
              ))}
            </div>
          </div>
          {/* Modal Buttons */}
          <div className="justify-center mt-6 space-x-4">
            <ModalButton onClick={() => setModalOpen(false)} variant={'secondary'}>
              Cancel
            </ModalButton>

            <ModalButton
              closeOnClick={false}
              onClick={handleSave}
              className="mr-2"
            >
              Save
            </ModalButton>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ProfileModule;
