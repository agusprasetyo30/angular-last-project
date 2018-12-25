import { Component, OnInit } from '@angular/core';
import { TropiesService } from 'src/app/service/tropies.service';
import { Tropies } from '../../model/tropies';

@Component({
  selector: 'app-tropies-list-add',
  templateUrl: './tropies-list-add.component.html',
  styleUrls: ['./tropies-list-add.component.css']
})
export class TropiesListAddComponent implements OnInit {
  constructor(private tropiesService: TropiesService) {}
  tropiesArray: Tropies[];
  showDeleteMessage: Boolean;

  service() {
    return this.tropiesService;
  }

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

  onDelete($key) {
    if (confirm('Apakah kamu yakin ingin menghapus tropies ?')) {
      this.tropiesService.deleteTropies($key);
      this.showDeleteMessage = true;

      setTimeout(() => {
        this.showDeleteMessage = false;
      }, 3000);
    }
  }
}
