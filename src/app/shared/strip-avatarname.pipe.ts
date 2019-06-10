import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'reverseStr'})
export class ReverseStr  implements PipeTransform {
  transform(value: string): string {
    let newStr: string = value;
    console.log("==value==",value);
    let tempstr = value.split(' ');
    if (tempstr.length > 2) {
    	newStr = tempstr[0]+' '+tempstr[tempstr.length-1];
    }

    return newStr;
  }
}
