import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatchesComponent } from './pages/matches/matches.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { StandingComponent } from './pages/standing/standing.component';
import { MatchesTodayComponent } from './pages/matches-today/matches-today.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MatchesComponent,
    TeamsComponent,
    StandingComponent,
    MatchesTodayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class WorldcupModule { }
