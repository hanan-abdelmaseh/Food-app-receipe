import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchesType',
  pure: false,
})
export class MatchesTypePipe implements PipeTransform {
  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter((item) => item.preferenceType == filter);
  }
}
