import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchesTodayComponent } from './worldcup/pages/matches-today/matches-today.component';
import { MatchesComponent } from './worldcup/pages/matches/matches.component';
import { StandingComponent } from './worldcup/pages/standing/standing.component';
import { TeamsComponent } from './worldcup/pages/teams/teams.component';

const routes: Routes = [
  {
    path: '',
    component: MatchesTodayComponent,
    pathMatch: 'full'
  },
  {
    path: 'matches',
    component: MatchesComponent,
  },
  {
    path: 'teams',
    component: TeamsComponent,
  },
  {
    path: 'standing',
    component: StandingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
