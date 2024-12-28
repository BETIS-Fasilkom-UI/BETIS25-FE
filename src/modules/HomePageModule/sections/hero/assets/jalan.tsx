import Image from 'next/image'


export default function Jalan(props: {className: string}) {
    return(
        <div className={`${props.className}`}>
        <Image 
            src="/jalan.png" 
            alt="Jalan" 
            sizes="none"
            fill
        />
        </div>
    )
}