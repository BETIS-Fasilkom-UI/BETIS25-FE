import { FirstAvatar, SecondAvatar, ThirdAvatar } from "./components/PodiumAvatar"


export const LeaderboardHeroModule = ({}) => {
    return (
    <div className="flex lg:flex-row max-lg:hidden w-screen justify-center h-full xl:gap-[110px]">
        <div className="w-[380px] h-[650px] pt-[6rem] flex justify-center">
            <SecondAvatar name="NAOMI SHAKILA ISBONO" institute="SMA Labschool Cirendeu" score="750" avatarSrc="/Pp-girl2.png"/>
        </div>
        <div className="w-[380px] h-[650px] flex justify-center">
            <FirstAvatar name="NAOMI SHAKILA ISBONO" institute="SMA Labschool Cirendeu" score="750" avatarSrc="/Pp-girl2.png"/>
        </div>
        <div className="w-[380px] h-[650px] pt-[6rem] flex justify-center">
            <ThirdAvatar name="NAOMI SHAKILA ISBONO" institute="SMA Labschool Cirendeu" score="750" avatarSrc="/Pp-girl2.png"/>
        </div>
    </div>
    )
}
