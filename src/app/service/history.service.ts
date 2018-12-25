import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private firebase: AngularFireDatabase) {}

  historyList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  });

  getHistory() {
    this.historyList = this.firebase.list('history');
    return this.historyList.snapshotChanges();
  }

  insertHistory(history) {
    this.historyList.push({
      title: history.title,
      content: history.content
    });
  }

  updateHistory(history) {
    this.historyList.update(history.$key, {
      title: history.title,
      content: history.content
    });
  }

  deleteHistory($key: string) {
    this.historyList.remove($key);
  }

  populateForm(history) {
    this.form.setValue(history);
  }
}
