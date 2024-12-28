import Image from 'next/image'

export default function Dedaunan(props: {className: string}) {
    return(
        <div className={props.className}>
        <Image 
            src="/dedaunan.png" 
            alt="dedaunan" 
            sizes="none"
            fill
        />
        </div>
    )
}