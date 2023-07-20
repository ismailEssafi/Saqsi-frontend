import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-pro-imgs',
  templateUrl: './edit-pro-imgs.component.html',
  styleUrls: ['./edit-pro-imgs.component.css']
})
export class EditProImgsComponent implements OnInit{
  
 proImgs : any[] = [];
 constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
 ngOnInit(){
  console.log("🚀 ~ file: edit-pro-imgs.component.ts:15 ~ EditProImgsComponent ~ ngOnInit ~ this.data.pro_imgs:", this.data.pro_imgs[0])
  this.proImgs = this.data.pro_imgs;
 }
}
