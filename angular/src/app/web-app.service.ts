import { Injectable } from '@angular/core';
import {WebApp} from "./web-app";
import {WEBAPPS} from "./mock-webApp";
import {Observable ,of} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebAppService {

  getApps(): Observable<WebApp[]> {
    return this.http.get<WebApp[]>(this.webAppUrl).pipe(
      tap(_ => this.log('fetched webapps')),
      catchError(this.handleError<WebApp[]>('getApps', []))
    );
  }
  getApp(id: number): Observable<WebApp> {
    const url = `${this.webAppUrl}/${id}`;
    return this.http.get<WebApp>(url).pipe(
      tap(_ => this.log(`fetched webapp id=${id}`)),
      catchError(this.handleError<WebApp>(`getWebApp id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateWebApp(app: WebApp): Observable<any> {
    return this.http.put(this.webAppUrl, app, this.httpOptions).pipe(
      tap(_ => this.log(`updated webapp id=${app.id}`)),
      catchError(this.handleError<any>('updateWebApp'))
    );
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  /** POST: add a new hero to the server */
  addWebApp(app: WebApp): Observable<WebApp> {
    return this.http.post<WebApp>(this.webAppUrl, app, this.httpOptions).pipe(
      tap((newWebApp: WebApp) => this.log(`added app w/ id=${newWebApp.id}`)),
      catchError(this.handleError<WebApp>('addWebApp'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`WebAppService: ${message}`);
  }

  private webAppUrl = 'api/webapps';  // URL to web api

  constructor(private messageService: MessageService, private http : HttpClient) { }
}
