import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PlayerService]
})
export class HomeComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  filterByPosition: string = "allPositions"


  constructor(private router: Router, private playerService: PlayerService){}

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  goToProfilePage(clickedPlayer) {
  this.router.navigate(['player-profile', clickedPlayer.$key]);
};
  onChange(optionFromMenu) {
  this.filterByPosition = optionFromMenu;
  }
}
