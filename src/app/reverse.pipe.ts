import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: any): any {
    let reversedValue = '';
    if (value.length > 0) {
      reversedValue = value.split('').reverse().join('');
    }
    return reversedValue;
  }
}
