import { Component, OnInit, Input } from '@angular/core';
import { SquadService } from 'src/app/service/squad.service';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-defender-item',
  templateUrl: './defender-item.component.html',
  styleUrls: ['./defender-item.component.css']
})
export class DefenderItemComponent implements OnInit {
  @Input() player: Player;
  @Input() index: Number;

  constructor(private squadService: SquadService) { }

  ngOnInit() {
  }

}
