import { Component, OnInit } from '@angular/core';
import { TeamData } from '../../interfaces/team-response';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  teamsData: TeamData[] = [];

  constructor(private teamsService: TeamsService) {
    this.getAllTeams();    
  }

  getAllTeams() {
    this.teamsService.getAllTeams().subscribe({
      next: (response) =>{
        this.teamsData = response.data;
      },
      error: (error) => {
        this.teamsData = [];
        console.log(error);
      }
    }
    )
  }

}
