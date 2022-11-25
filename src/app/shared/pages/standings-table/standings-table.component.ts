import { Component, Input } from '@angular/core';
import { StandingData } from 'src/app/worldcup/interfaces/standing-response';

@Component({
  selector: 'app-standings-table',
  templateUrl: './standings-table.component.html',
  styleUrls: ['./standings-table.component.css']
})
export class StandingsTableComponent {
  @Input() standingData: StandingData[] = [];

}
