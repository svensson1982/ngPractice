import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any, args:string[]): any {
    let keys = [];
    for (let key in value) {
      if(value[key] !== undefined){
        keys.push({key: key, value: value[key]});
      }
      
    }
    return keys;
  }

}
