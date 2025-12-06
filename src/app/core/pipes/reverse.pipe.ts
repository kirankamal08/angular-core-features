import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true,
  pure:false
})
export class ReversePipe implements PipeTransform {

  transform(value: string | any[]): string | any[] {
    if (!value) return value;
    if(typeof value === 'string') {
   //   console.log('Pure pipe executed:', value);
      return value.split('').reverse().join('');
    }
    if(Array.isArray(value)) {
      console.log('Pure pipe of array executed:', value);
      return [...value].reverse();
    }
    return value
    
  //  return value.split('').reverse().join('');
  }

}
