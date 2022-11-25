export interface TeamResponse {
    status: string;
    data:   TeamData[];
}

export interface TeamData {
    _id:       string;
    name_en:   string;
    name_fa:   string;
    flag:      string;
    fifa_code: string;
    iso2:      string;
    groups:    string;
    id:        string;
}
