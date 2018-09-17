import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/model/category.model';
import { CategoriesService } from '../shared/categories.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    discount = 5;
    currentDate = new Date();
    categories: Category[];
     query: string;
    constructor(
        private categoriesService: CategoriesService) {    this.query = ''; }

    ngOnInit(): void {
        this.categories = this.categoriesService.getCategories();
    }
}
