import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfiguration } from "read-appsettings-json";
import { MatchResponse } from '../interfaces/match-response';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  private apiUrl = AppConfiguration.Setting().apiUrl;
  apiUrlMatch: string = this.apiUrl + '/matches/getMatches';
  apiUrlMatchByDate: string = this.apiUrl + '/matches/getMatchesByDate/';

  constructor(private http: HttpClient) { }

  getAllMatch() : Observable<MatchResponse> {
    return this.http.get<MatchResponse>(this.apiUrlMatch)
  }

  getMatchesByDate(date: Date) : Observable<MatchResponse> {
    return this.http.get<MatchResponse>(this.apiUrlMatchByDate + date)
  }

  getMatchesToday() : Observable<MatchResponse> {
    const date = new Date();
    return this.http.get<MatchResponse>(this.apiUrlMatchByDate + date)
  }
}
