import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProService } from 'src/app/services/pro.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent {
  private userId;
  constructor(
    private proService: ProService,
    private activatedRoute: ActivatedRoute
  ) {
    this.userId = '';
  }
  pro : any;
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params['userId'];
    });
    this.proService.getProAllInfo(this.userId).subscribe((response) => {
      if(response.status = 202){
        console.log(response.body);
        this.pro = response.body;
      }
    });
  }
}
