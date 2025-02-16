import LeaderboardTabs from '@/modules/LeaderboardTabs'
// import { getUserData } from "@/hooks/user";
// import fetchServer from "@/lib/fetchServer";
import { NextPage } from "next";
// import { ApiResponse } from '@/modules/LeaderboardTabs/interface';

const DataData = {
    "ok": true,
    "message" : "fetched",
    "data": {
        "fullname": "blabla",
        "avatar":0,
        "nilai_total":87844,
        "id": "iniiduser",
        "nilai":{
            "daftar_quiz":[
                {
                    "title": "mini_quiz",
                    "score":600
                },
                {
                    "title": "PR",
                    "score":600
                },
                {
                    "title": "TO1",
                    "score":600
                }
            ],
            "average_score": 1000
        },
        "tryout": [
            {
                "name": "tryout1",
                "average_score": 100,
                "detail_score":{
                    "pu":100,
                    "ppu":100,
                    "pbm":100,
                    "pk": 100,
                    "lbi":100,
                    "lbe":100,
                    "pm":100
                }
            },
            {
                "name": "tryout2",
                "average_score": 100,
                "detail_score":{
                    "pu":100,
                    "ppu":100,
                    "pbm":100,
                    "pk": 100,
                    "lbi":100,
                    "lbe":100,
                    "pm":100
                }
            }
        ]
    }
}

const page: NextPage = async () => {
    // const user = await getUserData();
    // console.log(user?.id);

    // const response = await fetchServer<ApiResponse>(`/leaderboard/detail/${user?.id}`);

    // if (!response.data) {
    //     return <div>An Error Occurred! Please Refresh: {response.error}</div>;
    // }

    // const data = response.data;

    return <LeaderboardTabs userData={DataData.data} />;
};

export default page;
