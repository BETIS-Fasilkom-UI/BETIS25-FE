import Image from 'next/image'
import Dedaunan from "./dedaunan";

export default function Pohon(props: {className: string, reverse: boolean}) {
    return(
        <div className={props.className}>
        <Image
            className={props.reverse ? 'transform scale-x-[-1]' : ''}
            src="/pohon.png" 
            alt="pohon" 
            sizes="none"
            fill
        />
        <Dedaunan
            className={`${props.reverse ? 'transform scale-x-[-1]' : ''} w-[310px] max-md:w-[150px] max-sm:w-[100px] aspect-[1377/767] absolute -bottom-9 left-32 max-md:left-[90px] max-sm:left-10`}
        />
        </div>
    )
}