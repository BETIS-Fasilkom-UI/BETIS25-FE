import { getAsset } from '@/lib/s3'
import Image from 'next/image'


export default function Jalan(props: {className: string}) {
    return(
        <div className={`${props.className}`}>
        <Image 
            src={getAsset("/aliran.png")} 
            alt="aliran" 
            sizes="none"
            fill
        />
        </div>
    )
}