import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';




@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css'],
  providers: [PlayerService]
})
export class PlayerProfileComponent implements OnInit {
  playerId: string;
  playerToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private playerService: PlayerService){ }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.playerId = urlParametersArray['id'];
    });
    this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
  }

}
