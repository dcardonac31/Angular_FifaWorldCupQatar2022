import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatchesService } from '../../services/matches.service';
import { MatchData } from '../../interfaces/match-response';

@Component({
  selector: 'app-matches-today',
  templateUrl: './matches-today.component.html',
  styleUrls: ['./matches-today.component.css']
})
export class MatchesTodayComponent implements OnInit {
  today = new Date();
  datepipe: DatePipe = new DatePipe('en-US');
  formattedDate = this.datepipe.transform(this.today, 'YYYY-MM-dd')
  matchesToday: MatchData[] = []

  constructor(private matchesService: MatchesService) { }

  ngOnInit(): void {
      this.getMatchesToday();
  }

  getMatchesToday() {
    this.matchesService.getMatchesToday().subscribe({
      next: (response) =>{
        this.matchesToday = response.data;
      },
      error: (error) => {
        this.matchesToday = [];
        console.log(error);
      }
    }
    )
  }


}
