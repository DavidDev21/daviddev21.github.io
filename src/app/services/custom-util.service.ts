import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomUtilService {

  constructor() { }

  public generateSubsetList(inputArray: any[], itemsPerRow: number) : any[][] {
    let subList:any[] = [];
    let resultList:any[][] = [];
    console.log("input array: " + inputArray);
    if(inputArray !== null || inputArray !== undefined) {
      for(let i = 0; i < inputArray.length; i++) {
        if(i !== 0 && i % itemsPerRow === 0) {
          resultList.push(subList);
          subList = [];
        } 
        subList.push(inputArray[i]);
      }
      resultList.push(subList);
    } else {
      console.log("generateFormattedTooList - Input array is empty");
    }
    console.log("resultList After: " +JSON.stringify(resultList) );
    return resultList;
  }

  public joinStrings(inputArray: string[], separator: string  = "\n") : string {
      return inputArray.join(separator);
  }
}
