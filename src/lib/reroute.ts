'use client'

import { navData } from "@/components/layout/Navbar/const";
import { useEffect, useState } from "react";

export const useReroute = () => {
    useEffect(() => {
        const currentRoute = window.location.pathname;
        const isAvailable = navData.find((item) => item.href === currentRoute)?.isAvailable;
        if (!isAvailable) {
            window.location.href = '/';
        }
    })
}