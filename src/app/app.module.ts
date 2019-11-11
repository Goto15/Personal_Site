import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './header/title/title.component';
import { TournamentComponent } from './epic-ratings/tournaments-list/tournament/tournament.component';
import { PlayerSheetComponent } from './epic-ratings/players-list/player-sheet/player-sheet.component';
import { EpicRatingsComponent } from './epic-ratings/epic-ratings.component';
import { TournamentsListComponent } from './epic-ratings/tournaments-list/tournaments-list.component';
import { PlayersListComponent } from './epic-ratings/players-list/players-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    TitleComponent,
    TournamentComponent,
    PlayersListComponent,
    PlayerSheetComponent,
    EpicRatingsComponent,
    TournamentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
