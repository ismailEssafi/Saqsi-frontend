import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { ImgSliderComponent } from '../img-slider/img-slider.component'
import { UpdateProfileinfoComponent } from '../update-profileinfo/update-profileinfo.component';
import { EditProImgsComponent } from '../edit-pro-imgs/edit-pro-imgs.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() pro: any;
  constructor( private matDialog: MatDialog){}

  openImgSlider(){
    this.matDialog.open(ImgSliderComponent,{
      data: {
        pro_imgs: this.pro.professional.pro_imgs
      },
      width:'fit-content',
      height: 'fit-content',
    })
  }

  openUpdateProfileinfo(){
    let dialogRef = this.matDialog.open(UpdateProfileinfoComponent,{
      data: { pro : this.pro },
      width:'fit-content',
      height: 'fit-content',
    })
    dialogRef.afterClosed().subscribe(response => {
      this.pro.profile_img = response.imgUrl;
    })
  }

  openEditProImgs(){
    let dialogRef = this.matDialog.open(EditProImgsComponent,{
      data: {
        pro_imgs: this.pro.professional.pro_imgs
      },
      width:'fit-content',
      height: 'fit-content',
    })

    dialogRef.afterClosed().subscribe(response => {
      this.pro.professional.pro_imgs = response.pro_imgs;
    })
  }
}
