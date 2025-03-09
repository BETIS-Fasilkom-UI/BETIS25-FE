import { getUserData } from '@/hooks/user';
import ProfileModule from '@/modules/ProfileModule';
import { redirect } from 'next/navigation';
import React from 'react';

const ProfilePage = async () => {
  const user = await getUserData();
  if (!user) {
    redirect('/login');
  }
  return <ProfileModule user={user} />;
};

export default ProfilePage;
