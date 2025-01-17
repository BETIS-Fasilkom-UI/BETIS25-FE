export interface GetSubmissionItemDataResponse {
  ok: boolean;
  message: string;
  data: SubmissionItem;
}

export interface SubmissionItem {
  id: string;
  submission_id: string;
  user_id: string;
  score: string;
  url: string;
  comment: string;
  created_at: string;
  updated_at: string;
}
