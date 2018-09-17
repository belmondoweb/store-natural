import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { AboutusComponent } from './aboutus/aboutus.component';

import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { CategoriesService } from './shared/categories.service';
import { ProductsService } from './shared/products.service';
import { DataTableModule } from 'ng2-flex-table';
import { AjaxService } from './shared/ajax.service';
import { SearchPipe } from './search.pipe';

@NgModule({
    imports: [
      HttpClientModule,
        BrowserModule,
        FormsModule,
        RouterModule, // Need this module for the routing
        AppRoutingModule, // Import app routing module
        NgbModule,
        NgbDropdownModule,
        DataTableModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
         AboutusComponent,
        ProductListComponent,
        PageNotFoundComponent,
        ProductDetailsComponent,
        SearchPipe,
      
       
    ],
    providers: [ // Services 
        CategoriesService,
        ProductsService,
        AjaxService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
