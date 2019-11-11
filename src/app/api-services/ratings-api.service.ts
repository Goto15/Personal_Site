import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Player } from '../classes/player';
import { Tournament } from '../classes/tournament';
import { Observable, throwError } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RatingsApiService {

  playersListURL = 'https://ecg-ratings.herokuapp.com/api/players';
  playerURL = this.playersListURL;

  tournamentsListURL = 'https://ecg-ratings.herokuapp.com/api/tournaments/';
  baseTournamentURL = 'https://ecg-ratings.herokuapp.com/api/tournaments/';

  constructor(private http: HttpClient) { }

  //Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //HttpClient API get() => fetches all tournaments
  getAllTournaments(): Observable<any>{
    return this.http.get<any>(this.tournamentsListURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  //HttpClient API get() => fetch tournament
  getTournament(tournament): Observable<Tournament>{
    const tournamentURL = this.baseTournamentURL + tournament.Name.replace(/ /g, '-')
    return this.http.get<Tournament>(tournamentURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  //HttpClient API get() => all players
  getAllPlayers(): Observable<any>{
    return this.http.get<any>(this.playersListURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  //HttpClient API get() => fetch a player
  getPlayer(): Observable<Player>{
    return this.http.get<any>(this.playerURL)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  //Error Handling
  handleError(error){
    console.log(error)
    let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       console.log(JSON.stringify(error))
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
     return throwError(errorMessage);
  }
}
