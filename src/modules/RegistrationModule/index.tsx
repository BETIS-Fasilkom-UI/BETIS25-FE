'use client';

import { openRegSchema, useOpenReg } from '@/hooks/openReg';
import { zodResolver } from '@hookform/resolvers/zod';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Combobox } from '@/components/ui/combobox';
import { FileInput } from '@/components/ui/file-input';
import Input from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/components/ui/sonner';
import { TabsComponent } from '@/components/ui/tabs';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import StarryBackground from '../LoginModule/module-elements/background';

// import { toast } from '@/components/ui/sonner';

type OpenRegFormValues = z.infer<typeof openRegSchema>;

const metodeBelajarChoices = [
  { value: 'online', label: 'Online' },
  { value: 'hybrid', label: 'Hybrid' },
];

const KelasChoices = [
  { value: 'kelas-12', label: 'Kelas 12' },
  { value: 'gap-year', label: 'Gap Year' },
];

const RegistrationModule = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedValueMetode, setSelectedValueMetode] = useState<string>('');
  const [selectedValueKelas, setSelectedValueKelas] = useState<string>('');
  const [tab1Data, setTab1Data] = useState<OpenRegFormValues | null>(null);
  const [tab2Data, setTab2Data] = useState<OpenRegFormValues | null>(null);
  const [page, setPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const [povertyFile, setPovertyFile] = useState<File | null>(null);
  const [electricityBillFile, setElectricityBillFile] = useState<File | null>(
    null
  );
  const [housePhotoFile, setHousePhotoFile] = useState<File | null>(null);
  const [paycheckFile, setPaycheckFile] = useState<File | null>(null);

  const { push, replace } = useRouter();

  const form = useForm<OpenRegFormValues>({
    resolver: zodResolver(openRegSchema),
  });

  useEffect(() => {
    if (true) {
      toast.error('Registrasi sudah tutup');
      replace('/');
    }
  }, []);

  const onSubmit = async (values: OpenRegFormValues) => {
    setIsLoading(true);
    const currentTab1Data = form.getValues();
    const currentTab2Data = form.getValues();
    setTab1Data(currentTab1Data);
    setTab2Data(currentTab2Data);

    const combinedData = { ...tab1Data, ...tab2Data, ...values };

    const referralCode = ['STH-096', 'GF-669', 'ACE-505', 'ASP-299', 'MUT-454'];

    if (
      combinedData.referralCode &&
      !referralCode.includes(combinedData.referralCode)
    ) {
      toast.error('Invalid referral code');
      setIsLoading(false);
      return;
    }

    const optionalFiles = {
      povertyLetter: povertyFile || undefined,
      housePhoto: housePhotoFile || undefined,
      electricityBill: electricityBillFile || undefined,
      paycheckUrl: paycheckFile || undefined,
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const result = await useOpenReg(combinedData, optionalFiles);
    if (result.isSuccess) {
      toast.success('Registration success');
      form.reset();
      setTab1Data(null);
      setTab2Data(null);
      setPovertyFile(null);
      setElectricityBillFile(null);
      setHousePhotoFile(null);

      push('/profile');
    } else {
      toast.error(result.message);
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
      (Object.keys(tab1Data) as (keyof typeof tab1Data)[]).forEach((key) => {
        form.setValue(key, tab1Data[key]);
      });
    } else if (page === 1 && tab2Data) {
      (Object.keys(tab2Data) as (keyof typeof tab2Data)[]).forEach((key) => {
        form.setValue(key, tab2Data[key]);
      });
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

          <Link
            href="https://docs.google.com/document/d/1GaGN7ervIPajtL9GSfb8KgneVambLU38fqax7lPiXuQ/edit?usp=sharing"
            target="_blank"
          >
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
                  title: 'Data Siswa',
                  content: (
                    <Card className="space-y-6 md:px-16 md:py-10 lg:px-24 lg:py-16 bg-[#481E58]">
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
                                value={form.watch('fullName')}
                                onChange={(e) => {
                                  form.setValue('fullName', e.target.value);
                                }}
                                asterisk
                              />
                              {form.formState.errors.fullName && (
                                <p className="text-sm text-red-500">
                                  {form.formState.errors.fullName.message}
                                </p>
                              )}
                            </div>

                            <div>
                              <Input
                                label="Nama Panggilan"
                                type="text"
                                placeholder="Enter your username"
                                value={form.watch('username')}
                                onChange={(e) => {
                                  form.setValue('username', e.target.value);
                                }}
                                asterisk
                              />
                              {form.formState.errors.username && (
                                <p className="text-sm text-red-500">
                                  {form.formState.errors.username.message}
                                </p>
                              )}
                            </div>

                            <div>
                              <Input
                                label="Tanggal Lahir"
                                type="date"
                                value={
                                  form.watch('birthDate')
                                    ? moment(form.watch('birthDate')).format(
                                        'YYYY-MM-DD'
                                      )
                                    : ''
                                }
                                onChange={(e) =>
                                  form.setValue(
                                    'birthDate',
                                    moment(
                                      e.target.value,
                                      'YYYY-MM-DD'
                                    ).toDate()
                                  )
                                }
                                asterisk
                              />
                              {form.formState.errors.birthDate && (
                                <p className="text-sm text-red-500">
                                  {form.formState.errors.birthDate.message}
                                </p>
                              )}
                            </div>

                            <div>
                              <Input
                                label="Nomor Telepon"
                                type="text"
                                placeholder="Enter your phone number"
                                value={form.watch('phoneNumber')}
                                onChange={(e) => {
                                  form.setValue('phoneNumber', e.target.value);
                                }}
                                asterisk
                              />
                              {form.formState.errors.phoneNumber && (
                                <p className="text-sm text-red-500">
                                  {form.formState.errors.phoneNumber.message}
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
                                value={form.watch('address')}
                                onChange={(e) => {
                                  form.setValue('address', e.target.value);
                                }}
                                asterisk
                              />
                              {form.formState.errors.address && (
                                <p className="text-sm text-red-500">
                                  {form.formState.errors.address.message}
                                </p>
                              )}
                            </div>

                            <div>
                              <FileInput
                                label="Kartu Identitas (Image)"
                                file={form.watch('identityCard')}
                                setFile={(file) =>
                                  form.setValue('identityCard', file)
                                }
                                className="w-full"
                                asterisk
                              />
                              {form.formState.errors.identityCard && (
                                <p className="text-sm text-red-500">
                                  {typeof form.formState.errors.identityCard
                                    ?.message === 'string'
                                    ? form.formState.errors.identityCard.message
                                    : ''}
                                </p>
                              )}
                            </div>

                            <div>
                              <Label>
                                Metode Belajar{' '}
                                <span className="text-red-500">*</span>
                              </Label>
                              <Combobox
                                choices={metodeBelajarChoices}
                                placeholder="Click here to choose"
                                value={selectedValueMetode}
                                onChange={(val) => {
                                  setSelectedValueMetode(val);
                                  form.setValue('studyMethood', val);
                                }}
                                className="w-full"
                              />
                              {form.formState.errors.studyMethood && (
                                <p className="text-sm text-red-500">
                                  {form.formState.errors.studyMethood.message}
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
                                value={form.watch('parentName')}
                                onChange={(e) => {
                                  form.setValue('parentName', e.target.value);
                                }}
                                asterisk
                              />
                              {form.formState.errors.parentName && (
                                <p className="text-sm text-red-500">
                                  {form.formState.errors.parentName.message}
                                </p>
                              )}
                            </div>

                            <div>
                              <Input
                                label="Hubungan dengan Wali"
                                type="text"
                                placeholder="Enter your relationship with your guardian"
                                value={form.watch('relationWithParent')}
                                onChange={(e) => {
                                  form.setValue(
                                    'relationWithParent',
                                    e.target.value
                                  );
                                }}
                                asterisk
                              />
                              {form.formState.errors.relationWithParent && (
                                <p className="text-sm text-red-500">
                                  {
                                    form.formState.errors.relationWithParent
                                      .message
                                  }
                                </p>
                              )}
                            </div>

                            <div>
                              <Input
                                label="Nomor Telepon Wali"
                                type="tel"
                                placeholder="Enter your guardian's phone number"
                                value={form.watch('parentPhoneNumber')}
                                onChange={(e) => {
                                  form.setValue(
                                    'parentPhoneNumber',
                                    e.target.value
                                  );
                                }}
                                asterisk
                              />
                              {form.formState.errors.parentPhoneNumber && (
                                <p className="text-sm text-red-500">
                                  {
                                    form.formState.errors.parentPhoneNumber
                                      .message
                                  }
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="lg:w-1/2 max-lg:pt-4 lg:space-y-2">
                            <FileInput
                              label="Slip Gaji Orang Tua / Wali (opsional)"
                              file={paycheckFile}
                              setFile={setPaycheckFile}
                              className="w-full"
                            />
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
                                value={form.watch('highschoolName')}
                                onChange={(e) => {
                                  form.setValue(
                                    'highschoolName',
                                    e.target.value
                                  );
                                }}
                                asterisk
                              />
                              {form.formState.errors.highschoolName && (
                                <p className="text-sm text-red-500">
                                  {form.formState.errors.highschoolName.message}
                                </p>
                              )}
                            </div>

                            <div>
                              <Label>
                                Kelas <span className="text-red-500">*</span>
                              </Label>
                              <Combobox
                                choices={KelasChoices}
                                placeholder="Click here to choose"
                                value={selectedValueKelas}
                                onChange={(val) => {
                                  setSelectedValueKelas(val);
                                  form.setValue('highschoolClass', val);
                                }}
                                className="w-full"
                              />
                              {form.formState.errors.highschoolClass && (
                                <p className="text-sm text-red-500">
                                  {
                                    form.formState.errors.highschoolClass
                                      .message
                                  }
                                </p>
                              )}
                            </div>

                            <div>
                              <Input
                                label="Rata-Rata Rapot Semester 1-5"
                                type="text"
                                placeholder="Enter your grade report"
                                value={form.watch('meanScore')}
                                onChange={(e) => {
                                  form.setValue('meanScore', e.target.value);
                                }}
                                asterisk
                              />
                              {form.formState.errors.meanScore && (
                                <p className="text-sm text-red-500">
                                  {form.formState.errors.meanScore.message}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="lg:w-1/2 max-lg:pt-4 lg:space-y-2">
                            <FileInput
                              label="Rapot Peserta"
                              file={form.watch('studentReport')}
                              setFile={(file) =>
                                form.setValue('studentReport', file)
                              }
                              className="w-full"
                              asterisk
                            />
                            {form.formState.errors.studentReport && (
                              <p className="text-sm text-red-500">
                                {typeof form.formState.errors.studentReport
                                  ?.message === 'string'
                                  ? form.formState.errors.studentReport.message
                                  : ''}
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
                  title: 'Komitmen',
                  content: (
                    <Card className="space-y-6 lg:px-24 lg:py-16 bg-[#481E58]">
                      <CardHeader>
                        <CardTitle className="font-raleway font-semibold text-xl">
                          Komitmen
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-10">
                          <div className="space-y-1">
                            <FileInput
                              label="Motivation Letter (PDF)"
                              file={form.watch('motivationLetter')}
                              setFile={(file) =>
                                form.setValue('motivationLetter', file)
                              }
                              className="w-full"
                              asterisk
                            />
                            {form.formState.errors.motivationLetter && (
                              <p className="text-sm text-red-500">
                                {typeof form.formState.errors.motivationLetter
                                  ?.message === 'string'
                                  ? form.formState.errors.motivationLetter
                                      .message
                                  : ''}
                              </p>
                            )}
                          </div>

                          <div className="space-y-1">
                            <FileInput
                              label="Surat Komitmen (PDF)"
                              file={form.watch('commitmentLetter')}
                              setFile={(file) =>
                                form.setValue('commitmentLetter', file)
                              }
                              className="w-full"
                              asterisk
                            />
                            {form.formState.errors.commitmentLetter && (
                              <p className="text-sm text-red-500">
                                {typeof form.formState.errors.commitmentLetter
                                  ?.message === 'string'
                                  ? form.formState.errors.commitmentLetter
                                      .message
                                  : ''}
                              </p>
                            )}
                          </div>

                          <div className="space-y-1">
                            <FileInput
                              label="Bukti Follow Sosial Media (PDF)"
                              file={form.watch('proofOfFollowing')}
                              setFile={(file) =>
                                form.setValue('proofOfFollowing', file)
                              }
                              className="w-full"
                              asterisk
                            />
                            {form.formState.errors.proofOfFollowing && (
                              <p className="text-sm text-red-500">
                                {typeof form.formState.errors.proofOfFollowing
                                  ?.message === 'string'
                                  ? form.formState.errors.proofOfFollowing
                                      .message
                                  : ''}
                              </p>
                            )}
                          </div>

                          <div className="space-y-1">
                            <FileInput
                              label="Bukti Upload Twibbon (JPG/PNG/JPEG/PDF)"
                              file={form.watch('proofOfTwibbon')}
                              setFile={(file) =>
                                form.setValue('proofOfTwibbon', file)
                              }
                              className="w-full"
                              asterisk
                            />
                            {form.formState.errors.proofOfTwibbon && (
                              <p className="text-sm text-red-500">
                                {typeof form.formState.errors.proofOfTwibbon
                                  ?.message === 'string'
                                  ? form.formState.errors.proofOfTwibbon.message
                                  : ''}
                              </p>
                            )}
                          </div>

                          <div className="space-y-1">
                            <FileInput
                              label="Bukti Upload Story Instagram (JPG/PNG/JPEG/PDF)"
                              file={form.watch('proofOfSg')}
                              setFile={(file) =>
                                form.setValue('proofOfSg', file)
                              }
                              className="w-full"
                              asterisk
                            />
                            {form.formState.errors.proofOfSg && (
                              <p className="text-sm text-red-500">
                                {typeof form.formState.errors.proofOfSg
                                  ?.message === 'string'
                                  ? form.formState.errors.proofOfSg.message
                                  : ''}
                              </p>
                            )}
                          </div>
                        </div>

                        <CardHeader>
                          <CardTitle className="font-raleway font-semibold text-xl max-lg:pt-16">
                            Berkas Pendukung (Opsional)
                          </CardTitle>
                          <p className="text-sm text-neutral-50">
                            Unggahan berkas opsional ini dapat membantu
                            memperkuat pendaftaran Anda pada proses seleksi
                          </p>
                        </CardHeader>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:pb-10 pt-6">
                          <FileInput
                            label="Surat Keterangan Tidak Mampu"
                            file={povertyFile}
                            setFile={setPovertyFile}
                            className="w-full"
                          />

                          <FileInput
                            label="Tagihan Listrik"
                            file={electricityBillFile}
                            setFile={setElectricityBillFile}
                            className="w-full"
                          />

                          <FileInput
                            label="Foto Tampak Tempat Tinggal"
                            file={housePhotoFile}
                            setFile={setHousePhotoFile}
                            className="w-full"
                          />
                        </div>

                        <CardHeader>
                          <CardTitle className="font-raleway font-semibold text-xl max-lg:pt-16">
                            Kode Afiliasi
                          </CardTitle>
                        </CardHeader>

                        <div className="lg:w-1/2 pt-6">
                          <Input
                            type="text"
                            placeholder="Enter your code"
                            value={form.watch('referralCode')}
                            onChange={(e) => {
                              form.setValue('referralCode', e.target.value);
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
                            onClick={() => {
                              if (
                                form.getValues().fullName === '' ||
                                form.getValues().username === '' ||
                                form.getValues().phoneNumber === '' ||
                                form.getValues().address === '' ||
                                form.getValues().identityCard === undefined ||
                                form.getValues().studyMethood === '' ||
                                form.getValues().parentName === '' ||
                                form.getValues().relationWithParent === '' ||
                                form.getValues().parentPhoneNumber === '' ||
                                form.getValues().highschoolName === '' ||
                                form.getValues().highschoolClass === '' ||
                                form.getValues().meanScore === '' ||
                                form.getValues().studentReport === undefined ||
                                form.getValues().motivationLetter ===
                                  undefined ||
                                form.getValues().commitmentLetter ===
                                  undefined ||
                                form.getValues().proofOfFollowing ===
                                  undefined ||
                                form.getValues().proofOfTwibbon === undefined ||
                                form.getValues().proofOfSg === undefined
                              ) {
                                toast.warning(
                                  'Please fill in all required fields'
                                );
                              }
                            }}
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
        src={'/s3/Tali.png'}
        width={282}
        height={108}
        alt="Tali"
        className="absolute top-14 lg:top-[-2rem] left-0 -z-10 lg:w-[803px] lg:h-[362px]"
      />

      <Image
        src={'/s3/Tali2.png'}
        width={380}
        height={90}
        alt="Tali"
        className="absolute top-10 lg:top-20 right-0 -z-10 lg:w-[963px] lg:h-[182px]"
      />

      <Image
        src={'/s3/Lamp.png'}
        width={106}
        height={148}
        alt="Lamp"
        className="absolute top-20 right-10 lg:right-20 -z-10 lg:w-[185px] lg:h-[270px] lg:-rotate-[17deg] animate-swing"
      />

      <Image
        src={'/s3/Burung.png'}
        width={117}
        height={104}
        alt="Burung"
        className="absolute top-44 lg:top-60 left-12 lg:left-60 -z-10 lg:w-[213px] lg:h-[180px]"
      />

      <Image
        src={'/s3/Pohon3.png'}
        width={216}
        height={355}
        alt="Pohon"
        className="absolute bottom-[-2rem] lg:bottom-[-4rem]  right-[1rem] -z-10 lg:w-[800px] lg:h-[1380px]"
      />

      <Image
        src={'/s3/Pohon5.png'}
        width={216}
        height={355}
        alt="Pohon"
        className="absolute bottom-0 left-[1rem] -z-10 lg:w-[800px] lg:h-[1380px]"
      />

      <Image
        src={
          isHovered || page === 1
            ? '/s3/MascotDewasa.png'
            : '/s3/MascotLesu.png'
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
