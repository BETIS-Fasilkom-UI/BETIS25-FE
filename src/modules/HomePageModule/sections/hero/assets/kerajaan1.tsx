import { getAsset } from '@/lib/s3'
import Image from 'next/image'

export default function Kerajaan(props: {className: string}) {
    return(
        <div className={props.className}>
        <Image 
            src={getAsset("/kerajaan-1.png")} 
            alt="kerajaan" 
            sizes="none"
            fill
        />
        </div>
    )
}