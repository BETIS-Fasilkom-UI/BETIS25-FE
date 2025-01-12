export interface CourseDetailResponse {
    ok: boolean;
    message: string;
    data: CourseDetail;
  }
  
  interface CourseDetail {
    id: string;
    title: string;
    description: string;
    scrolls: Module[];
  }
  
  interface Module {
    id: string;
    title: string;
    description: string;
    sections: Section[];
  }
  
  interface Section {
    id: string;
    title: string;
    description: string;
    items: Item[];
  }
  
  type Item = Material | Submission | Quiz;
  
  interface Material {
    id: string;
    title: string;
    description: string;
    type: "material";
    url: string;
  }
  
  interface Submission {
    id: string;
    title: string;
    description: string;
    type: "submission";
    opened_at: string;
    closed_at: string;
    cutoff_at: string;
  }
  
  interface Quiz {
    id: string;
    title: string;
    description: string;
    type: "quiz";
    duration: number;
  }
  