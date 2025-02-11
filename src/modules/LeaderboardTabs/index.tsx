'use client';
import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from "recharts"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"
import {
    Button
} from "@/components/ui/button"

const chartData = [
    {
        to: 'TO 1',
        score: 74,
        data:{
            PU: 100,
            PPU: 100,
            PBM: 100,
            PK: 100,
            LBI: 100,
            LBE: 100,
            PM: 100
        }
    },
    {
        to: 'TO 2',
        score: 100,
        data:{
            PU: 100,
            PPU: 100,
            PBM: 100,
            PK: 100,
            LBI: 100,
            LBE: 100,
            PM: 100
        }
    },
    {
        to: 'TO 3',
        score: 100,
        data:{
            PU: 100,
            PPU: 100,
            PBM: 100,
            PK: 100,
            LBI: 100,
            LBE: 100,
            PM: 100
        }
    }
]

const chartConfig = {
    score: {
      label: "Skor",
      color: "#308F9D",
    },
} satisfies ChartConfig;

interface CustomTooltipProps {
    active?: boolean;
    payload?: any[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload.data;
        return (
            <div className="bg-white p-2 shadow-md rounded text-[#692597]">
                <p className="font-bold">{payload[0].payload.to}</p>
                {Object.entries(data).map(([key, value]) => (
                    <p key={key}>{key}: {value as React.ReactNode}</p>
                ))}
            </div>
        );
    }
    return null;
};

const LeaderboardTabs = () =>{
    const [activeTab, setActiveTab] = useState(true);

    return(
        <>
            <div className="w-[60%] max-md:w-[70%] max-sm:w-[90%] flex flex-col gap-7">
                <div className='w-full grid grid-cols-2 gap-5 font-cinzel text-2xl max-md:text-xl max-sm:text-lg'>
                    <div className='w-full h-full'>
                        <button
                            onClick={() => setActiveTab(true)}
                            className={`w-full h-full rounded-3xl py-3 max-sm:py-2 ${activeTab ? 'bg-violet-400 text-violet-50' : 'bg-[#F8EBF3] text-[#692597]'}`}
                        >
                            NILAI
                        </button>
                    </div>
                    <div className='w-full h-full'>
                        <button
                            onClick={() => setActiveTab(false)}
                            className={`w-full h-full rounded-3xl py-3 max-sm:py-2 ${activeTab ? 'bg-[#F8EBF3] text-[#692597]' : 'bg-violet-400 text-violet-50'}`}
                        >
                            GRAFIK TO
                        </button>

                    </div>
                </div>
                {/* shadow-[0px_2px_30px_0px_rgba(255,255,255,1.00)] */}
                <div className="w-full h-full p-10 max-md:p-8 max-sm:p-6 bg-[#F8EBF3] rounded-[50px] max-md:rounded-[30px] max-sm:rounded-[20px] bg-opacity-20 shadow-[0px_2px_30px_0px_rgba(255,255,255,1.00)]">
                    {
                    activeTab?(
                    <div className="flex min-h-72 flex-col gap-4 text-2xl max-md:text-xl max-sm:text-lg font-openSans">
                        <h3 className='font-raleway font-semibold'>Detail Nilai</h3>
                        <div className="w-full h-[1px] bg-white"></div>
                        <div className="flex flex-col gap-10">
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
                            <div className="flex justify-between px-4">
                                <p>Presensi</p>
                                <p>100</p>
                            </div>
                        </div>
                    </div>): (
                        <Card className='rounded-none shadow-none bg-opacity-0'>
                            <CardContent>
                                <ChartContainer config={chartConfig}>
                                <BarChart accessibilityLayer data={chartData}>
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                    dataKey="to"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    />
                                    <Tooltip cursor={false} content={<CustomTooltip />} />
                                    <Bar dataKey="score" fill="#308F9D" radius={8} />
                                </BarChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </>
    )
}
export default LeaderboardTabs;
