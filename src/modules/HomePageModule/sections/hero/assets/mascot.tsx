import Image from 'next/image'
import Lentera from './lentera';
import styles from './hero.module.css'


export default function Mascot(props: {className: string}) {
    return(
        <div className={`${props.className}`}>
            <div className='w-full h-full relative'>
                <Lentera
                    className={`${styles.rotateLentera} z-[0] w-[20%] aspect-[309/583] absolute right-[1%] top-[14%]`}
                />
                <Image
                    className='z-0'
                    src="/orangbawalentera.png" 
                    alt="mascot" 
                    sizes="none"
                    fill
                />

            </div>
        </div>
    )
}