import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeEmpty'
})
export class RemoveemptyPipe implements PipeTransform {

  transform(items: any, args?: any): any {
    
    for(let k in items){
      if(items[k].value.length === 0){
        delete items[k].key;
      }
      console.log(items[k].value);      
    }
    return items;
  }

}
