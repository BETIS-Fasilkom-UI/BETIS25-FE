'use client';
import { useState, useEffect } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip, LabelList } from "recharts"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart"
import { Data } from './interface';

const chartConfig = {
    average_score: {
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
        const data = payload[0].payload.detail_score;
        return (
            <div className="bg-white p-2 shadow-md rounded text-[#692597]">
                <p className="font-bold">{payload[0].payload.name}</p>
                {Object.entries(data).map(([key, value]) => (
                    <p key={key}>{key}: {value as React.ReactNode}</p>
                ))}
            </div>
        );
    }
    return null;
};

const LeaderboardTabs = (
    {
      userData,
    }: {
        userData: Data;
    }
) =>{
    const [activeTab, setActiveTab] = useState(true);
    const [chartData, setchartData] = useState(userData.tryout)
    const [nilai, setNilai] = useState(userData.nilai.daftar_quiz)



    return(
        <>
            <div className='w-full flex justify-center py-20'>
            <div className="w-[390px] md:w-[600px] lg:w-[1064px] flex flex-col">
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
                <div className={`w-full ${activeTab?'':'p-0'} h-full p-10 max-md:p-8 max-sm:p-0 bg-[#F8EBF3] rounded-[50px] max-md:rounded-[30px] max-sm:rounded-[20px] bg-opacity-20 shadow-[0px_2px_30px_0px_rgba(255,255,255,1.00)]`}>
                    {
                    activeTab?(
                    <div className="flex min-h-72 flex-col gap-4 text-2xl max-md:text-xl max-sm:text-lg max-sm:px-4 max-sm:py-2 font-openSans">
                        <h3 className='font-raleway font-semibold'>Detail Nilai</h3>
                        <div className="w-full h-[1px] bg-white"></div>
                        <div className="flex flex-col gap-10">
                            {
                                nilai.map((item, index) => (
                                    <div key={index} className="flex justify-between px-4">
                                        <p>{item.title}</p>
                                        <p>{item.score}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>): (
                        <Card className='rounded-[50px] max-md:rounded-[30px] max-sm:rounded-[20px] shadow-none bg-opacity-0 py-0 px-0 text-white'>
                            <CardContent className='px-0 max-sm:pt-5'>
                                <ChartContainer config={chartConfig}>
                                <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                    dataKey="name"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    className='fill-white'
                                    />
                                    <Tooltip cursor={false} content={<CustomTooltip />} />
                                    <Bar dataKey="average_score" fill="#308F9D" radius={20}
                                    >
                                    <LabelList
                                        position="top"
                                        offset={4}
                                        className="fill-white"
                                        fontSize={16}
                                        z={10}
                                    />
                                    </Bar>
                                </BarChart>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
            </div>
        </>
    )
}
export default LeaderboardTabs;
