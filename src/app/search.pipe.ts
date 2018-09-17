import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(items: any[], field: string): any[] {
      
        if (!field || !field) {
            return items;
        }
        return items.filter(singleItem => singleItem.productName.toLowerCase().indexOf(field.toLowerCase()) !== -1);
        
    }
    // transform(pipeData, pipeModifier): any {
    //     return pipeData.filter(eachItem => {
    //       return (
    //         eachItem.productName.toLowerCase().includes(pipeModifier.toLowerCase()) ||
    //         eachItem['unitPrice'].toLowerCase().includes(pipeModifier.toLowerCase())
    //       // tslint:disable-next-line:semicolon
    //       )
    //     });
    //   }
    }


