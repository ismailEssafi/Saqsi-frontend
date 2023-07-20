import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-upload-profile-img',
  templateUrl: './upload-profile-img.component.html',
  styleUrls: ['./upload-profile-img.component.css'],
})
export class UploadProfileImgComponent implements OnInit {
  loading: boolean = false;
  file: any = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<UploadProfileImgComponent>,
    private imagesService: ImagesService
  ) {}

  ngOnInit(): void {}

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onUpload() {
    this.loading = !this.loading;
    this.imagesService.upload(this.file).subscribe((response: any) => {
      if (response.status === 201) {
        this.dialogRef.close({ imgUrl: response.body.imgUrl })
      }
    });
  }
}
