import {Pipe, PipeTransform} from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'pipePosition',
  pure: false
})
export class PipePositionPipe implements PipeTransform {

  transform(input: Player[], desiredPosition) {
   var output: Player[] = [];
   if(desiredPosition === "guard") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].position === "guard" ) {
         output.push(input[i]);
       }
     }
     return output;
   } else if (desiredPosition === "forward") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].position === "forward") {
         output.push(input[i]);
       }
     }
     return output;
   } else {
     return input;
   }
 }

}
