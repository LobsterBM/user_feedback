import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import{WebApp} from "./web-app";
import {User} from "./user";
import {AppComment} from "./app-comment";

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {


    const webApps = [
      {id: 1 , name: 'app1' , rating: 1 , comments: [
          {id : 1 , user: {
              id : 1 ,
              username:  "user1"
            } , text: 'this is a mock comment' , appRating : 2 , commentRating : 1 },
          {id : 2 , user: {
              id : 1 ,
              username:  "user1"
            } , text: 'this is another mock comment' , appRating : 3, commentRating : 1 },
        ] , creator: {
          id : 1 ,
          username:  "user1"
        }  },
      {id: 2 , name: 'app2' , rating: 3 , comments: [
          {id : 1 , user: {
              id : 1 ,
              username:  "user1"
            } , text: 'this is a mock comment' , appRating : 2 , commentRating : 1 },
          {id : 2 , user: {
              id : 1 ,
              username:  "user1"
            } , text: 'this is another mock comment' , appRating : 3, commentRating : 1 },
        ] , creator: {
          id : 1 ,
          username:  "user1"
        }  }
    ];
    return {webApps};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(webApps: WebApp[]): number {
    return webApps.length > 0 ? Math.max(...webApps.map(app => app.id)) + 1 : 11;
  }
}
