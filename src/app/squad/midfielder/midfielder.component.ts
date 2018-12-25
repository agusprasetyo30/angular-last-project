import { Component, OnInit } from '@angular/core';
import { SquadService } from '../../service/squad.service';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-midfielder',
  templateUrl: './midfielder.component.html',
  styleUrls: ['./midfielder.component.css']
})
export class MidfielderComponent implements OnInit {
  players: Player[];

  constructor(private squadService: SquadService) { }

  ngOnInit() {
    this.players = this.squadService.getMidfielder();
  }

}
