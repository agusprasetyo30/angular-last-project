import { Component, OnInit } from '@angular/core';
import { SquadService } from 'src/app/service/squad.service';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-forward',
  templateUrl: './forward.component.html',
  styleUrls: ['./forward.component.css']
})
export class ForwardComponent implements OnInit {

  players: Player[];

  constructor(private squadService: SquadService) { }

  ngOnInit() {
    this.players = this.squadService.getForward();
  }

}
