import { Component, OnInit } from '@angular/core';
import { StandingData } from '../../interfaces/standing-response';
import { StandingService } from '../../services/standing.service';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.css']
})
export class StandingComponent implements OnInit {
  groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  standingData: StandingData[] = [];
  standingDataA: StandingData[] = [];
  standingDataB: StandingData[] = [];
  standingDataC: StandingData[] = [];
  standingDataD: StandingData[] = [];
  standingDataE: StandingData[] = [];
  standingDataF: StandingData[] = [];
  standingDataG: StandingData[] = [];
  standingDataH: StandingData[] = [];

  constructor(private standingService: StandingService) {}

  ngOnInit(): void {
    this.groups.forEach((group) => {
      this.getStandingByGroup(group);
    });   
  }

  getStandingByGroup(group: string) {
    this.standingService.getStandingsByGroup(group).subscribe({
      next: (response) =>{
        switch (group) {
          case 'A':
            this.standingDataA = response.data;
            break;
            case 'B':
            this.standingDataB = response.data;
            break;
            case 'C':
            this.standingDataC = response.data;
            break;
            case 'D':
            this.standingDataD = response.data;
            break;
            case 'E':
            this.standingDataE = response.data;
            break;
            case 'F':
            this.standingDataF = response.data;
            break;
            case 'G':
            this.standingDataG = response.data;
            break;
            case 'H':
            this.standingDataH = response.data;
            break;
          default:
            break;
        }
      },
      error: (error) => {
        console.log(error);
        this.standingData = [];
        return this.standingData;
      }
    });
  }

}
