import { Component, OnInit, Input } from '@angular/core';
import { Tropies } from '../../model/tropies';

@Component({
  selector: 'app-tropies-list',
  templateUrl: './tropies-list.component.html',
  styleUrls: ['./tropies-list.component.css']
})
export class TropiesListComponent implements OnInit {
  @Input() tropy: Tropies;

  constructor() { }

  ngOnInit() {
  }

}
