import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any, asc: boolean, propName: string): any {
    let sortedArray = value.toSorted((a: any, b: any) =>
      a[propName].localeCompare(b[propName])
    );
    return asc ? sortedArray : sortedArray.reverse();
  }
}
