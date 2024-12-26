export interface Response {
    ok: boolean;
    message: string;
}

export interface LoginResponse extends Response {
    token: string;
}