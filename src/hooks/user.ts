import { cookies } from "next/headers";
import { decode, JwtPayload } from "jsonwebtoken";
import { User } from "./interface";

export const getUserService = async () => {
  const token = cookies().get("token")?.value;

  if (!token) {
    return null;
  }

  const res = await fetch("http://localhost:8080/api/v1/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });

  console.log(res);

  const payload = decode(token) as JwtPayload;
  if (!payload) {
    return null;
  }

  const userData = payload.name?.split("<|>") || [];

  return { name: userData[0] as String, email: payload.email as String } as User;
};
