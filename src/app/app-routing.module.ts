import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutusComponent } from "./aboutus/aboutus.component";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { ProductDetailsComponent } from "./products/product-details/product-details.component";


const appRoutes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "aboutus", component: AboutusComponent },
    { path: "product-list", component: ProductListComponent },
    { path: "products/:id", component: ProductDetailsComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: PageNotFoundComponent }
];


const appRouter = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [appRouter],
    exports: [RouterModule]
})


export class AppRoutingModule {
    constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
         this.router.navigate(['404']); // or redirect to default route
     };
 }
 
 }
 
