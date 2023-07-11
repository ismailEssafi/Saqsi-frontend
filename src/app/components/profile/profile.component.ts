import { Component, Input } from '@angular/core';
import { ImgSliderComponent } from '../img-slider/img-slider.component'
import { MatDialog } from '@angular/material/dialog'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() pro: any;
  constructor( private matDialog: MatDialog){}

  openDialog(){
    this.matDialog.open(ImgSliderComponent,{
      data: {
        pro_imgs: this.pro.professional.pro_imgs
      },
      width:'fit-content',
      height: 'fit-content',
    })
  }
}
