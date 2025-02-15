import { redirect } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import { getUserData } from "@/hooks/user";
import { mockLeaderboardData } from "@/modules/LeaderboardAllModule/mock-data";

interface LeaderboardEntry {
    id: string;
    rank: number;
    avatar: number;
    full_name: string;
    school_name: string;
    average_score: number;
}

interface LeaderboardResponse {
    ok: boolean;
    message: string;
    data: {
        user: LeaderboardEntry | null;
        leaderboard: LeaderboardEntry[];
        leaderboards: Leaderboard[];
    };
}

interface Leaderboard {
    id: string;
    title: string;
}

const useLeaderboard = (id: string) => {
    const [leaderboards, setLeaderboards] = useState<Leaderboard[]>([]);
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [currentUser, setCurrentUser] = useState<LeaderboardEntry | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchLeaderboard = useCallback(async () => {
        setLoading(true)
        setError(null)

        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL;
            const token = localStorage.getItem('token');
            //const user = await getUserData();
            //const userId = user?.id;
            const userId = "5b7394f0-98f0-4e0f-9910-de6cf90e8310";
            if (!token) {
                redirect('/login');
            }
            console.log(`${API_URL}leaderboard/${id}?userid=${userId}`);
            /* const response = await fetch(`${API_URL}leaderboard/${id}?userid=${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }); */
            const result: LeaderboardResponse = mockLeaderboardData;

            if (result.ok) {
                const topTen = result.data.leaderboard;
                const loggedInUser = result.data.user;
                const leaderboards = result.data.leaderboards;
                setLeaderboards(leaderboards);
                setLeaderboard(topTen);
                setCurrentUser(loggedInUser);
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError('Failed to fetch leaderboard');
        } finally {
            setLoading(false);
        }
    }, [id])
    
    useEffect(() => {
        fetchLeaderboard()
      }, [fetchLeaderboard])

    return { leaderboard, leaderboards, currentUser, loading, error, refetch: fetchLeaderboard };
};

export default useLeaderboard;