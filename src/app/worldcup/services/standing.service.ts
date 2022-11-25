import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfiguration } from "read-appsettings-json";
import { StandingResponse } from '../interfaces/standing-response';

@Injectable({
  providedIn: 'root'
})
export class StandingService {

  private apiUrl = AppConfiguration.Setting().apiUrl;
  apiUrlStanding: string = this.apiUrl + '/standings/getStandings';
  apiUrlStandingByGroup: string = this.apiUrl + '/standings/getStandings/';

  constructor(private http: HttpClient) { }

  getStandingsByGroup(group: string) : Observable<StandingResponse> {
    return this.http.get<StandingResponse>(this.apiUrlStandingByGroup + group)
  }
}
