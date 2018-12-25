import { Component, OnInit, Input } from '@angular/core';
import { SquadService } from 'src/app/service/squad.service';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-midfielder-item',
  templateUrl: './midfielder-item.component.html',
  styleUrls: ['./midfielder-item.component.css']
})
export class MidfielderItemComponent implements OnInit {
  @Input() player: Player;
  @Input() index: number;

  constructor(private squadService: SquadService) { }

  ngOnInit() {
  }

}
