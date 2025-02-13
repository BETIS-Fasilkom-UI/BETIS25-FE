import Leaderboard from '@/modules/LeaderboardAllModule'
import React from 'react'
import { NextPage } from 'next'

const page: NextPage<{
  params: Promise<{ id: string }>;
}> = async ({ params }) => {

  const paramsReady = await params;

  return <Leaderboard id = {paramsReady.id} />;
};

export default page;