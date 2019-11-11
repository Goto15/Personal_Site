import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RatingsApiService } from 'src/app/api-services/ratings-api.service';
import { Player} from '../../../classes/player';

@Component({
  selector: 'app-player-sheet',
  templateUrl: './player-sheet.component.html',
  styleUrls: ['./player-sheet.component.sass']
})
export class PlayerSheetComponent implements OnInit {

  @Input('playerCard') playerCard : Player;
  @Output() backToPL = new EventEmitter;

  Player: any = []

  constructor(
    public restApi: RatingsApiService
  ) { }

  ngOnInit() {
    this.loadPlayer()
  }

  //Go back to Player list
  back(){
    this.backToPL.emit(true);
  }

  //Get Player
  loadPlayer(){
    return this.restApi.getPlayer().subscribe((data: {}) => {
      this.Player = data;
    })
  }
}
