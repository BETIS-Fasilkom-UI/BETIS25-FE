import { getAsset } from "@/lib/s3"
import Image from "next/image"

export interface PodiumAvatarProps {
    avatarSrc?: string,
}

export const FirstAvatar = (props: PodiumAvatarProps = {avatarSrc:'/Pp-girl2.png'}) => {
    return (
    <div>
        <div className="rounded-full w-[370px] h-[370px] bg-[#D5AF26] flex items-center justify-center">
            <Image src={getAsset(props.avatarSrc || '/Pp-girl2.png')} alt="" width={350} height={350} className="rounded-full"/>
        </div>
    </div>
    )
}
