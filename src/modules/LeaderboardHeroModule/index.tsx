import { FirstAvatar, FirstAvatarMobile, SecondAvatar, SecondAvatarMobile, ThirdAvatar, ThirdAvatarMobile } from "./components/PodiumAvatar"
import { LeaderboardHeroProps } from "./interfaces"


export const LeaderboardHeroDesktop = ({ first, second, third }: LeaderboardHeroProps) => {
    return (
        <div className="lg:flex-1 flex lg:flex-row max-lg:hidden w-screen justify-center items-center h-full xl:gap-[110px]">
            <div className="w-[380px] h-[650px] pt-[6rem] flex justify-center">
                <SecondAvatar {...second} />
            </div>
            <div className="w-[380px] h-[650px] flex justify-center">
                <FirstAvatar {...first} />
            </div>
            <div className="w-[380px] h-[650px] pt-[6rem] flex justify-center">
                <ThirdAvatar {...third} />
            </div>
        </div>
    )
}


export const LeaderboardHeroMobile = ({ first, second, third }: LeaderboardHeroProps) => {
    return (
        <div className="max-lg:flex-1 flex flex-col lg:hidden w-screen justify-center items-center gap-[30px]">
            <div className="w-[380px] h-[350px] flex justify-center">
                <FirstAvatarMobile {...first} />
            </div>
            <div className="w-[380px] h-[350px] flex justify-center">
                <SecondAvatarMobile {...second} />
            </div>
            <div className="w-[380px] h-[350px] flex justify-center">
                <ThirdAvatarMobile {...third} />
            </div>
        </div>
    )
}


export const LeaderboardHeroModule = (props: LeaderboardHeroProps) => {
    return (
        <>
            <LeaderboardHeroDesktop {...props} />
            <LeaderboardHeroMobile {...props} />
        </>
    )
}
