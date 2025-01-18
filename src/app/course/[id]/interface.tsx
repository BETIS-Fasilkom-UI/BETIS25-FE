export interface CourseDetailResponse {
    ok: boolean;
    message: string;
    data: CourseDetail;
  }
  
export interface CourseDetail {
    id: string;
    title: string;
    description: string;
    scrolls: Module[];
  }
  
export interface Module {
    id: string;
    title: string;
    description: string;
    sections: Section[];
  }
  
export interface Section {
    id: string;
    title: string;
    description: string;
    items: Item[];
  }
  
  type Item = Material | Submission | Quiz;
  
export interface Material {
    id: string;
    title: string;
    description: string;
    type: "material";
    url: string;
  }
  
export interface Submission {
    id: string;
    title: string;
    description: string;
    type: "submission";
    opened_at: string;
    closed_at: string;
    cutoff_at: string;
  }
  
export interface Quiz {
    id: string;
    title: string;
    description: string;
    type: "quiz";
    duration: number;
  }
  