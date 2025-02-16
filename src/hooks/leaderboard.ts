import { redirect } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { getUserData } from "@/hooks/user";
import { mockLeaderboardData } from "@/modules/LeaderboardAllModule/mock-data";
import { mockLeaderboardUpdated } from "@/modules/LeaderboardAllModule/mock-data-update";

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
    const result: LeaderboardResponse = mockLeaderboardData;
    const [leaderboards, setLeaderboards] = useState<Leaderboard[]>(result.data.leaderboards);
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(result.data.leaderboard);
    const [currentUser, setCurrentUser] = useState<LeaderboardEntry | null>(result.data.user);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const hasFetched = useRef(false);

    const fetchLeaderboard = async () => {
        setLoading(true);
        setError(null);
        const result: LeaderboardResponse = mockLeaderboardUpdated;
        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL;
            const token = localStorage.getItem('token');
            const userId = "5b7394f0-98f0-4e0f-9910-de6cf90e8310";
            if (!token) {
                redirect('/login');
            }
            console.log(token);
            id = id === "0" ? "" : id;
            console.log(`${API_URL}leaderboard/${id}?userid=${userId}`);
            console.log("Fetched data:", result);
            if (result.ok) {
                setLeaderboards(result.data.leaderboards);
                setLeaderboard(result.data.leaderboard);
                setCurrentUser(result.data.user);
            } else {
                setError('Failed to fetch leaderboard');
            }
        } catch (err) {
            console.error("Error fetching leaderboard:", err);
            setError('Failed to fetch leaderboard');
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        if (!hasFetched.current) {
            (async () => {
                await fetchLeaderboard();
            })();
            hasFetched.current = true;
        }
    }, [id]);

    useEffect(() => {
        console.log("Updated leaderboard state:", leaderboard);
    }, [leaderboard]);

    return { leaderboard, leaderboards, currentUser, loading, error, refetch: fetchLeaderboard };
};

export default useLeaderboard;
