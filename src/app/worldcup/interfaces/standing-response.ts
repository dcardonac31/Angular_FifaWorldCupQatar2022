export interface StandingResponse {
    status: string;
    data:   StandingData[];
}

export interface StandingData {
    _id:   string;
    group: string;
    teams: StandingDataTeam[];
}

export interface StandingDataTeam {
    team_id: string;
    mp:      string;
    w:       string;
    l:       string;
    pts:     string;
    gf:      string;
    ga:      string;
    gd:      string;
    d:       string;
    name_fa: string;
    name_en: string;
    flag:    string;
}