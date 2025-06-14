import { FirstAvatar, FirstAvatarMobile, SecondAvatar, SecondAvatarMobile, ThirdAvatar, ThirdAvatarMobile } from "./components/PodiumAvatar"
import { LeaderboardHeroProps } from "./interfaces"


export const LeaderboardHeroDesktop = ({ first, second, third }: LeaderboardHeroProps) => {
    return (
        <>
            <div className="min-[1170px]:flex-1 flex flex-row max-[1170px]:hidden w-screen justify-center items-center h-full xl:gap-[110px] gap-[25px]">
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

            <div className="md:max-[1170px]:flex-1 flex flex-col flex-wrap max-md:hidden min-[1170px]:hidden w-screen mx-auto justify-center items-center gap-[25px]">
                <div className="w-[380px] h-[650px] flex">
                    <FirstAvatar {...first} />
                </div>
                <div className="w-[380px] h-[550px] flex">
                    <SecondAvatar {...second} />
                </div>
                <div className="w-[380px] h-[550px] flex">
                    <ThirdAvatar {...third} />
                </div>
            </div>
        </>
    )
}


export const LeaderboardHeroMobile = ({ first, second, third }: LeaderboardHeroProps) => {
    return (
        <div className="max-md:flex-1 flex flex-col md:hidden w-screen justify-center items-center gap-[30px]">
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
