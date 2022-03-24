import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {WebApp} from "../web-app";
import {WebAppService} from "../web-app.service";

@Component({
  selector: 'app-webapp-search',
  templateUrl: './webapp-search.component.html',
  styleUrls: ['./webapp-search.component.css']
})
export class WebappSearchComponent implements OnInit {

  apps$!: Observable<WebApp[]>;
  private searchTerms = new Subject<string>();

  constructor(private webAppService: WebAppService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.apps$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.webAppService.searchApps(term)),
    );
  }

}
