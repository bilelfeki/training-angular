import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransformerService {

  constructor() { }
  transformSimpleStringToUppercase(text:string){
    return text.toUpperCase();
  }
}
