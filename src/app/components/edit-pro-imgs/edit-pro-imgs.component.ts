import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-edit-pro-imgs',
  templateUrl: './edit-pro-imgs.component.html',
  styleUrls: ['./edit-pro-imgs.component.css'],
})
export class EditProImgsComponent implements OnInit {
  proImgs: any[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditProImgsComponent>,
    private imagesService: ImagesService
  ) {}
  ngOnInit() {
    this.proImgs = this.data.pro_imgs;
  }

  deleteImg(imgId: string) {
    this.imagesService.deleteImg(imgId).subscribe((response) => {
      if (response.status === 202) {
        this.proImgs = this.proImgs.filter((img) => {
          return img.id != Number(imgId);
        });
      }
    });
  }
}
