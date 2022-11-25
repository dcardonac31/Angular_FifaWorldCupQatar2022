import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfiguration } from "read-appsettings-json";
import { TeamResponse } from '../interfaces/team-response';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private apiUrl = AppConfiguration.Setting().apiUrl;
  apiUrlTeam: string = this.apiUrl + '/teams/getTeams';

  constructor(private http: HttpClient) { }

  getAllTeams() : Observable<TeamResponse> {
    return this.http.get<TeamResponse>(this.apiUrlTeam)
  }
}
