import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-profileinfo',
  templateUrl: './update-profileinfo.component.html',
  styleUrls: ['./update-profileinfo.component.css']
})
export class UpdateProfileinfoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {}

  updateInfoForm = this.fb.group({
    fullname: [
      '', [Validators.required, Validators.pattern('^[a-zA-Z ]{3,20}$')]],
    expertise: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required, Validators.pattern('^0[0-9]{9}$')]],
    skills: ['', [Validators.required, Validators.minLength(10)]],
    description: ['', [Validators.required]],
  });
}
