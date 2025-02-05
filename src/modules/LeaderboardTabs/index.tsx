const LeaderboardTabs = () =>{
    return(
        <>
            <div className="w-[70%]">
                <div className="w-full h-full p-10 max-md:p-8 max-sm:p-6 bg-[#F8EBF3] rounded-[50px] max-md:rounded-[30px] max-sm:rounded-[20px] bg-opacity-20 shadow-[0px_2px_30px_0px_rgba(255,255,255,1.00)]">
                    <div className="flex flex-col gap-4 text-2xl max-md:text-xl max-sm:text-lg font-openSans">
                        
                        <h3>Detail Nilai</h3>
                        <div className="w-full h-[1px] bg-white"></div>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between px-4">
                                <p>Skor TO 1&2</p>
                                <p>100</p>
                            </div>
                            <div className="flex justify-between px-4">
                                <p>Mini-Quiz</p>
                                <p>100</p>
                            </div>
                            <div className="flex justify-between px-4">
                                <p>PR</p>
                                <p>100</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default LeaderboardTabs;