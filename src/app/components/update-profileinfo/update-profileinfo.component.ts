import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, FormArray  } from '@angular/forms';


@Component({
  selector: 'app-update-profileinfo',
  templateUrl: './update-profileinfo.component.html',
  styleUrls: ['./update-profileinfo.component.css']
})
export class UpdateProfileinfoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {}
  ngOnInit() {
    console.log(this.data);
  }
  updateInfoForm = this.fb.group({
    fullname: [this.data.pro.fullname, [Validators.required, Validators.pattern('^[a-zA-Z ]{3,20}$')]],
    expertise: [this.data.pro.professional.profession, [Validators.required]],
    phoneNumber: [this.data.pro.phoneNumber, [Validators.required, Validators.pattern('^0[0-9]{9}$')]],
    skills: this.fb.array([this.data.pro.professional.pro_skills, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]]),
    description: [this.data.pro.professional.description, [Validators.required]],
  });
  get fullname() {
    return this.updateInfoForm.get('fullname');
  }
  get expertise() {
    return this.updateInfoForm.get('expertise');
  }
  get phoneNumber() {
    return this.updateInfoForm.get('phoneNumber');
  }
  get description() {
    return this.updateInfoForm.get('description');
  }
  get skills(): FormArray {
    return this.updateInfoForm.get('skills') as FormArray;
  }
  addSkillItem() {
    this.skills.push(this.fb.control(''));
  }

  removeSkillItem(index: number) {
    this.skills.removeAt(index);
  }
}
