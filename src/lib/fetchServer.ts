import { cookies } from "next/headers";
import { fetchDataResponse } from "./fetchClient";

export async function fetchDataServer<T>(endpoint: string, options?: RequestInit): Promise<fetchDataResponse<T>> {
    const token = cookies().get("token")?.value;

    if (!token) {
        console.log("Token not found");
    }


    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    // Remove trailing and beginning slash from endpoint
    endpoint = endpoint.replace(/^\/|\/$/g, "");
    
    try {
        const response = await fetch(`${API_URL}${endpoint}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: T = await response.json();
        return {
            ok: response.ok,
            status: response.status,
            data: data,
            message: null
        };
    } catch (error) {
        console.error('Fetch error:', error);

        return {
            ok: false,
            status: 500,
            data: null,
            message: (error as Error).message
        };
    }
}