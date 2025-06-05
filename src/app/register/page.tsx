import { getUserData } from '@/hooks/user';
import RegisterModule from '@/modules/RegisterModule';
import { redirect } from 'next/navigation';
import React from 'react';

const RegisterPage = async () => {
  const user = await getUserData();
  if (user) {
    redirect('/');
  }
  return <RegisterModule />;
};

export default RegisterPage;
