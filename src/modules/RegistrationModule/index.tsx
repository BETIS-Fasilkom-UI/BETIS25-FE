"use client";

import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { openRegSchema, useOpenReg } from "@/hooks/openReg";
import { z } from "zod";

import { TabsComponent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Input from "@/components/ui/input";
import { FileInput } from "@/components/ui/file-input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Combobox } from "@/components/ui/combobox";
import { ArrowLeft, ArrowRight } from "lucide-react";
import StarryBackground from "../LoginModule/module-elements/background";
import { toast } from "@/components/ui/sonner";
// import { toast } from '@/components/ui/sonner';

type OpenRegFormValues = z.infer<typeof openRegSchema>;

const metodeBelajarChoices = [
  { value: "online", label: "Online" },
  { value: "hybrid", label: "Hybrid" },
];

const KelasChoices = [
  { value: "kelas-12", label: "Kelas 12" },
  { value: "gap-year", label: "Gap Year" },
];

const RegistrationModule = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedValueMetode, setSelectedValueMetode] =
    useState<string>("");
  const [selectedValueKelas, setSelectedValueKelas] =
    useState<string>("");
  const [tab1Data, setTab1Data] = useState<OpenRegFormValues | null>(
    null
  );
  const [tab2Data, setTab2Data] = useState<OpenRegFormValues | null>(
    null
  );
  const [page, setPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const [povertyFile, setPovertyFile] = useState<File | null>(null);
  const [electricityBillFile, setElectricityBillFile] =
    useState<File | null>(null);
  const [housePhotoFile, setHousePhotoFile] = useState<File | null>(
    null
  );

  const form = useForm<OpenRegFormValues>({
    resolver: zodResolver(openRegSchema),
    defaultValues: {
      fullName: "",
      username: "",
      phoneNumber: "",
      birthDate: new Date(),
      address: "",
      studyMethood: "",
      parentName: "",
      relationWithParent: "",
      parentPhoneNumber: "",
      highschoolName: "",
      highschoolClass: "",
      meanScore: "",
      studentReport: null,
      motivationLetter: null,
      commitmentLetter: null,
      proofOfFollowing: null,
      proofOfTwibbon: null,
      referralCode: "",
    },
  });

  const onSubmit = async (values: OpenRegFormValues) => {
    setIsLoading(true);
    const currentTab1Data = form.getValues();
    const currentTab2Data = form.getValues();
    setTab1Data(currentTab1Data);
    setTab2Data(currentTab2Data);

    const combinedData = { ...tab1Data, ...tab2Data, ...values };
    //console.log("Combined Data:", combinedData);

    const optionalFiles = {
      povertyLetter: povertyFile || undefined,
      housePhoto: housePhotoFile || undefined,
      electricityBill: electricityBillFile || undefined,
    };

    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const result = await useOpenReg(combinedData, optionalFiles);
      toast.promise(
        result.isSuccess
          ? Promise.resolve(result.message)
          : Promise.reject(result.message),
        {
          loading: "Loading...",
          success: result.message,
          error: result.message,
        }
      );
      if (result.isSuccess) {
        form.reset();
        setTab1Data(null);
        setTab2Data(null);
        setPovertyFile(null);
        setElectricityBillFile(null);
        setHousePhotoFile(null);
      }
    } catch (error) {
      //console.error(error);
      toast.error("Registration failed");
    }
    setIsLoading(false);
  };

  const handleTab = () => {
    if (page === 0) {
      setTab1Data(form.getValues());
      setPage(1);
    } else {
      setTab2Data(form.getValues());
      setPage(0);
    }
  };

  useEffect(() => {
    if (page === 0 && tab1Data) {
      (Object.keys(tab1Data) as (keyof typeof tab1Data)[]).forEach(
        (key) => {
          form.setValue(key, tab1Data[key]);
        }
      );
    } else if (page === 1 && tab2Data) {
      (Object.keys(tab2Data) as (keyof typeof tab2Data)[]).forEach(
        (key) => {
          form.setValue(key, tab2Data[key]);
        }
      );
    }
  }, [page, tab1Data, tab2Data, form]);

  return (
    <div className="flex flex-col min-h-screen relative">
      <StarryBackground />

      <div className="absolute inset-0 bg-black opacity-30 z-10 pointer-events-none"></div>

      <div className="flex flex-col items-center justify-center pt-[12rem] pb-[6rem] md:py-[18rem] px-4 md:px-24 lg:px-44 z-20">
        <div className="text-center pt-12 py-16">
          <h1 className="font-cinzel font-black text-4xl md:text-6xl text-white pb-6 md:pb-10">
            OPEN REGISTRATION
          </h1>

          <Link href="/">
            <Button
              className="w-1/2 md:w-[70%] rounded-[20px] md:text-xl py-6 md:py-8"
              size="lg"
            >
              Lihat Guidebook
            </Button>
          </Link>
        </div>

        <div className="w-full md:pt-10">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <TabsComponent
              page={page}
              setPage={setPage}
              orientation="horizontal"
              backgroundColor={true}
              showNumber={true}
              tabs={[
                {
                  title: "Data Siswa",
                  content: (
                    <Card className="space-y-6 md:px-16 md:py-10 lg:px-24 lg:py-16">
                      <CardHeader>
                        <CardTitle className="font-raleway font-semibold text-xl">
                          Data Pribadi
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <div className="lg:flex max-lg:space-y-4 lg:space-x-8 lg:pb-10">
                          <div className="lg:w-1/2 space-y-4 lg:space-y-5">
                            <div>
                              <Input
                                label="Nama Lengkap"
                                type="text"
                                placeholder="Enter your full name"
                                value={form.watch("fullName")}
                                onChange={(e) => {
                                  form.setValue(
                                    "fullName",
                                    e.target.value
                                  );
                                }}
                                asterisk
                              />
                              {form.formState.errors.fullName && (
                                <p className="text-sm text-red-500">
                                  {
                                    form.formState.errors.fullName
                                      .message
                                  }
                                </p>
                              )}
                            </div>

                            <div>
                              <Input
                                label="Nama Panggilan"
                                type="text"
                                placeholder="Enter your username"
                                value={form.watch("username")}
                                onChange={(e) => {
                                  form.setValue(
                                    "username",
                                    e.target.value
                                  );
                                }}
                                asterisk
                              />
                              {form.formState.errors.username && (
                                <p className="text-sm text-red-500">
                                  {
                                    form.formState.errors.username
                                      .message
                                  }
                                </p>
                              )}
                            </div>

                            <div>
                              <Input
                                label="Tanggal Lahir"
                                type="date"
                                value={
                                  form.watch("birthDate")
                                    ? moment(
                                        form.watch("birthDate")
                                      ).format("YYYY-MM-DD")
                                    : ""
                                }
                                onChange={(e) =>
                                  form.setValue(
                                    "birthDate",
                                    moment(
                                      e.target.value,
                                      "YYYY-MM-DD"
                                    ).toDate()
                                  )
                                }
                                asterisk
                              />
                              {form.formState.errors.birthDate && (
                                <p className="text-sm text-red-500">
                                  {
                                    form.formState.errors.birthDate
                                      .message
                                  }
                                </p>
                              )}
                            </div>

                            <div>
                              <Input
                                label="Nomor Telepon"
                                type="text"
                                placeholder="Enter your phone number"
                                value={form.watch("phoneNumber")}
                                onChange={(e) => {
                                  form.setValue(
                                    "phoneNumber",
                                    e.target.value
                                  );
                                }}
                                asterisk
                              />
                              {form.formState.errors.phoneNumber && (
                                <p className="text-sm text-red-500">
                                  {
                                    form.formState.errors.phoneNumber
                                      .message
                                  }
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="lg:w-1/2 space-y-4 lg:space-y-2">
                            <div>
                              <Input
                                label="Alamat"
                                type="text"
                                placeholder="Enter your address"
                                value={form.watch("address")}
                                onChange={(e) => {
                                  form.setValue(
                                    "address",
                                    e.target.value
                                  );
                                }}
                                asterisk
                              />
                              {form.formState.errors.address && (
                                <p className="text-sm text-red-500">
                                  {
                                    form.formState.errors.address
                                      .message
                                  }
                                </p>
                              )}
                            </div>

                            <div>
                              <FileInput
                                label="Kartu Identitas"
                                file={form.watch("identityCard")}
                                setFile={(file) =>
                                  form.setValue("identityCard", file)
                                }
                                className="w-full"
                                asterisk
                              />
                              {form.formState.errors.identityCard && (
                                <p className="text-sm text-red-500">
                                  {typeof form.formState.errors
                                    .identityCard?.message ===
                                  "string"
                                    ? form.formState.errors
                                        .identityCard.message
                                    : ""}
                                </p>
                              )}
                            </div>

                            <div>
                              <Label>
                                Metode Belajar{" "}
                                <span className="text-red-500">
                                  *
                                </span>
                              </Label>
                              <Combobox
                                choices={metodeBelajarChoices}
                                placeholder="Click here to choose"
                                value={selectedValueMetode}
                                onChange={(val) => {
                                  setSelectedValueMetode(val);
                                  form.setValue("studyMethood", val);
                                }}
                                className="w-full"
                              />
                              {form.formState.errors.studyMethood && (
                                <p className="text-sm text-red-500">
                                  {
                                    form.formState.errors.studyMethood
                                      .message
                                  }
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <CardHeader>
                          <CardTitle className="font-raleway font-semibold text-xl max-lg:pt-16 pb-4">
                            Data Orang Tua/Wali
                          </CardTitle>
                        </CardHeader>

                        <div className="lg:flex lg:space-x-8 lg:pb-10">
                          <div className="lg:w-1/2 space-y-4 lg:space-y-5">
                            <div>
                              <Input
                                label="Nama Orang Tua/Wali (Salah Satu Saja)"
                                type="text"
                                placeholder="Enter your guardian's or parent's name"
                                value={form.watch("parentName")}
                                onChange={(e) => {
                                  form.setValue(
                                    "parentName",
                                    e.target.value
                                  );
                                }}
                                asterisk
                              />
                              {form.formState.errors.parentName && (
                                <p className="text-sm text-red-500">
                                  {
                                    form.formState.errors.parentName
                                      .message
                                  }
                                </p>
                              )}
                            </div>

                            <div>
                              <Input
                                label="Hubungan dengan Wali"
                                type="text"
                                placeholder="Enter your relationship with your guardian"
                                value={form.watch(
                                  "relationWithParent"
                                )}
                                onChange={(e) => {
                                  form.setValue(
                                    "relationWithParent",
                                    e.target.value
                                  );
                                }}
                                asterisk
                              />
                              {form.formState.errors
                                .relationWithParent && (
                                <p className="text-sm text-red-500">
                                  {
                                    form.formState.errors
                                      .relationWithParent.message
                                  }
                                </p>
                              )}
                            </div>

                            <div>
                              <Input
                                label="Nomor Telepon Wali"
                                type="tel"
                                placeholder="Enter your guardian's phone number"
                                value={form.watch(
                                  "parentPhoneNumber"
                                )}
                                onChange={(e) => {
                                  form.setValue(
                                    "parentPhoneNumber",
                                    e.target.value
                                  );
                                }}
                                asterisk
                              />
                              {form.formState.errors
                                .parentPhoneNumber && (
                                <p className="text-sm text-red-500">
                                  {
                                    form.formState.errors
                                      .parentPhoneNumber.message
                                  }
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="lg:w-1/2 max-lg:pt-4 lg:space-y-2">
                            <FileInput
                              label="Slip Gaji / Surat Keterangan Penghasilan Orang Tua"
                              file={form.watch("parentIdentityCard")}
                              setFile={(file) =>
                                form.setValue(
                                  "parentIdentityCard",
                                  file
                                )
                              }
                              className="w-full"
                              asterisk
                            />
                            {form.formState.errors
                              .parentIdentityCard && (
                              <p className="text-sm text-red-500">
                                {typeof form.formState.errors
                                  .parentIdentityCard?.message ===
                                "string"
                                  ? form.formState.errors
                                      .parentIdentityCard.message
                                  : ""}
                              </p>
                            )}
                          </div>
                        </div>

                        <CardHeader>
                          <CardTitle className="font-raleway font-semibold text-xl max-lg:pt-16 pb-4">
                            Riwayat Pendidikan
                          </CardTitle>
                        </CardHeader>

                        <div className="lg:flex lg:space-x-8 lg:pb-10">
                          <div className="lg:w-1/2 space-y-4 lg:space-y-5">
                            <div>
                              <Input
                                label="Asal SMA/SMK"
                                type="text"
                                placeholder="Enter your school name"
                                value={form.watch("highschoolName")}
                                onChange={(e) => {
                                  form.setValue(
                                    "highschoolName",
                                    e.target.value
                                  );
                                }}
                                asterisk
                              />
                              {form.formState.errors
                                .highschoolName && (
                                <p className="text-sm text-red-500">
                                  {
                                    form.formState.errors
                                      .highschoolName.message
                                  }
                                </p>
                              )}
                            </div>

                            <div>
                              <Label>
                                Kelas{" "}
                                <span className="text-red-500">
                                  *
                                </span>
                              </Label>
                              <Combobox
                                choices={KelasChoices}
                                placeholder="Click here to choose"
                                value={selectedValueKelas}
                                onChange={(val) => {
                                  setSelectedValueKelas(val);
                                  form.setValue(
                                    "highschoolClass",
                                    val
                                  );
                                }}
                                className="w-full"
                              />
                              {form.formState.errors
                                .highschoolClass && (
                                <p className="text-sm text-red-500">
                                  {
                                    form.formState.errors
                                      .highschoolClass.message
                                  }
                                </p>
                              )}
                            </div>

                            <div>
                              <Input
                                label="Rata-Rata Rapot Semester 1-5"
                                type="text"
                                placeholder="Enter your grade report"
                                value={form.watch("meanScore")}
                                onChange={(e) => {
                                  form.setValue(
                                    "meanScore",
                                    e.target.value
                                  );
                                }}
                                asterisk
                              />
                              {form.formState.errors.meanScore && (
                                <p className="text-sm text-red-500">
                                  {
                                    form.formState.errors.meanScore
                                      .message
                                  }
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="lg:w-1/2 max-lg:pt-4 lg:space-y-2">
                            <FileInput
                              label="Rapot Peserta"
                              file={form.watch("studentReport")}
                              setFile={(file) =>
                                form.setValue("studentReport", file)
                              }
                              className="w-full"
                              asterisk
                            />
                            {form.formState.errors.studentReport && (
                              <p className="text-sm text-red-500">
                                {typeof form.formState.errors
                                  .studentReport?.message === "string"
                                  ? form.formState.errors
                                      .studentReport.message
                                  : ""}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="lg:flex max-lg:pt-8 lg:justify-end">
                          <Button
                            onClick={handleTab}
                            type="button"
                            variant="secondary"
                            className="max-lg:w-full rounded-[20px] lg:py-7 lg:text-xl"
                            size="lg"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                          >
                            Selanjutnya
                            <span className="">
                              <ArrowRight />
                            </span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ),
                },
                {
                  title: "Komitmen",
                  content: (
                    <Card className="space-y-6 lg:px-24 lg:py-16">
                      <CardHeader>
                        <CardTitle className="font-raleway font-semibold text-xl">
                          Komitmen
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <div className="lg:flex max-lg:space-y-4 lg:space-x-8 lg:pb-10">
                          <div className="lg:w-1/2 space-y-4 lg:space-y-5">
                            <div>
                              <FileInput
                                label="Motivation Letter (PDF)"
                                file={form.watch("motivationLetter")}
                                setFile={(file) =>
                                  form.setValue(
                                    "motivationLetter",
                                    file
                                  )
                                }
                                className="w-full"
                                asterisk
                              />
                              {form.formState.errors
                                .motivationLetter && (
                                <p className="text-sm text-red-500">
                                  {typeof form.formState.errors
                                    .motivationLetter?.message ===
                                  "string"
                                    ? form.formState.errors
                                        .motivationLetter.message
                                    : ""}
                                </p>
                              )}
                            </div>

                            <div>
                              <FileInput
                                label="Surat Komitmen (PDF)"
                                file={form.watch("commitmentLetter")}
                                setFile={(file) =>
                                  form.setValue(
                                    "commitmentLetter",
                                    file
                                  )
                                }
                                className="w-full"
                                asterisk
                              />
                              {form.formState.errors
                                .commitmentLetter && (
                                <p className="text-sm text-red-500">
                                  {typeof form.formState.errors
                                    .commitmentLetter?.message ===
                                  "string"
                                    ? form.formState.errors
                                        .commitmentLetter.message
                                    : ""}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="lg:w-1/2 space-y-4 lg:space-y-5">
                            <div>
                              <FileInput
                                label="Bukti Follow Sosial Media (PDF)"
                                file={form.watch("proofOfFollowing")}
                                setFile={(file) =>
                                  form.setValue(
                                    "proofOfFollowing",
                                    file
                                  )
                                }
                                className="w-full"
                                asterisk
                              />
                              {form.formState.errors
                                .proofOfFollowing && (
                                <p className="text-sm text-red-500">
                                  {typeof form.formState.errors
                                    .proofOfFollowing?.message ===
                                  "string"
                                    ? form.formState.errors
                                        .proofOfFollowing.message
                                    : ""}
                                </p>
                              )}
                            </div>

                            <div>
                              <FileInput
                                label="Bukti Upload Twibbon (JPG/PNG/JPEG/PDF)"
                                file={form.watch("proofOfTwibbon")}
                                setFile={(file) =>
                                  form.setValue(
                                    "proofOfTwibbon",
                                    file
                                  )
                                }
                                className="w-full"
                                asterisk
                              />
                              {form.formState.errors
                                .proofOfTwibbon && (
                                <p className="text-sm text-red-500">
                                  {typeof form.formState.errors
                                    .proofOfTwibbon?.message ===
                                  "string"
                                    ? form.formState.errors
                                        .proofOfTwibbon.message
                                    : ""}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <CardHeader>
                          <CardTitle className="font-raleway font-semibold text-xl max-lg:pt-16">
                            Berkas Pendukung
                          </CardTitle>
                        </CardHeader>

                        <div className="lg:flex space-y-4 lg:space-x-8 lg:pb-10">
                          <div className="lg:w-1/2 space-y-4 lg:space-y-5">
                            <div>
                              <FileInput
                                label="Surat Keterangan Tidak Mampu"
                                file={povertyFile}
                                setFile={setPovertyFile}
                                className="w-full"
                              />
                            </div>

                            <div>
                              <FileInput
                                label="Tagihan Listrik"
                                file={electricityBillFile}
                                setFile={setElectricityBillFile}
                                className="w-full"
                              />
                            </div>
                          </div>

                          <div className="lg:w-1/2 space-y-4 lg:space-y-5">
                            <FileInput
                              label="Foto Tampak Tempat Tinggal"
                              file={housePhotoFile}
                              setFile={setHousePhotoFile}
                              className="w-full"
                            />
                          </div>
                        </div>

                        <CardHeader>
                          <CardTitle className="font-raleway font-semibold text-xl max-lg:pt-16">
                            Kode Afiliasi
                          </CardTitle>
                        </CardHeader>

                        <div className="lg:w-1/2">
                          <Input
                            type="text"
                            placeholder="Enter your code"
                            value={form.watch("referralCode")}
                            onChange={(e) => {
                              form.setValue(
                                "referralCode",
                                e.target.value
                              );
                            }}
                            asterisk
                          />
                        </div>

                        <div className="flex justify-between pt-8">
                          <Button
                            onClick={handleTab}
                            type="button"
                            variant="secondary"
                            className="rounded-[20px]"
                            size="lg"
                          >
                            <span className="">
                              <ArrowLeft />
                            </span>
                            Kembali
                          </Button>

                          <Button
                            isLoading={isLoading}
                            type="submit"
                            className="rounded-[20px]"
                            size="lg"
                          >
                            Daftar
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ),
                },
              ]}
            />
          </form>
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
        className="absolute top-20 right-10 lg:right-20 -z-10 lg:w-[185px] lg:h-[270px] lg:-rotate-[17deg] animate-swing"
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

      <Image
        src={
          isHovered || page === 1
            ? "/MascotDewasa.png"
            : "/MascotLesu.png"
        }
        width={isHovered || page === 1 ? 224 : 216}
        height={isHovered || page === 1 ? 590 : 582}
        alt="Mascot"
        className="max-lg:hidden absolute bottom-0 right-[2rem] z-30"
      />
    </div>
  );
};

export default RegistrationModule;
