"use client"

import { useState, useEffect, useCallback } from "react"
import { mockLeaderboardData } from "./mock-data"

interface LeaderboardEntry {
  id: string
  rank: number
  avatar: number
  fullname: string
  school_name: string
  average_score: number
}

interface Leaderboard {
  id: string
  title: string
}

interface LeaderboardResponse {
  ok: boolean
  message: string
  data: {
    user: LeaderboardEntry | null
    leaderboard: LeaderboardEntry[]
    leaderboards: Leaderboard[]
  }
}

export default function useLeaderboard(id: string) {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([])
  const [leaderboards, setLeaderboards] = useState<Leaderboard[]>([])
  const [currentUser, setCurrentUser] = useState<LeaderboardEntry | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchLeaderboard = useCallback(async () => {
    setLoading(true)
    setError(null)

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const result = mockLeaderboardData
      setLeaderboard(result.data.leaderboard)
      setLeaderboards(result.data.leaderboards)
      setCurrentUser(result.data.user)
    } catch (err) {
      setError("Failed to fetch leaderboard")
    } finally {
      setLoading(false)
    }
  }, [id])

  // Fetch leaderboard on mount and when `id` changes
  useEffect(() => {
    fetchLeaderboard()
  }, [fetchLeaderboard])

  return { leaderboard, leaderboards, currentUser, loading, error, refetch: fetchLeaderboard }
}
