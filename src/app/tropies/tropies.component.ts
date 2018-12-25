import { Component, OnInit } from '@angular/core';
import { TropiesService } from '../service/tropies.service';
import { Tropies } from '../model/tropies';

@Component({
  selector: 'app-tropies',
  templateUrl: './tropies.component.html',
  styleUrls: ['./tropies.component.css']
})
export class TropiesComponent implements OnInit {

  constructor(private tropiesService: TropiesService) { }
  tropiesArray: Tropies[];

  ngOnInit() {
    this.tropiesService.getTropies().subscribe((list) => {
      this.tropiesArray = list.map((item) => {
        return {
          $key: item.key,
          ...item.payload.val() // Mengambil data sisa dan ditampung dan ditampilkan ke daftar
        };
      });
    });
  }

}
