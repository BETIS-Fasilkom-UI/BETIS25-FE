import Image from 'next/image'
import styles from './hero.module.css'

export default function KupuKupu(props: {className: string, reverse: boolean}) {
    return (
        <div className={`${props.className} ${styles.atasBawah}`}>
            <Image 
                className={props.reverse ? 'transform scale-x-[-1]' : ''}
                src="/kupu-kupu1.png"
                alt="kupukupuk" 
                layout="fill"
            />
        </div>
    )
}