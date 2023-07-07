import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.css'],
})
export class RatingStarsComponent {
  @Input() rating: number = 0;

iconClass = ['fa fa-star-o', 'fa fa-star-half-o', 'fa fa-star']

stars: number[] = [0, 0, 0, 0, 0];

ngOnChanges(){
  this.fillStars();
}


fillStars(){
  // var starsToFill = Math.round(this.rating * 2)/2; //round to nearest 0.5
  let int = Math.trunc(this.rating)
  let dec = this.rating % 1.0
  var i = 0;
  while( int != 0){
    this.stars[i] = 2;
    i++;
    int--;
  }
  if(dec >= 0.5){
    this.stars[i] = 1;
  }
}

}