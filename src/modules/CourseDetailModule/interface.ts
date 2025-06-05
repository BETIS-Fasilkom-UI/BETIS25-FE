export interface CourseDetailResponse {
  ok: boolean;
  message: string;
  data: CourseDetail;
}

export interface CourseDetail {
  id: string;
  title: string;
  description: string;
  scrolls: Scroll[] | null;
}

export interface Scroll {
  id: string;
  title: string;
  description: string;
  sections: Section[] | null;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  items: Item[] | null;
}

export interface Item {
  closed_at: string;
  cutoff_at: string;
  description: string;
  duration: number;
  id: string;
  opened_at: string;
  title: string;
  tryout_id: string;
  type: string;
  url: string;
}

export interface Material {
  id: string;
  title: string;
  description: string;
  type: 'material';
  url: string;
}

export interface Submission {
  id: string;
  title: string;
  description: string;
  type: 'submission';
  opened_at: string;
  closed_at: string;
  cutoff_at: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  type: 'quiz';
  duration: number;
}
