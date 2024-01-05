import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { AuctionsApiService } from '../auctions-api.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss'
})
export class CategoriesListComponent implements OnInit {
  categoryList: Category[] = []

  constructor(private auctionsApi: AuctionsApiService) {}

  ngOnInit(): void {
    this.auctionsApi.getCategories().subscribe({
      next: (response) => {
        console.log(response)
        this.categoryList = response
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
