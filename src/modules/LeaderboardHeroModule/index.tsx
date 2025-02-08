import { FirstAvatar, FirstAvatarMobile, SecondAvatar, SecondAvatarMobile, ThirdAvatar, ThirdAvatarMobile } from "./components/PodiumAvatar"


export const LeaderboardHeroDesktop = ({}) => {
    return (
        <div className="lg:flex-1 flex lg:flex-row max-lg:hidden w-screen justify-center items-center h-full xl:gap-[110px]">
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


export const LeaderboardHeroMobile = ({}) => {
    return (
        <div className="max-lg:flex-1 flex flex-col lg:hidden w-screen justify-center items-center gap-[30px]">
            <div className="w-[380px] h-[350px] flex justify-center">
                <FirstAvatarMobile name="NAOMI SHAKILA ISBONO" institute="SMA Labschool Cirendeu" score="750" avatarSrc="/Pp-girl2.png"/>
            </div>
            <div className="w-[380px] h-[350px] flex justify-center">
                <SecondAvatarMobile name="NAOMI SHAKILA ISBONO" institute="SMA Labschool Cirendeu" score="750" avatarSrc="/Pp-girl2.png"/>
            </div>
            <div className="w-[380px] h-[350px] flex justify-center">
                <ThirdAvatarMobile name="NAOMI SHAKILA ISBONO" institute="SMA Labschool Cirendeu" score="750" avatarSrc="/Pp-girl2.png"/>
            </div>
        </div>
    )
}


export const LeaderboardHeroModule = ({}) => {
    return (
    <>
        <LeaderboardHeroDesktop/>
        <LeaderboardHeroMobile/>
    </>
    )
}
