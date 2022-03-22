import { Component, OnInit } from '@angular/core';
import {WebApp} from "../web-app";
import {WebAppService} from "../web-app.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  apps : WebApp[]=[];



  constructor(private appService : WebAppService) { }

  ngOnInit(): void {
    this.getApps();

  }

  getApps(): void {
    this.appService.getApps().subscribe(apps => this.apps = apps.slice(0,5));
  }

}
