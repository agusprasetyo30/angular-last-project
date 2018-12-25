import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Player } from 'src/app/model/player';
import { SquadService } from 'src/app/service/squad.service';

@Component({
  selector: 'app-squad-detail',
  templateUrl: './squad-detail.component.html',
  styleUrls: ['./squad-detail.component.css']
})
export class SquadDetailComponent implements OnInit {
  player: Player;

  id: number;
  childrenPath: any;

  constructor(private route: ActivatedRoute, private squadService: SquadService) {
      this.childrenPath = route.pathFromRoot[2].snapshot.url[0].path;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // console.log(this.id);
      this.id = params['id'];
      console.log(this.id);

      if (this.childrenPath === 'gk') {
        this.player = this.squadService.getGoalkeeperProfile(this.id);
      } else if (this.childrenPath === 'def') {
        this.player = this.squadService.getDefenderProfile(this.id);
      } else if (this.childrenPath === 'mid') {
        this.player = this.squadService.getMidfielderProfile(this.id);
      } else {
        this.player = this.squadService.getForwardProfile(this.id);
      }

    });
  }
}
