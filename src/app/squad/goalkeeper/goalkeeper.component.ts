import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { SquadService } from 'src/app/service/squad.service';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-goalkeeper',
  templateUrl: './goalkeeper.component.html',
  styleUrls: ['./goalkeeper.component.css']
})
export class GoalkeeperComponent implements OnInit {
  players: Player[];

  constructor(private squadService: SquadService,
              private router: Router,
              private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.players = this.squadService.getGoalkeeper();
    // this.players
  }

  // getPlayer() {
  //   this.router.navigate(['/gk'], {relativeTo: this.activeRoute});
  // }

}
