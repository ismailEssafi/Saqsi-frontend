import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private authService: AuthService){}

  ngOnInit() {
    this.authService.test().subscribe(
        (response) => {
          console.log("🚀 ~ file: home.component.ts:15 ~ HomeComponent ~ ngOnInit ~ response:",JSON.parse(response.body.response.title).EN)
        })
  }
}