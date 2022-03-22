import { Component, OnInit } from '@angular/core';
import {WebApp} from "../web-app";
import {User} from "../user";
import {AppComment} from "../app-comment";
import {WebAppService} from "../web-app.service";

import {WEBAPPS} from "../mock-webApp";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-web-app',
  templateUrl: './web-app.component.html',
  styleUrls: ['./web-app.component.css']
})
export class WebAppComponent implements OnInit {

  apps : WebApp[] = [];

  constructor(private appService : WebAppService, private messageService : MessageService) { }

  getApps(): void {
   this.appService.getApps().subscribe(apps=>  this.apps = apps);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.appService.addWebApp({ name } as WebApp)
      .subscribe(app => {
        this.apps.push(app);
      });
  }



  selectedApp?: WebApp;
  onSelect(app: WebApp): void {
    this.selectedApp = app;
  }

  ngOnInit(): void {

    this.getApps();
  }

}
