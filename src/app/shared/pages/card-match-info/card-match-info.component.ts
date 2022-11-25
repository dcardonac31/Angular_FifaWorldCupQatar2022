import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatchData } from 'src/app/worldcup/interfaces/match-response';

@Component({
  selector: 'app-card-match-info',
  templateUrl: './card-match-info.component.html',
  styleUrls: ['./card-match-info.component.css']
})
export class CardMatchInfoComponent {
  @Input() matchesData : MatchData[] = [];

}
