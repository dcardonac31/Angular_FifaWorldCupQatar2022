import { Component, OnInit } from '@angular/core';
import { MatchData } from '../../interfaces/match-response';
import { MatchesService } from '../../services/matches.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  dateMatch: Date = new Date();
  matches: MatchData[] = []

  constructor(private matchesService: MatchesService) { }

  ngOnInit(): void {
    this.getAllMatch();
  }

  getAllMatch() {
    this.matchesService.getAllMatch().subscribe({
      next: (response) =>{
        this.matches = response.data;
      },
      error: (error) => {
        this.matches = [];
        console.log(error);
      }
    }
    )
  }

  getMatchesByDate() {
    let dateTimeMatch = new Date(this.dateMatch.toString() + " 00:00");
    this.matchesService.getMatchesByDate(dateTimeMatch).subscribe({
      next: (response) =>{
        this.matches = response.data;
      },
      error: (error) => {
        this.matches = [];
        console.log(error);
      }
    }
    )
  }
}
