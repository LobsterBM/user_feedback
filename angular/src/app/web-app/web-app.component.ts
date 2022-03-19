import { Component, OnInit } from '@angular/core';
import {WebApp} from "../web-app";

@Component({
  selector: 'app-web-app',
  templateUrl: './web-app.component.html',
  styleUrls: ['./web-app.component.css']
})
export class WebAppComponent implements OnInit {

  app: WebApp ={
    id: 1,
    name  : 'first app',
    rating : 5,
    comments : []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
