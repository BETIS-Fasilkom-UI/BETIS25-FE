import { getAsset } from '@/lib/s3'
import Image from 'next/image'

export default function Dedaunan(props: {className: string}) {
    return(
        <div className={props.className}>
        <Image 
            src={getAsset("/dedaunan.png")} 
            alt="dedaunan" 
            sizes="none"
            fill
        />
        </div>
    )
}