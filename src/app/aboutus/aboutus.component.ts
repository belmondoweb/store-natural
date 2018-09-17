import { Component, OnInit } from '@angular/core';
import { AjaxService } from '../shared/ajax.service';
import { RootObject } from '../shared/model/aboutinfo.model';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
   
    constructor(private ajaxService: AjaxService) { }

      responseParam: RootObject = new RootObject();
      funcPram: ( y: RootObject) => void;
    
      ngOnInit() {
           this.funcPram = (x: RootObject): void => {
               this.responseParam = x;
            };
            this.ajaxService.getPerson(this.funcPram);
      }

 

  
}
