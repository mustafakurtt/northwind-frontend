import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  
  categories : Category[] = []
  currentCategory: Category;

  constructor(private categoryService : CategoryService){}
  
  ngOnInit(): void {
    this.getAllCategories()
  }

  getAllCategories(){
    this.categoryService.getCategories().subscribe(res => this.categories = res.data)
  }

  setCurrentCategory(category: Category){
    this.currentCategory = category
    console.log(this.currentCategory);
  }

  getCurrentCategoryClass(category: Category){
    if (this.currentCategory == category) {
      return 'list-group-item active';
    } 
    return 'list-group-item';
  }

}
