import { getAsset } from "@/lib/s3"
import Image from "next/image"
import { NameTag, NameTagProps } from "./NameTag"


export type PodiumAvatarProps = {
    avatarSrc: string
} & NameTagProps


export const FirstAvatar = ({ avatarSrc, name, institute, score }: PodiumAvatarProps) => {
    return (
        <div className="pt-[8.5rem] pb-[30%]">
            <div className="rounded-full w-[370px] h-[370px] bg-[#D5AF26] flex items-center justify-center relative">
                <Image src={'/PodiumHat-1.png'} width={277} height={204} alt="" className="z-10 absolute top-[-8.5rem] left-[12%]" />
                <Image src={getAsset(avatarSrc || '/Pp-girl2.png')} alt="" width={350} height={350} className="rounded-full" />
                <div className="absolute bottom-[-14%] w-full flex flex-col items-center">
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
                <Image src={'/PodiumHat-2.png'} width={200} height={170} alt="" className="z-10 absolute top-[-8.5rem] left-[3%]" />
                <Image src={getAsset(avatarSrc || '/Pp-girl2.png')} alt="" width={275} height={280} className="rounded-full" />
                <div className="absolute bottom-[-22%] w-full flex flex-col items-center">
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
                <Image src={'/PodiumHat-3.png'} width={285} height={190} alt="" className="z-10 absolute top-[-9.7rem] right-[-11%]" />
                <Image src={getAsset(avatarSrc || '/Pp-girl2.png')} alt="" width={275} height={280} className="rounded-full" />
                <div className="absolute bottom-[-22%] w-full flex flex-col items-center">
                    <NameTag name={name} institute={institute} score={score} />
                </div>
            </div>
        </div>
    )
}
