
export interface NameTagProps {
    name: string,
    institute: string,
    score: string | number
}

export type PodiumAvatarProps = {
    avatarSrc: string
} & NameTagProps


export interface LeaderboardHeroProps {
    first: PodiumAvatarProps,
    second: PodiumAvatarProps,
    third: PodiumAvatarProps
}
