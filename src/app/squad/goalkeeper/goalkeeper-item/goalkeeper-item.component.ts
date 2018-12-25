import { Component, OnInit, Input } from '@angular/core';
import { SquadService } from 'src/app/service/squad.service';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-goalkeeper-item',
  templateUrl: './goalkeeper-item.component.html',
  styleUrls: ['./goalkeeper-item.component.css']
})
export class GoalkeeperItemComponent implements OnInit {
  @Input() player: Player;
  @Input() index: number;

  constructor(private squadService: SquadService) { }

  ngOnInit() {
  }

}
