import Image from 'next/image'
import Buku from "./buku";
import Pohon from "./pohon";


export default function Jalan(props: {className: string}) {
    return(
        <div className={`${props.className}`}>
            <Image
                className='z-0'
                src="/jalan.png" 
                alt="Jalan" 
                sizes="none"
                fill
            />
            <div className='z-[1] flex justify-center'>
                <Buku
                    className="w-[900px] max-md:w-[800px] max-sm:w-[550px] aspect-[5200/1782] absolute bottom-0"
                />
            </div>

            {/* PEPOHONAN */}
            <div className='z-[1]'>
                <Pohon
                    reverse={true}
                    className="w-[655px] max-md:w-[400px] max-sm:w-[211px] aspect-[2643/3349] absolute bottom-[-320px] max-md:bottom-[-200px] max-sm:bottom-[-90px] right-[-300px] max-md:right-[-90px] max-sm:right-10"
                />
            </div>
            <div className='z-[1]'>
                <Pohon
                    reverse={false}
                    className="w-[655px] max-md:w-[400px] max-sm:w-[211px] aspect-[2643/3349] absolute bottom-[-320px] max-md:bottom-[-200px] max-sm:bottom-[-90px] left-[-300px] max-md:left-[-90px] max-sm:left-8"
                />
            </div>
        </div>
    )
}