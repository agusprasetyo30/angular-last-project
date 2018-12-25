import { Component, OnInit } from '@angular/core';
import { SquadService } from 'src/app/service/squad.service';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-defender',
  templateUrl: './defender.component.html',
  styleUrls: ['./defender.component.css']
})
export class DefenderComponent implements OnInit {
  players: Player[];

  constructor(private squadService: SquadService) { }

  ngOnInit() {
    this.players = this.squadService.getDefender();
  }

}
