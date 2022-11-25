import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { CardMatchInfoComponent } from './pages/card-match-info/card-match-info.component';
import { StandingsTableComponent } from './pages/standings-table/standings-table.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CardMatchInfoComponent,
    StandingsTableComponent
  ],
  exports: [
    NavbarComponent,
    CardMatchInfoComponent,
    StandingsTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
