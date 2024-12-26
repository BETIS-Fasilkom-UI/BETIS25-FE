export interface Response {
    ok: boolean;
    message: string;
}

export interface LoginResponse extends Response {
    token: string;
}

export interface User {
    name: string;
    email: string;
    // nanti nambah <3
}