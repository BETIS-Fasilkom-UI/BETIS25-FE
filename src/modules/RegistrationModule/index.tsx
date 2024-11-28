'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { TabsComponent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Input from '@/components/ui/input';
import { FileInput } from '@/components/ui/file-input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Combobox } from '@/components/ui/combobox';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import StarryBackground from '../LoginModule/module-elements/background';

const metodeBelajarChoices = [
  { value: "online", label: "Online" },
  { value: "hybrid", label: "Hybrid" },
]

const KelasChoices = [
  { value: "kelas-12", label: "Kelas 12" },
  { value: "gap-year", label: "Gap Year" },
]

const RegistrationModule = () => {
  const [file, setFile] = useState<File | null>(null)
  const [selectedValueMetode, setSelectedValueMetode] = useState<string>("")
  const [selectedValueKelas, setSelectedValueKelas] = useState<string>("")
  const [activeTab, setActiveTab] = useState<number>(0); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const handleNextTab = () => {
    setActiveTab(1);
  };

  const handlePrevTab = () => {
    setActiveTab(0);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <StarryBackground />

      <div className="absolute inset-0 bg-black opacity-30 z-10 pointer-events-none"></div>

      <div className="flex flex-col items-center justify-center pt-[12rem] pb-[6rem] md:py-[18rem] px-4 md:px-44 z-20">
        <div className="text-center pt-12 py-16">
          <h1 className="font-cinzel font-black text-4xl md:text-6xl text-white pb-6 md:pb-10">OPEN REGISTRATION</h1>
          
          <Link href="/">
            <Button className="w-1/2 md:w-[70%] rounded-[20px] md:text-xl py-6 md:py-8" size="lg">
              Lihat Guidebook
            </Button>
          </Link>
        </div>
        
        <div className="w-full md:pt-10">
          <TabsComponent
            orientation="horizontal"
            backgroundColor={true}
            showNumber={true}
            initialTab={activeTab}
            tabs={[
              {
                title: "Data Siswa",
                content: (
                  <Card className="space-y-6">
                    <CardHeader>
                      <CardTitle className="font-raleway font-semibold text-xl">Data Pribadi</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <form className="space-y-4">
                        <div>
                          <Input
                            label="Nama Lengkap"
                            type="text"
                            placeholder="Enter your full name"
                            asterisk
                          />
                        </div>

                        <div>
                          <Input
                            label="Nama Panggilan"
                            type="text"
                            placeholder="Enter your username"
                            asterisk
                          />
                        </div>

                        <div>
                          <Input
                            label="Tanggal Lahir"
                            type="date"
                            asterisk
                          />
                        </div>

                        <div>
                          <Input
                            label="Nomor Telepon"
                            type="tel"
                            placeholder="Enter your phone number"
                            asterisk
                          />
                        </div>

                        <div>
                          <Input
                            label="Alamat"
                            type="text"
                            placeholder="Enter your address"
                            asterisk
                          />
                        </div>

                        <div>
                          <FileInput
                            label="Kartu Identitas"
                            file={file}
                            setFile={setFile}
                            className="w-full"
                            asterisk
                          />
                        </div>

                        <div>
                          <Label>
                            Metode Belajar <span className="text-red-500">*</span>
                          </Label>
                          <Combobox
                            choices={metodeBelajarChoices}
                            placeholder="Click here to choose"
                            value={selectedValueMetode}
                            onChange={(val) => setSelectedValueMetode(val)}
                            className="w-full"
                          />
                        </div>

                        <CardHeader>
                          <CardTitle className="font-raleway font-semibold text-xl">Data Orang Tua/Wali</CardTitle>
                        </CardHeader>

                        <div>
                          <Input
                            label="Nama Orang Tua/Wali (Salah Satu Saja)"
                            type="text"
                            placeholder="Enter your guardian's or parent's name"
                            asterisk
                          />
                        </div>

                        <div> 
                          <Input 
                            label="Hubungan dengan Wali"
                            type="text"
                            placeholder="Enter your relationship with your guardian"
                            asterisk
                          />
                        </div>

                        <div>
                          <Input
                            label="Nomor Telepon Wali"
                            type="tel"
                            placeholder="Enter your guardian's phone number "
                            asterisk
                          />
                        </div>

                        <div>
                          <FileInput
                            label="Slip Gaji / Surat Keterangan Penghasilan Orang Tua"
                            file={file}
                            setFile={setFile}
                            className="w-full"
                            asterisk
                          />
                        </div>

                        <CardHeader>
                          <CardTitle className="font-raleway font-semibold text-xl">Riwayat Pendidikan</CardTitle>
                        </CardHeader>

                        <div>
                          <Input
                            label="Asal SMA/SMK"
                            type="text"
                            placeholder="Enter your school name"
                            asterisk
                          />
                        </div>

                        <div>
                          <Label>
                            Kelas <span className="text-red-500">*</span>
                          </Label>
                          <Combobox
                            choices={KelasChoices}
                            placeholder="Click here to choose"
                            value={selectedValueKelas}
                            onChange={(val) => setSelectedValueKelas(val)}
                            className="w-full"
                          />
                        </div>

                        <div>
                          <Input
                            label="Rata-Rata Rapot Semester 1-5"
                            type="number"
                            placeholder="Enter your grade report"
                            asterisk
                          />
                        </div>

                        <div>
                          <FileInput
                            label="Rapot Peserta"
                            file={file}
                            setFile={setFile}
                            className="w-full"
                            asterisk
                          />
                        </div>

                        <Button onClick={handleNextTab} variant="secondary" className="w-full rounded-[20px]" size="lg">
                          Selanjutnya
                          <span className="">
                            <ArrowRight />
                          </span>
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                ),
              },
              {
                title: "Komitmen",
                content: (
                  <Card className="space-y-6">
                    <CardHeader>
                      <CardTitle className="font-raleway font-semibold text-xl">Komitmen</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* PDF */}
                        <div>
                          <FileInput
                            label="Motivation Letter (PDF)"
                            file={file}
                            setFile={setFile}
                            className="w-full"
                            asterisk
                          />
                        </div>

                        {/* PDF */}
                        <div>
                          <FileInput
                            label="Surat Komitmen (PDF)"
                            file={file}
                            setFile={setFile}
                            className="w-full"
                            asterisk
                          />
                        </div>

                        {/* PDF */}
                        <div>
                          <FileInput
                            label="Bukti Follow Sosial Media (PDF)"
                            file={file}
                            setFile={setFile}
                            className="w-full"
                            asterisk
                          />
                        </div>

                        <div>
                          <FileInput
                            label="Bukti Upload Twibbon (JPG/PNG/JPEG/PDF)"
                            file={file}
                            setFile={setFile}
                            className="w-full"
                            asterisk
                          />
                        </div>

                        <CardHeader>
                          <CardTitle className="font-raleway font-semibold text-xl">Berkas Pendukung</CardTitle>
                        </CardHeader>

                        <div>
                          <FileInput
                            label="Surat Keterangan Tidak Mampu"
                            file={file}
                            setFile={setFile}
                            className="w-full"
                          />
                        </div>

                        <div>
                          <FileInput
                            label="Tagihan Listrik"
                            file={file}
                            setFile={setFile}
                            className="w-full"
                          />
                        </div>

                        <div>
                          <FileInput
                            label="Foto Tampak Tempat Tinggal"
                            file={file}
                            setFile={setFile}
                            className="w-full"
                          />
                        </div>

                        <CardHeader>
                          <CardTitle className="font-raleway font-semibold text-xl">Kode Afiliasi</CardTitle>
                        </CardHeader>

                        <div>
                          <Input
                            type="text"
                            placeholder="Enter your code"
                            asterisk
                          />
                        </div>

                        <div className="flex justify-between">
                          <Button onClick={handlePrevTab} variant="secondary" className="rounded-[20px]" size="lg">
                            <span className="">
                              <ArrowLeft />
                            </span>
                            Kembali
                          </Button>

                          <Button type="submit" className="rounded-[20px]" size="lg">
                            Daftar
                          </Button>
                        </div>
                      </form>

                    </CardContent>
                  </Card>
                ),
              },
            ]}
          />
        </div>
      </div>

      {/* BACKGROUND IMAGE */}
      <Image
        src="/Tali.png"
        width={282}
        height={108}
        alt="Tali"
        className="absolute top-14 lg:top-[-2rem] left-0 -z-10 lg:w-[803px] lg:h-[362px]"
      />

      <Image
        src="/Tali2.png"
        width={380}
        height={90}
        alt="Tali"
        className="absolute top-10 lg:top-20 right-0 -z-10 lg:w-[963px] lg:h-[182px]"
      />

      <Image
        src="/Lamp.png"
        width={106}
        height={148}
        alt="Lamp"
        className="absolute top-20 right-10 lg:right-20 -z-10 lg:w-[185px] lg:h-[270px] lg:-rotate-[17deg]"
      />

      <Image
        src="/Burung.png"
        width={117}
        height={104}
        alt="Burung"
        className="absolute top-44 lg:top-60 left-12 lg:left-60 -z-10 lg:w-[213px] lg:h-[180px]"
      />

      <Image
        src="/Pohon3.png"
        width={216}
        height={355}
        alt="Pohon"
        className="absolute bottom-[-2rem] lg:bottom-[-4rem]  right-[1rem] -z-10 lg:w-[800px] lg:h-[1380px]"
      />

        <Image
        src="/Pohon5.png"
        width={216}
        height={355}
        alt="Pohon"
        className="absolute bottom-0 left-[1rem] -z-10 lg:w-[800px] lg:h-[1380px]"
      />

    </div>
  )
}

export default RegistrationModule
