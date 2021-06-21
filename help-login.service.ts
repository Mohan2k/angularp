import { Injectable } from '@angular/core';
import {FlashMessage} from 'angular-flash-message';
@Injectable({
  providedIn: 'root'
})
export class HelpLoginService {

  constructor(private flashMesage:FlashMessage) { }

  testFunction():void{
    console.log("Nigga wut!");
    this.flashMesage.success("Success");
  }
}
