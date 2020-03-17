import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByInput',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, input: string) {
    console.log(value);
    return value.filter(elem => {
      if (
        elem.name.toLowerCase().startsWith(input) ||
        elem.email.toLowerCase().startsWith(input)
      ) {
        return elem;
      }
    });
  }
}
