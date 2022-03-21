import { Injectable } from '@angular/core';
import {WebApp} from "./web-app";
import {WEBAPPS} from "./mock-webApp";

@Injectable({
  providedIn: 'root'
})
export class WebAppService {

  getApps(): WebApp[] {
      return WEBAPPS;
  }

  constructor() { }
}
