import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinStrings'
})
export class JoinStringsPipe implements PipeTransform {

  transform(input:Array<string>, sep = "\n"): string  {
    try {
      console.log("input: " + input);
      return input.join(sep);
    } catch (Error) {
      console.log("JoinStringsPipe - Can't pipe given input: " + input.toString());
      return "";
    }
  }

}
