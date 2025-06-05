'use client';

import { navData } from '@/components/layout/Navbar/const';
import { useEffect, useState } from 'react';

export const useReroute = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const currentRoute = window.location.pathname;
    const isAvailable = navData.find(
      (item) => item.href === currentRoute
    )?.isAvailable;
    const isDebugMode = process.env.NEXT_PUBLIC_IS_DEVELOPMENT === 'true';

    if (!isAvailable && !isDebugMode) {
      window.location.href = '/';
    }

    setIsLoading(false);
  });

  return [isLoading, setIsLoading];
};
