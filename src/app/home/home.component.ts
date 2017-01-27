import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  players: Player[] = [
    new Player("Meyers Leonard", "Illinios", 11, "Forward", 1),
    new Player("Damian Lillard", "Utah", 0, "Guard", 2),
    new Player("Allen Crabbe", "California", 23, "Guard", 3)
  ];

  constructor(private router: Router){}

  ngOnInit() {
  }

  goToProfilePage(clickedPlayer: Player) {
  this.router.navigate(['player-profile', clickedPlayer.id]);
};
}
