import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/model/product.model';
import { ProductsService } from '../../shared/products.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    product: Product;

    constructor(private productsService: ProductsService,
                private route: ActivatedRoute,
                private router: Router) { }

    ngOnInit() {
        this.route.params.subscribe(params => 
            this.product = this.productsService.getProduct(params.id)
        );
    }

    goBack(): void {
        this.router.navigate(["/product-list"]);
    }
}
