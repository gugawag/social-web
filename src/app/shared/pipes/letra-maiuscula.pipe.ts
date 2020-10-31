import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letraMaiuscula'
})
export class LetraMaiusculaPipe implements PipeTransform {

  transform(value: string): string {
    return value.substr(0, 1).toUpperCase() + value.substr(1, value.length - 1);
  }

}
