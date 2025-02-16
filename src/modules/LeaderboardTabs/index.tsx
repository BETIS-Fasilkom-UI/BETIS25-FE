"use client";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  LabelList,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Data } from "./interface";

const chartConfig = {
  average_score: {
    label: "Skor",
    color: "#308F9D",
  },
} satisfies ChartConfig;

interface CustomTooltipProps {
  active?: boolean;
  payload?: {
    payload: { detail_score: Record<string, number | string>; name: string };
  }[];
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload.detail_score;
    return (
      <div className="bg-white p-2 shadow-md rounded text-[#692597]">
        <p className="font-bold">{payload[0].payload.name}</p>
        {Object.entries(data).map(([key, value]) => (
          <p key={key}>
            {key}: {value as React.ReactNode}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const LeaderboardTabs = ({ userData }: { userData: Data }) => {
  const [activeTab, setActiveTab] = useState(true);
  const [chartData] = useState(userData.tryout);
  const [nilai] = useState(userData.nilai.daftar_quiz);

  return (
    <>
      <div className="w-full flex justify-center py-20 px-4">
        <div
          className="w-[390px] md:w-[600px] lg:w-[1064px] flex flex-col"
          style={{ filter: "drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.6))" }}
        >
          <div className=" w-full grid grid-cols-2 gap-5 font-cinzel text-2xl max-md:text-xl max-sm:text-lg">
            <div className="w-full h-full">
              <button
                onClick={() => setActiveTab(true)}
                className={`w-full rounded-[30px] ${
                  activeTab
                    ? "bg-[#523C5F] text-violet-50 rounded-[20px] rounded-tr-3xl rounded-b-none max-sm:rounded-b-none py-6 max-sm:py-3"
                    : "bg-violet-50 text-[#6D4B79] py-4 max-sm:py-2"
                }`}
              >
                NILAI
              </button>
            </div>
            <div className="w-full h-full">
              <button
                onClick={() => setActiveTab(false)}
                className={`w-full rounded-[30px] ${
                  activeTab
                    ? "bg-violet-50 text-[#523C5F] py-4 max-sm:py-2"
                    : "bg-[#523C5F] text-violet-50 rounded-[20px] rounded-tl-3xl rounded-b-none max-sm:rounded-b-none py-6 max-sm:py-3"
                }`}
              >
                GRAFIK TO
              </button>
            </div>
          </div>
          <div
            className={`w-full h-full p-10 max-md:p-8 max-sm:p-0 bg-[#523C5F] rounded-[30px]  max-sm:rounded-[20px] ${
              activeTab
                ? "rounded-tl-[0px] max-md:rounded-tl-[0px] max-sm:rounded-tl-[0px]"
                : "rounded-tr-[0px]"
            }   shadow-lg`}
          >
            {activeTab ? (
              <div
                className={`flex min-h-72 flex-col gap-4 text-2xl max-md:text-xl max-sm:text-lg max-sm:px-4 max-sm:py-2 font-openSans`}
              >
                <h3 className="font-raleway font-semibold">Detail Nilai</h3>
                <div className="w-full h-[1px] bg-white"></div>
                <div className="flex flex-col gap-4">
                  {nilai.map((item, index) => (
                    <div key={index} className="flex justify-between px-4">
                      <p>{item.title}</p>
                      <p>{item.score}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Card
                className={`shadow-none bg-opacity-0 py-0 px-0 text-white ${
                  activeTab
                    ? "rounded-tl-[0px] max-sm:rounded-tl-[0px]"
                    : "rounded-tr-[0px]"
                }`}
              >
                <CardContent className="px-0 max-sm:pt-5">
                  <ChartContainer config={chartConfig}>
                    <BarChart
                      accessibilityLayer
                      data={chartData}
                      margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="name"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        className="fill-white"
                      />
                      <Tooltip cursor={false} content={<CustomTooltip />} />
                      <Bar dataKey="average_score" fill="#308F9D" radius={20}>
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
  );
};
export default LeaderboardTabs;
