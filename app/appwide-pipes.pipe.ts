import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'commonPipe'
})
export class CommonPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: any, size: number): unknown {

    if(typeof(value) === 'object'){
      if( value.length < 1) {
        return 0;
      } else {
            return value.length; 
          }      
      }else if (typeof(value) === 'string') {
        if(value.length < size) {
          return value.replace(/<[^>]+>/gm, '');
        } else {
              return value.replace(/<[^>]+>/gm, '').substr(0, size) + '...'; 
            }      
        } else if (typeof(value) === 'string' && value.split('@')){
          return value[0];
        }
      }
    } 
   
    


