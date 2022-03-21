import {Component, Input, OnInit} from '@angular/core';
import {WebApp} from "../web-app";

@Component({
  selector: 'app-web-app-detail',
  templateUrl: './web-app-detail.component.html',
  styleUrls: ['./web-app-detail.component.css']
})


export class WebAppDetailComponent implements OnInit {
  @Input() app ?: WebApp;
  constructor() { }

  ngOnInit(): void {
  }

}
