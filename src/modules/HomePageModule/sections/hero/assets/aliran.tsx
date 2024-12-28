import Image from 'next/image'


export default function Jalan(props: {className: string}) {
    return(
        <div className={`${props.className}`}>
        <Image 
            src="/aliran.png" 
            alt="aliran" 
            sizes="none"
            fill
        />
        </div>
    )
}