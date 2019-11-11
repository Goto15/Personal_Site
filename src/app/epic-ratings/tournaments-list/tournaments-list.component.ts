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
    //call api function to get tournament info and assign it to this.tournamentCard
    this.tournamentView = true;
    this.tournamentCard = tournament;
  }

  //Get the list of Tournaments
  loadAllTournaments(){
    return this.restAPI.getAllTournaments().subscribe((data: {}) => {
      this.TournamentsList = data;
    })
  }
}
