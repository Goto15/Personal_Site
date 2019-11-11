import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RatingsApiService } from '../../../api-services/ratings-api.service';
import { Tournament } from 'src/app/classes/tournament';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.sass']
})
export class TournamentComponent implements OnInit {

  @Input('tournamentCard') tournamentCard: Tournament;
  @Output() backToTL = new EventEmitter;

  Tournament: any = [];

  constructor(
    public restApi: RatingsApiService
  ) { }

  ngOnInit() { 
    this.loadTournament(this.tournamentCard);
    console.log(this.tournamentCard)
   }

   //Back to Tournament List
   back(){
     console.log(this.tournamentCard);
    this.backToTL.emit(true);
   }

  //Gets the selected tournament 
  loadTournament(tournament){
    return this.restApi.getTournament(tournament).subscribe((data: {}) => {
      this.Tournament = data
      console.log(data)
    })
  }
}
