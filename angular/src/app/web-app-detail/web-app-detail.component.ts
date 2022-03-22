import {Component, Input, OnInit} from '@angular/core';
import {WebApp} from "../web-app";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {WebAppService} from "../web-app.service";


@Component({
  selector: 'app-web-app-detail',
  templateUrl: './web-app-detail.component.html',
  styleUrls: ['./web-app-detail.component.css']
})


export class WebAppDetailComponent implements OnInit {
  @Input() app ?: WebApp;
  constructor(private route : ActivatedRoute , private webAppService : WebAppService, private location: Location) { }

  ngOnInit(): void {
    this.getApp();
  }

  getApp(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.webAppService.getApp(id).subscribe(app => this.app = app);
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.app) {
      this.webAppService.updateWebApp(this.app)
        .subscribe(() => this.goBack());
    }
  }
}
