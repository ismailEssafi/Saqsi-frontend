import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
})
export class MyProfileComponent {
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.test().subscribe((response) => {
    });
  }
}
