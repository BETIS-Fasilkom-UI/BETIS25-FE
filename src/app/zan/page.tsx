import LeaderboardTabs from '@/modules/LeaderboardTabs'
import { getUserData } from "@/hooks/user";
import fetchServer from "@/lib/fetchServer";
import { NextPage } from "next";
import { ApiResponse } from '@/modules/LeaderboardTabs/interface';

const page: NextPage = async () => {
    const user = await getUserData();
    console.log(user?.id);

    const response = await fetchServer<ApiResponse>(`/leaderboard/detail/${user?.id}`);

    if (!response.data) {
        return <div>An Error Occurred! Please Refresh: {response.error}</div>;
    }

    const data = response.data;

    return <LeaderboardTabs userData={data.data} />;
};

export default page;
