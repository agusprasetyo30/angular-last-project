import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/service/history.service';
import { History } from 'src/app/model/history';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {

  constructor(private historyService: HistoryService) { }
  historyArray: History[];
  showDeleteMessage: Boolean;

  service() {
    return this.historyService;
  }

  ngOnInit() {
    this.historyService.getHistory().subscribe((list) => {
      this.historyArray = list.map((item) => {
        return {
          $key: item.key,
          ...item.payload.val() // Mengambil data sisa dan ditampung dan ditampilkan ke daftar
        };
      });
    });
  }

  onDelete($key) {
    if (confirm('Apakah kamu yakin ingin menghapus history ?')) {
      this.historyService.deleteHistory($key);
      this.showDeleteMessage = true;

      setTimeout(() => {
        this.showDeleteMessage = false;
      }, 3000);
    }
  }

}
