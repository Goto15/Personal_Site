import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentsListComponent } from './epic-ratings/tournaments-list/tournaments-list.component';
import { PlayersListComponent } from './epic-ratings/players-list/players-list.component';
import { EpicRatingsComponent } from './epic-ratings/epic-ratings.component';

const routes: Routes = [
  { path: 'Epic', component: EpicRatingsComponent},
  { path: 'Epic/tournaments', component: TournamentsListComponent },
  { path: 'Epic/players', component: PlayersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
