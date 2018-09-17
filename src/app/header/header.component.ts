import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "../../../node_modules/@angular/router";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
    constructor( private route: ActivatedRoute, private router: Router) { } 

}
