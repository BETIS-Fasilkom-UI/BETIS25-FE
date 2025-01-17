export interface GetSubmissionDataResponse {
  ok: boolean;
  message: string;
  data: Submission;
}

export interface Submission {
  id: string;
  course_section_id: string;
  title: string;
  description: string;
  opened_at: string;
  closed_at: string;
  cutoff_at: string;
}
