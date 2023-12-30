import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getWeatherForecast().subscribe({
      next: (data) => {
        console.log('asd')
        this.content = data;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error)
        if (error.status == 401) {
          this.content = "Unauthorized to make a call"
        } else {
          this.content = "Unknown error"
        }
      }
    }
    )
  }
}