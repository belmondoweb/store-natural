import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/model/product.model';
import { ProductsService } from '../../shared/products.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    filters: string;
    searchTearm: string;
    products: Product[];
    product: Product;
    // tslint:disable-next-line:no-inferrable-types
    fontSize: number = 20;
    authorSelected: string;
    productArray: Array<Product>;
    nameArray: Array<Product> = new Array<Product>();

    constructor(private productsService: ProductsService) { }

    ngOnInit() {
        this.products = this.productsService.getProducts();
     
          
       this.nameArray = Array.from(new Set(this.nameArray));
    }
    filter() {
        this.productArray = this.nameArray.filter((x: Product):
        boolean => { 
             return x.productName.toLowerCase().includes(this.filters.toLowerCase());
 
          
              
        });
        }
     
    filterProduct() {
        this.productArray = this.nameArray.filter((x: Product):
       boolean => { return x.productName.toLowerCase().includes(this.filters.toLowerCase());
      });
      }
    showAveragePrice(): void {
        let sum = 0;
        for (let i = 0; i < this.products.length; i++) {
            sum += this.products[i].unitPrice;
        }
        let avg = sum / this.products.length;
        alert("Average Price: " + avg);
    }
    showUnitsOnOrder(): void {
        let sum = 0;
        for (let i = 0; i < this.products.length; i++) {
            sum += this.products[i].unitsOnOrder;
        }
        let avg = sum + this.products.length;
        alert("Sum of units Ordered: " + avg);
    }
    
    showUnitsInStock(): void {
        let sum = 0;
        for (let i = 0; i < this.products.length; i++) {
            sum += this.products[i].unitsInStock;
        }
        let avg = sum + this.products.length;
        alert("Sum of units in stock: " + avg);
    }
}
