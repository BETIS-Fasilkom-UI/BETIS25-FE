import PPKBModule from '@/modules/WebinarPPKBHeroModule';
import { redirect } from 'next/navigation';
import React from 'react';

const page = () => {
  redirect('/');
  return <PPKBModule />;
};

export default page;
