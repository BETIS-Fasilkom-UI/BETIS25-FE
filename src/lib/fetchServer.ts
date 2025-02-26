import { ApiResponse } from "@/hooks/interface";
import { cookies } from "next/headers";

export default async function fetchServer<T>(endpoint: string, init?: RequestInit): Promise<ApiResponse<T | null>> {
    const token = (await cookies()).get("token")?.value;

    // Remove leading slash
    const cleanedEndpoint = endpoint.replace(/^\//, '');

    const API_URL = process.env.SERVER_URL;

    try {
        const response = await fetch(`${API_URL}${cleanedEndpoint}`, {
            ...init,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            }
        });

        const responseBody: ApiResponse<T> = await response.json();

        return responseBody;
    }

    catch (error) {
        return {
            error: (error as Error).message,
            message: 'An error occurred',
            ok: false,
            data: null
        }
    }
}