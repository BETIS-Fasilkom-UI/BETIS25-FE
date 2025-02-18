import { cookies, headers } from "next/headers";
import { decode, JwtPayload } from "jsonwebtoken";
import { GetUserDataResponse, User, UserJWT } from "./interface";
import { deleteCookie } from "cookies-next";

export const getUserService = async () => {
  const token = (await cookies()).get("token")?.value;

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
    token: token,
  } as UserJWT;
};

export const getUserData = async () => {
  const token = (await cookies()).get("token")?.value;
  if (!token) {
    return null;
  }

  const API_URL = process.env.SERVER_URL;

  const user = decode(token) as JwtPayload;

  const response = await fetch(
    `${API_URL}user/email/${user?.email}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (response.status === 401) {
    return null;
  }

  if (!response.ok) {
    return null;
  } else {
    const data: GetUserDataResponse = await response.json();
    const userData = data.data;
    return {
      id: userData.id,
      fullname: userData.fullname,
      email: userData.email,
      phoneNumber: userData.phone_number,
      nickname: userData.nickname,
      address: userData.address,
      avatar: userData.avatar,
      date_of_birth: userData.date_of_birth,
      identity_card_url: userData.identity_card_url,
      study_method: userData.study_method,
      guardian_name: userData.guardian_name,
      guardian_relationship: userData.guardian_relationship,
      guardian_phone: userData.guardian_phone,
      guardian_document_url: userData.guardian_document_url,
      school_name: userData.school_name,
      grade: userData.grade,
      average_score: userData.average_score,
      report_card_url: userData.report_card_url,
      motivation_letter_url: userData.motivation_letter_url,
      commitment_statement_url: userData.commitment_statement_url,
      social_media_following_url: userData.social_media_following_url,
      twibbon_upload_url: userData.twibbon_upload_url,
      financial_need_letter_url: userData.financial_need_letter_url,
      electric_bill_document_url: userData.electric_bill_document_url,
      residence_photo_url: userData.residence_photo_url,
      affiliation_code: userData.affiliation_code,
      isVerified: userData.is_verified,
    } as User;
  }
};
