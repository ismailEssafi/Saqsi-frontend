import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css'],
})
export class ImgSliderComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  imageObject: Array<object> = [];
  ngOnInit() {
    console.log(this.data)
    this.data.pro_imgs.forEach((img: any) => {
      this.imageObject.push({ image: img.img, thumbImage: img.img });
    });
  }
}
