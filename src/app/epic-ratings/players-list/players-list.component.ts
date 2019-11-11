import { Component, OnInit } from '@angular/core';
import { RatingsApiService } from 'src/app/api-services/ratings-api.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.sass']
})
export class PlayersListComponent implements OnInit {

  playerCard: any;
  PlayersList: any = [];
  playerView: boolean = false;
  
  constructor(
    public restApi: RatingsApiService
  ) { }

  ngOnInit() {
    this.loadAllPlayers()
  }
  
  backToPL(back: boolean){
    this.playerView = false;
  }

  goToPlayerCard(player){
    this.playerView = true;
    this.playerCard = player;
  }

  //Get the list of Players
  loadAllPlayers(){
    return this.restApi.getAllPlayers().subscribe((data: {}) => {
      this.PlayersList = data;
    })
  }
}
