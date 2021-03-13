import { CategoryService } from './../../services/category.service';
import { Category } from './../../Models/categorgy';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  currentCategory: Category;
  dataLoaded: boolean;
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCategory(category: Category) {
    console.log(category.categoryName);
    this.currentCategory = category;
  }

  getCurrentCategory(category: Category) {
    if (category == this.currentCategory) {
      return "list-group-item active"
    }
    else{return "list-group-item"}
  }
}