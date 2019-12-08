import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroPadding'
})
export class ZeroPaddingPipe implements PipeTransform {

  // 23 -> 000_23_000
  transform(value: number): any {
    if (value.toString.length < 3) {
      const result = '000_' + value + '_000';
      return result;
    }
  }

}
