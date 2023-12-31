import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'initials',
 
})
export class InitialsPipe implements PipeTransform {

  

  transform(value: string, num:number): string {

    const wordarray = value.split(',');
    const initials = wordarray.map(word => word.slice(0, num));
    return initials.join('') ;
  }
}
