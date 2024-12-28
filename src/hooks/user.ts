import { cookies, headers } from "next/headers";
import { decode, JwtPayload } from "jsonwebtoken";
import { GetUserDataResponse, User, UserJWT } from "./interface";

export const getUserService = async () => {
  const token = cookies().get("token")?.value;
  if (!token) {
    return null;
  }

  const payload = decode(token) as JwtPayload;
  if (!payload) {
    return null;
  }

  const userData = payload.name?.split("<|>") || [];

  return {
    name: userData[0] as String,
    email: payload.email as String,
  } as UserJWT;
};

export const getUserData = async () => {
  const token = cookies().get("token")?.value;
  if (!token) {
    return null;
  }

  const user = decode(token) as JwtPayload;
  if (!user) {
    return null;
  }

  const response = await fetch(
    `http://localhost:3000/api/user/${user?.email}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    return null;
  } else {
    const data: GetUserDataResponse = await response.json();
    return {
      id: data.id,
      fullname: data.fullname,
      email: data.email,
      phoneNumber: data.phone_number,
      nickname: data.nickname,
    } as User;
  }
};
