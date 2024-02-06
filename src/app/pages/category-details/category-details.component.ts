import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { AuctionsApiService } from '../../service/auctions-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.scss'
})
export class CategoryDetailsComponent implements OnInit {
  category?: Category
  categoryId!: string

  constructor(private auctionsApi: AuctionsApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id')!
    this.auctionsApi.getCategories().subscribe({
      next: (categories: Category[]) => {
        const filteredCategories = categories.filter((c) => c.id === this.categoryId)
        if (filteredCategories.length != 1) {
          console.log(`Error: more found ${filteredCategories.length} categories with id ${this.categoryId}`)
          return
        }
        this.category = filteredCategories.at(0)
        
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
