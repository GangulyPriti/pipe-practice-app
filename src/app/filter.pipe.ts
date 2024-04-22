import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    } else {
      const resultArr = [];

      for (const item of value) {
        if (item[propName] === filterString) {
          resultArr.push(item);
        }
      }
      return resultArr;
    }
  }
}
