import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Tropies } from '../model/tropies';

@Injectable({
  providedIn: 'root'
})
export class TropiesService {

  constructor(private firebase: AngularFireDatabase) {}

  tropiesList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    title: new FormControl('', Validators.required),
    champYear: new FormControl('', Validators.required),
    photo: new FormControl('', Validators.required)
  });

  getTropies() {
    this.tropiesList = this.firebase.list('tropies');
    return this.tropiesList.snapshotChanges();
  }

  insertTropies(tropies: Tropies) {
    console.log(tropies);
    this.tropiesList.push({
      title: tropies.title,
      champYear: tropies.champYear,
      photo: tropies.photo
    });
  }

  updateTropies(tropies) {
    this.tropiesList.update(tropies.$key, {
      title: tropies.title,
      champYear: tropies.champYear,
      photo: tropies.photo
    });
  }

  deleteTropies($key: string) {
    this.tropiesList.remove($key);
  }

  populateForm(tropies) {
    this.form.setValue(tropies);
  }

}
