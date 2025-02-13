import { redirect } from 'next/navigation';
import { useState, useEffect } from 'react';
const avatarOptions = [
    "/Pp-girl1.png",
    "/Pp-girl2.png",
    "/Pp-boy1.png",
    "/Pp-boy2.png",
  ];

interface LeaderboardEntry {
    id: string;
    rank: number;
    avatar: number;
    fullname: string;
    school_name: string;
    average_score: number;
}

interface LeaderboardResponse {
    ok: boolean;
    message: string;
    data: {
        user: LeaderboardEntry | null;
        leaderboard: LeaderboardEntry[];
    };
}

interface Leaderboard {
    id: string;
    name: string;
}

interface AvailableLeaderboard {
    ok: boolean;
    message: string;
    data: {
        leaderboards: Leaderboard[];
    };
}

const useAvailableLeaderboards = () => {
    const [leaderboards, setLeaderboards] = useState<AvailableLeaderboard[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLeaderboards = async () => {
            try {
                const API_URL = process.env.NEXT_PUBLIC_API_URL;
                const token = localStorage.getItem('token');
                if (!token) {
                    redirect('/login');
                }
                const response = await fetch(`${API_URL}leaderboard/list`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const result: AvailableLeaderboard[] = await response.json();

                setLeaderboards(result);
            } catch (err) {
                setError('Failed to fetch leaderboards');
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboards();
    }, []);

    return { leaderboards, loading, error };
}

const useLeaderboard = (id: string) => {
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
    const [currentUser, setCurrentUser] = useState<LeaderboardEntry | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const API_URL = process.env.NEXT_PUBLIC_API_URL;
                const token = localStorage.getItem('token');
                if (!token) {
                    redirect('/login');
                }
                const response = await fetch(`${API_URL}leaderboard/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const result: LeaderboardResponse = await response.json();

                if (result.ok) {
                    const topTen = result.data.leaderboard.slice(0, 10);
                    const loggedInUser = result.data.user;

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
        };

        fetchLeaderboard();
    }, [id]);

    return { leaderboard, currentUser, loading, error };
};

export default useLeaderboard;
export { useAvailableLeaderboards };