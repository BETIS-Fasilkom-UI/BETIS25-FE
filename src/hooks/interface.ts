import { string } from "zod";

export interface Response {
    ok: boolean;
    message: string;
}

export interface LoginResponse extends Response {
    token: string;
}

export interface GetUserDataResponse extends Response {
    id: string;
    fullname: string;
    email: string;
    phone_number: string;
    nickname: string;
}

export interface UserJWT {
    name: string;
    email: string;
    // nanti nambah <3
}

export interface User {
    id: string;
    fullname: string;
    email: string;
    phoneNumber: string;
    nickname: string;
}