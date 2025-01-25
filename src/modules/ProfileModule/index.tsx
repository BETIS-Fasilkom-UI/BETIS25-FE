"use client";
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Input from "@/modules/ProfileModule/input";
import { Modal, ModalButton } from "@/modules/ProfileModule/modal"; // Adjust the import path
import Tooltip from "@/components/ui/tooltip";
import { DatePicker } from "@/modules/ProfileModule/date-picker"; // Import your custom DatePicker
import { User } from "@/hooks/interface";

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
    const savedAvatar = localStorage.getItem("selectedAvatar"); // Retrieve saved avatar from localStorage
    if (savedAvatar) {
      setSelectedAvatar(savedAvatar); // Update state with the saved avatar
      setNewAvatar(savedAvatar); // Ensure modal starts with the saved avatar
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleSave = () => {
    setSelectedAvatar(newAvatar); // Update main avatar
    localStorage.setItem("selectedAvatar", newAvatar); // Save the selected avatar to localStorage
    setModalOpen(false); // Close modal
  };

  return (
    <div className="mt-[230px] flex flex-col items-center justify-center min-h-screen mb-[299px]">
      {/* Ellipse Light */}
      <img
        src="/EllipseLight.png"
        className="absolute top-[-100px] lg:top-[115px] w-full h-full object-contain z-0 w-[1649px] h-[1629px]"
      />

      {/* Avatar and User Information */}
      <div className="flex flex-col items-center relative">
        {/* User's Avatar */}
        <div className="relative mb-4 w-[300px] h-[300px] mb-[28px]">
          <Avatar className="relative h-full w-full ">
            <AvatarImage src={selectedAvatar} alt="Profile Picture " />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>

          {/* Edit Button */}
          <Button
            className="rounded-full absolute bottom-3 right-9 bg-transparent p-0"
            style={{
              width: "46px",
              height: "46px",
            }}
            aria-label="Edit Avatar"
            onClick={() => setModalOpen(true)} // Open modal on click
          >
            <img
              src="/EditButton.png"
              alt="Edit Icon"
              className="w-full h-full object-contain"
            />
          </Button>
        </div>
        {/* User's Name */}
        <h2 className="text-white text-5xl font-semibold font-cinzel mb-[20px]">
          HENDRA
        </h2>
        {/* User's Role */}
        <span className="relative inline-block w-[85vw] max-w-[528px] h-[56px] rounded-[20px] text-center leading-[56px] text-[#A7327A] text-3xl font-cinzel bg-gradient-to-r from-[#82275F] to-[#A7327A] p-[2px] mb-0">
          <span className="flex items-center justify-center w-full h-full bg-white rounded-[18px]">
            PESERTA
          </span>
        </span>
      </div>

      <Card className="border-none mt-[60px] w-[91vw] max-w-[774px] lg:h-[644px] bg-[#F8EBF333] bg-opacity-20">
        {/* Contact Information */}

        <div className="relative top-0 left-0 right-0 space-y-[20px] flex flex-col items-center justify-center mr-0 h-full w-full px-5 py-1 lg:px-10">
          {/* Nama Lengkap */}
          <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between w-full">
            <Label
              htmlFor="nama-lengkap"
              className="text-xl text-white mb-4 lg:mb-0 flex-col"
            >
              Nama Lengkap
            </Label>
            <Input
              id="nama-lengkap"
              type="text"
              className="max-h-[52px] h-[110vh] max-w-[382px] w-[80vw] flex-grow border-none outline-none mb-0 text-2xl"
              value="Hendra Andromeda"
              readOnly

            />
          </div>

          {/* Nama Panggilan */}
          <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between w-full ">
            <Label
              htmlFor="nama-panggilan"
              className="text-xl text-white mb-4 lg:mb-0"
            >
              Nama Panggilan
            </Label>
            <Input
              id="nama-panggilan"
              type="text"
              className="max-h-[52px] h-[110vh] max-w-[382px] w-[80vw] flex-grow border-none outline-none mb-0 font-bold text-2xl"
              value="Hendra"
              readOnly
            />
          
          </div>

          {/* Tanggal Lahir */}
          <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between w-full ">
            <Label
              htmlFor="tanggal-lahir"
              className="text-xl text-white mb-4 lg:mb-0"
            >
              Tanggal Lahir
            </Label>
            <DatePicker/>
          </div>


          {/* Nomor HP/WA */}
          <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between w-full">
            <Label
              htmlFor="nomor-hp"
              className="text-xl text-white mb-4 lg:mb-0"
            >
              Nomor HP/WA
            </Label>
            <Tooltip
              text="Masukkan angka!"
              tooltipClassName="bg-white text-black"
            >
              <Input
                id="nomor-hp"
                type="text"
                className="max-h-[52px] h-[110vh] max-w-[382px] w-[80vw] flex-grow border-none outline-none mb-0 font-bold text-2xl"
                onInput={(e) => {
                  const inputElement = e.target as HTMLInputElement;
                  inputElement.value = inputElement.value.replace(
                    /[^0-9]/g,
                    ""
                  );
                }}
                value="081234567890"
                readOnly
              />
            </Tooltip>
          </div>

          {/* Email */}
          <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between w-full ">
            <Label htmlFor="email" className="text-xl text-white mb-4 lg:mb-0">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              className="max-h-[52px] h-[110vh] max-w-[382px] w-[80vw] flex-grow border-none outline-none mb-0 font-bold text-2xl"
              value="betis.2025@ui.ac.id"
              readOnly
            />
          </div>

          {/* Asal SMA/SMK */}
          <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between w-full">
            <Label
              htmlFor="asal-sma"
              className="text-xl text-white mb-4 lg:mb-0"
            >
              Asal SMA/SMK
            </Label>
            <Input
              id="asal-sma"
              type="text"
              className="max-h-[52px] h-[110vh] max-w-[382px] w-[80vw] flex-grow border-none outline-none mb-0 font-bold text-2xl"
              value="SMA Indonesia Depok"
              readOnly
            />
          </div>

          {/* Kelas */}
          <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between w-full ">
            <Label htmlFor="kelas" className="text-xl text-white mb-4 lg:mb-0">
              Kelas
            </Label>
            <div className=" border-0 outline-0 ">
              <Input
                id="kelas"
                type="text"
                className="max-h-[52px] h-[110vh] max-w-[382px] w-[80vw] flex-grow order-none outline-none mb-0 font-bold text-2xl" 
                value="XII SMA (MIPA)"
                readOnly
              />
            </div>
          </div>

          {/* Alamat */}
          <div className="flex lg:flex-row flex-col lg:items-center items-start justify-between w-full ">
            <Label
              htmlFor="alamat"
              className="text-xl text-white mb-4 lg:mb-0"
            >
              Alamat
            </Label>
            <Input
              id="alamat"
              type="text"
              className="max-h-[52px] h-[110vh] max-w-[382px] w-[80vw] flex-grow border-none outline-none mb-0 font-bold text-2xl"
              value="Jl. Kacang No.13"
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
                className={`p-1 border-4 rounded-full ${
                  newAvatar === avatar
                    ? "border-[#692597]"
                    : "border-transparent"
                }`}
              >
                <img
                  src={avatar}
                  alt="Avatar Option"
                  className="w-24 h-24 object-cover rounded-full"
                />
              </button>
            ))}
          </div>
        </div>
        {/* Modal Buttons */}
        <div className="justify-center mt-6">
          <ModalButton
            closeOnClick={false}
            onClick={handleSave}
            className="mr-2"
          >
            Save
          </ModalButton>
          <ModalButton onClick={() => setModalOpen(false)}>Cancel</ModalButton>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileModule;
