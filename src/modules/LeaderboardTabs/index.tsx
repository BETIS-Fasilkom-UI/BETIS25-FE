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

const chartData = [
    {
        to: 'TO 1',
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
                    <p key={key}>{key}: {value}</p>
                ))}
            </div>
        );
    }
    return null;
};

const LeaderboardTabs = () =>{
    const [activeTab, setActiveTab] = useState(false);

    return(
        <>
            <div className="w-[90%]">
                <div className="w-full h-full p-10 max-md:p-8 max-sm:p-6 bg-[#F8EBF3] rounded-[50px] max-md:rounded-[30px] max-sm:rounded-[20px] bg-opacity-20 shadow-[0px_2px_30px_0px_rgba(255,255,255,1.00)]">
                    {
                    activeTab?(
                    <div className="flex flex-col gap-4 text-2xl max-md:text-xl max-sm:text-lg font-openSans">
                        <h3 className='font-raleway font-semibold'>Detail Nilai</h3>
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
