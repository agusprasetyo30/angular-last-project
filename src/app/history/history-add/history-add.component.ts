import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/service/history.service';

@Component({
  selector: 'app-history-add',
  templateUrl: './history-add.component.html',
  styleUrls: ['./history-add.component.css']
})
export class HistoryAddComponent implements OnInit {
  constructor(private historyService: HistoryService) {}
  submitted: boolean;
  showSuccessMessage: boolean;

  formControls = this.historyService.form.controls;

  service() {
    return this.historyService.form;
  }

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    if (this.historyService.form.valid) {
      if (this.historyService.form.get('$key').value == null) {
        this.historyService.insertHistory(this.historyService.form.value);
      } else {
        this.historyService.updateHistory(this.historyService.form.value);
      }

      this.showSuccessMessage = true;

      setTimeout(() => { // Mengatur waktu ketika message muncul
        this.showSuccessMessage = false;
      }, 3000);

      this.historyService.form.reset();
      this.submitted = false;
    }
  }
}
