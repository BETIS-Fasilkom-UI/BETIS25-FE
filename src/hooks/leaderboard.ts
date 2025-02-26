import { redirect } from 'next/navigation';
import { useState, useEffect, useCallback, useRef } from 'react';
import { getUserData } from './user';

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
    const hasFetched = useRef(false);

    const fetchLeaderboard = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                redirect('/login');
            }

            const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/leaderboard`;
            const endpoint = id && id !== "0" ? `${baseUrl}/${id}` : baseUrl;
            const user = await getUserData();
            const userId = user?.id;
            const url = `${endpoint}?userid=${userId}`;
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const result = await response.json() as LeaderboardResponse;

            if (result.ok) {
                setLeaderboards(result.data.leaderboards ?? []);
                setLeaderboard(result.data.leaderboard ?? []);
                setCurrentUser(result.data.user ?? null);
            } else {
                setError('Failed to fetch leaderboard');
            }
        } catch (err) {
            console.error("Error fetching leaderboard:", err);
            setError('Failed to fetch leaderboard');
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        if (!hasFetched.current) {
            fetchLeaderboard();
            hasFetched.current = true;
        }
    }, [fetchLeaderboard]);

    return { leaderboard, leaderboards, currentUser, loading, error, refetch: fetchLeaderboard };
};

export default useLeaderboard;
