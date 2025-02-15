import { useEffect, useMemo, useState } from "react"
import { getCookie } from "cookies-next";
import { FirstAvatar, FirstAvatarMobile, SecondAvatar, SecondAvatarMobile, ThirdAvatar, ThirdAvatarMobile } from "./components/PodiumAvatar"
import { LeaderboardHeroProps, PodiumAvatarProps } from "./interfaces"


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
            <div className="md:max-[1170px]:flex-1 flex flex-col flex-wrap max-md:hidden min-[1170px]:hidden w-screen justify-center items-center h-full gap-[25px]">
                <div className="w-[380px] h-[650px] flex justify-center">
                    <FirstAvatar {...first} />
                </div>
                <div className="w-[380px] h-[650px] flex justify-center">
                    <ThirdAvatar {...third} />
                </div>
                <div className="w-[380px] h-[650px] flex justify-center">
                    <SecondAvatar {...second} />
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


export const LeaderboardHeroModule = ({ leaderboardId = "" }: { leaderboardId: string }) => {
    const [props, setProps] = useState<LeaderboardHeroProps>(() => ({
        first: { name: "NAOMI SHAKILA ISBONO", institute: "SMA Labschool Cirendeu", score: 750, avatarSrc: "/Pp-girl2.png" },
        second: { name: "NAOMI SHAKILA ISBONO", institute: "SMA Labschool Cirendeu", score: 750, avatarSrc: "/Pp-girl2.png" },
        third: { name: "NAOMI SHAKILA ISBONO", institute: "SMA Labschool Cirendeu", score: 750, avatarSrc: "/Pp-girl2.png" }
    }))

    const avatarOptions = [
        "/Pp-girl1.png",
        "/Pp-girl2.png",
        "/Pp-boy1.png",
        "/Pp-boy2.png",
    ];
    
    useEffect(() => {
        const loadLeaderboard = async () => {
            const url = process.env.NEXT_PUBLIC_API_URL || '';
            const token = await getCookie('token');
            const res = await fetch(`${url}leaderboard/${leaderboardId}`, {
                method: "GET",
                headers: {
                    "Authorization": "Bearer " + token,
                }
            });

            if (res.ok) {
                const resJson = await res.json();
                const leaderboardData = resJson?.data?.leaderboard;
                if (leaderboardData.length >= 3) {
                    const first: PodiumAvatarProps = {
                        avatarSrc: avatarOptions[leaderboardData[0].avatar],
                        name: leaderboardData[0].full_name, 
                        institute: leaderboardData[0].school_name, 
                        score: leaderboardData[0].average_score
                    };
                    const second: PodiumAvatarProps = {
                        avatarSrc: avatarOptions[leaderboardData[1].avatar],
                        name: leaderboardData[1].full_name, 
                        institute: leaderboardData[1].school_name, 
                        score: leaderboardData[1].average_score
                    };
                    const third: PodiumAvatarProps = {
                        avatarSrc: avatarOptions[leaderboardData[2].avatar],
                        name: leaderboardData[2].full_name, 
                        institute: leaderboardData[2].school_name, 
                        score: leaderboardData[2].average_score
                    };
                    setProps({
                        first, second, third
                    })
                }
            }
        }
        loadLeaderboard();
    }, [leaderboardId])

    return (
        <>
            <LeaderboardHeroDesktop {...props} />
            <LeaderboardHeroMobile {...props} />
        </>
    )
}


export const SamplePage = () => {
    return (
        <div className="h-[200vh] w-screen pt-[200px] flex flex-col items-center justify-center">
            <LeaderboardHeroModule leaderboardId="" />
        </div>
    )
}
