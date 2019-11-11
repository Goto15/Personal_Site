import { Component, OnInit } from '@angular/core';
import { RatingsApiService } from 'src/app/api-services/ratings-api.service';

@Component({
  selector: 'app-tournaments-list',
  templateUrl: './tournaments-list.component.html',
  styleUrls: ['./tournaments-list.component.sass']
})
export class TournamentsListComponent implements OnInit {

  tournamentCard: any;
  TournamentsList: any = [];
  tournamentView: boolean = false;

  constructor(
    public restAPI: RatingsApiService
    ) {}

  ngOnInit() {
    this.loadAllTournaments()
  }

  backToTL(back: boolean){
    this.tournamentView = false;
  }

  goToTournamentCard(tournament){
    this.tournamentView = true;
    this.tournamentCard = tournament;
    console.log(tournament);
  }

  //Get the list of Tournaments
  loadAllTournaments(){
    return this.restAPI.getAllTournaments().subscribe((data: {}) => {
      this.TournamentsList = data;
    })
  }
}
