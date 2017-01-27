import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [PlayerService]
})
export class HomeComponent implements OnInit {
  players: Player[];

  constructor(private router: Router, private playerService: PlayerService){}

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  goToProfilePage(clickedPlayer: Player) {
  this.router.navigate(['player-profile', clickedPlayer.id]);
};
}
