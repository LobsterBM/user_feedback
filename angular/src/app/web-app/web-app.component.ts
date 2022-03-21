import { Component, OnInit } from '@angular/core';
import {WebApp} from "../web-app";
import {User} from "../user";
import {AppComment} from "../app-comment";
import {WebAppService} from "../web-app.service";

import {WEBAPPS} from "../mock-webApp";

@Component({
  selector: 'app-web-app',
  templateUrl: './web-app.component.html',
  styleUrls: ['./web-app.component.css']
})
export class WebAppComponent implements OnInit {

  apps : WebApp[] = [];

  constructor(private appService : WebAppService) { }

  getApps(): void {
    this.apps = this.appService.getApps();
  }



  selectedApp?: WebApp;
  onSelect(app: WebApp): void {
    this.selectedApp = app;
  }

  ngOnInit(): void {

    this.getApps();
  }

}
