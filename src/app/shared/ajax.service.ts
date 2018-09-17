import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { RootObject } from './model/aboutinfo.model';
@Injectable({
  providedIn: 'root'
})
export class AjaxService {
    constructor(private ajaxParamService: HttpClient) {}

    getPerson(callback_p: (aObj: RootObject) => void): void {
      
        this.ajaxParamService.get("https://reqres.in/api/users").subscribe(callback_p);
    }
}
