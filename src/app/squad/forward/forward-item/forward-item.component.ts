import { Component, OnInit, Input } from '@angular/core';
import { SquadService } from 'src/app/service/squad.service';
import { Player } from 'src/app/model/player';

@Component({
  selector: 'app-forward-item',
  templateUrl: './forward-item.component.html',
  styleUrls: ['./forward-item.component.css']
})
export class ForwardItemComponent implements OnInit {

  @Input() player: Player;
  @Input() index: number;

  constructor(private squadService: SquadService) { }

  ngOnInit() {
  }

}
