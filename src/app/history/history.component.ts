import { Component, OnInit } from '@angular/core';
import { History } from '../model/history';
import { HistoryService } from '../service/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  historyArray: History[];

  constructor(private historyService: HistoryService) { }

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

}
