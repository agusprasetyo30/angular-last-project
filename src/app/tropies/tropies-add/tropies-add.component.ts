import { Component, OnInit } from '@angular/core';
import { TropiesService } from 'src/app/service/tropies.service';

@Component({
  selector: 'app-tropies-add',
  templateUrl: './tropies-add.component.html',
  styleUrls: ['./tropies-add.component.css']
})
export class TropiesAddComponent implements OnInit {
  constructor(private tropiesService: TropiesService) {}

  submitted: boolean;
  showSuccessMessage: boolean;

  formControls = this.tropiesService.form.controls;

  service() {
    return this.tropiesService.form;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.tropiesService.form.valid) {
      if (this.tropiesService.form.get('$key').value == null) {
        this.tropiesService.insertTropies(this.tropiesService.form.value);
      } else {
        this.tropiesService.updateTropies(this.tropiesService.form.value);
      }

      this.showSuccessMessage = true;

      setTimeout(() => { // Mengatur waktu ketika message muncul
        this.showSuccessMessage = false;
      }, 3000);

      this.tropiesService.form.reset();
      this.submitted = false;
    }
  }

}
