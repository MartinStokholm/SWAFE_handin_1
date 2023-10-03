import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateJoin',
  standalone: true
})
export class DateJoin implements PipeTransform {
  transform(month?: number, year?: number): string {
    // Create a joined date string in the format 'MM/YYYY' (e.g., '05/2023')
    if (month === undefined || year === undefined) {
      return '';
    }
    const monthStr = month < 10 ? `0${month}` : `${month}`;
    return `${monthStr}/${year}`;
  }
}
