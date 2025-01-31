import { string } from "zod";

export interface Response {
  ok: boolean;
  message: string;
}

export interface LoginResponse extends Response {
  token: string;
}
export interface GetUserDataResponse extends Response {
  data: {
    id: string;
    fullname: string;
    email: string;
    phone_number: string;
    nickname: string;
    address: string;
    avatar: number;
    identity_card_url: string;
    study_method: string;
    date_of_birth: string;
    guardian_name: string;
    guardian_relationship: string;
    guardian_phone: string;
    guardian_document_url: string;
    school_name: string;
    grade: string;
    average_score: number;
    report_card_url: string;
    motivation_letter_url: string;
    commitment_statement_url: string;
    social_media_following_url: string;
    twibbon_upload_url: string;
    financial_need_letter_url: string;
    electric_bill_document_url: string;
    residence_photo_url: string;
    affiliation_code: string;
    is_verified: boolean;
  };
}

export interface UserJWT {
  name: string;
  email: string;
  token: string;
}

export interface User {
  id: string;
  fullname: string;
  email: string;
  phoneNumber: string;
  nickname: string;
  address: string;
  avatar: number;
  date_of_birth: string;
  identity_card_url: string;
  study_method: string;
  guardian_name: string;
  guardian_relationship: string;
  guardian_phone: string;
  guardian_document_url: string;
  school_name: string;
  grade: string;
  average_score: number;
  report_card_url: string;
  motivation_letter_url: string;
  commitment_statement_url: string;
  social_media_following_url: string;
  twibbon_upload_url: string;
  financial_need_letter_url: string;
  electric_bill_document_url: string;
  residence_photo_url: string;
  affiliation_code: string;
  isVerified: boolean;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: string;
}