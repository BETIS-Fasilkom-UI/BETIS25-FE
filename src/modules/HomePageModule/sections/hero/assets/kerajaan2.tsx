import Image from 'next/image'

export default function Kerajaan(props: {className: string}) {
    return(
        <div className={props.className}>
        <Image 
            src="/kerajaan-2.png" 
            alt="kerajaan" 
            sizes="none"
            fill
        />
        </div>
    )
}