import { getAsset } from "@/lib/s3"
import Image from "next/image"
import { NameTag, NameTagMobile } from "./NameTag"
import { PodiumAvatarProps } from "../interfaces"


export const FirstAvatar = ({ avatarSrc, name, institute, score }: PodiumAvatarProps) => {
    return (
        <div className="pt-[8.5rem] pb-[30%]">
            <div className="rounded-full max-lg:w-[280px] lg:w-[370px] max-lg:h-[285px] lg:h-[370px] bg-[#D5AF26] flex items-center justify-center relative">
                <Image src={getAsset('/PodiumHat-1.png')} width={200} height={160} alt="" className="lg:hidden z-10 absolute top-[-6.7rem] left-[14%]" />
                <Image src={getAsset('/PodiumHat-1.png')} width={277} height={204} alt="" className="max-lg:hidden z-10 absolute top-[-8.5rem] left-[12%]" />
                <Image src={avatarSrc} alt="" width={350} height={350} className="rounded-full" />
                <div className="absolute max-lg:bottom-[-19%] lg:bottom-[-14%] w-full flex flex-col items-center">
                    <NameTag name={name} institute={institute} score={score} />
                </div>
            </div>
        </div>
    )
}


export const SecondAvatar = ({ avatarSrc, name, institute, score }: PodiumAvatarProps) => {
    return (
        <div className="pt-[8.5rem] pb-[38%] px-[40px]">
            <div className="rounded-full w-[280px] h-[285px] bg-[#D5AF26] flex items-center justify-center relative">
                <Image src={getAsset('/PodiumHat-2.png')} width={200} height={170} alt="" className="z-10 absolute top-[-8.5rem] left-[3%]" />
                <Image src={avatarSrc} alt="" width={275} height={280} className="rounded-full" />
                <div className="absolute max-lg:bottom-[-19%] lg:bottom-[-22%] w-full flex flex-col items-center">
                    <NameTag name={name} institute={institute} score={score} />
                </div>
            </div>
        </div>
    )
}


export const ThirdAvatar = ({ avatarSrc, name, institute, score }: PodiumAvatarProps) => {
    return (
        <div className="pt-[8.5rem] pb-[38%] px-[40px]">
            <div className="rounded-full w-[280px] h-[285px] bg-[#D5AF26] flex items-center justify-center relative">
                <Image src={getAsset('/PodiumHat-3.png')} width={285} height={190} alt="" className="z-10 absolute top-[-9.7rem] right-[-11%]" />
                <Image src={avatarSrc} alt="" width={275} height={280} className="rounded-full" />
                <div className="absolute max-lg:bottom-[-19%] lg:bottom-[-22%] w-full flex flex-col items-center">
                    <NameTag name={name} institute={institute} score={score} />
                </div>
            </div>
        </div>
    )
}


export const FirstAvatarMobile = ({ avatarSrc, name, institute, score }: PodiumAvatarProps) => {
    return (
        <div className="pt-[5rem] px-[30px] pb-[2rem]">
            <div className="rounded-full w-[200px] h-[200px] bg-[#D5AF26] flex items-center justify-center relative">
                <Image src={getAsset('/PodiumHat-1.png')} width={137} height={86} alt="" className="z-10 absolute top-[-4.1rem] right-[-5%] rotate-[19.5deg]" />
                <Image src={avatarSrc} alt="" width={194} height={194} className="rounded-full" />
                <div className="absolute bottom-[-26%] w-full flex flex-col items-center">
                    <NameTagMobile name={name} institute={institute} score={score} />
                </div>
            </div>
        </div>
    )
}

export const SecondAvatarMobile = ({ avatarSrc, name, institute, score }: PodiumAvatarProps) => {
    return (
        <div className="pt-[6rem] px-[30px] pb-[2rem]">
            <div className="rounded-full w-[200px] h-[200px] bg-[#D5AF26] flex items-center justify-center relative">
                <Image src={getAsset('/PodiumHat-2.png')} width={144} height={121} alt="" className="z-10 absolute top-[-5.55rem] left-[7%] rotate-[5deg]" />
                <Image src={avatarSrc} alt="" width={194} height={194} className="rounded-full" />
                <div className="absolute bottom-[-26%] w-full flex flex-col items-center">
                    <NameTagMobile name={name} institute={institute} score={score} />
                </div>
            </div>
        </div>
    )
}


export const ThirdAvatarMobile = ({ avatarSrc, name, institute, score }: PodiumAvatarProps) => {
    return (
        <div className="pt-[7rem] px-[30px] pb-[2rem]">
            <div className="rounded-full w-[200px] h-[200px] bg-[#D5AF26] flex items-center justify-center relative">
                <Image src={getAsset('/PodiumHat-3.png')} width={205} height={136} alt="" className="z-10 absolute top-[-6.5rem] right-[-3%] rotate-[-7deg]" />
                <Image src={avatarSrc} alt="" width={194} height={194} className="rounded-full" />
                <div className="absolute bottom-[-26%] w-full flex flex-col items-center">
                    <NameTagMobile name={name} institute={institute} score={score} />
                </div>
            </div>
        </div>
    )
}
