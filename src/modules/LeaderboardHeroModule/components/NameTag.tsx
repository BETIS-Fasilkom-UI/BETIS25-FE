import { NameTagProps } from "../interfaces"


export const NameTag = ({ name, institute, score }: NameTagProps) => {
    return (
        <div className="relative">
            <div className="relative flex flex-col 
                max-lg:w-[300px] lg:w-[355px] max-lg:h-[80px] lg:h-[90px] 
                gap-[5px] max-lg:px-[20px] lg:px-[40px] py-[15px] 
                bg-[#F8EBF3] rounded-[20px] 
                justify-center items-center"
            >
                <p className="font-cinzel font-[900] max-lg:text-[18px] lg:text-[20px] text-[#82275F] leading-[28px]">{name}</p>
                <p className="font-raleway font-[600] max-lg:text-[16px] lg:text-[20px] text-[#82275F] leading-[28px]">{institute}</p>
                <div className="absolute z-10 lg:left-[31%] max-lg:bottom-[-35%] lg:bottom-[-53%]">
                    <div className="flex flex-col 
                        max-lg:w-[100px] lg:w-[135px] max-lg:h-[40px] h-[57px] 
                        gap-[5px] px-[29px] py-[8px] 
                        bg-[#82275F] max-lg:rounded-[10px] lg:rounded-[17px] 
                        justify-center items-center">
                        <p className="font-cinzel font-[900] max-lg:text-[20px] lg:text-[30px] text-[#F8EBF3] leading-[36px]">{score}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export const NameTagMobile = ({ name, institute, score }: NameTagProps) => {
    return (
        <div className="relative">
            <div className="relative flex flex-col w-[255px] h-[70px] gap-[5px] px-[15px] py-[15px] bg-[#F8EBF3] rounded-[12px] justify-center items-center flex-shrink-0">
                <p className="font-cinzel font-[900] text-[16px] text-[#82275F] leading-[14px]">{name}</p>
                <p className="font-raleway font-[600] text-[14px] text-[#82275F] leading-[14px]">{institute}</p>
                <div className="absolute z-10 left-[37%] top-[-25%]">
                    <div className="flex flex-col w-[67px] h-[28.5px] gap-[5px] px-[29px] py-[8px] bg-[#82275F] rounded-[8.5px] justify-center items-center flex-shrink-0">
                        <p className="font-cinzel font-[900] text-[16px] text-[#F8EBF3] leading-[28px]">{score}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

