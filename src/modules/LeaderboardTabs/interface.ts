export interface DetailScore {
    pu: number;
    ppu: number;
    pbm: number;
    pk: number;
    lbi: number;
    lbe: number;
    pm: number;
}

export interface Tryout {
    name: string;
    average_score: number;
    detail_score: DetailScore;
}

export interface DaftarQuiz {
    title: string;
    score: number;
}

export interface Nilai {
    daftar_quiz: DaftarQuiz[];
    average_score: number;
}

export interface Data {
    fullname: string;
    avatar: number;
    nilai_total: number;
    id: string;
    nilai: Nilai;
    tryout: Tryout[];
}

export interface ApiResponse {
    ok: boolean;
    message: string;
    data: Data;
}
