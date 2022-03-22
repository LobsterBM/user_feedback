import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebAppComponent } from './web-app/web-app.component';
import {FormsModule} from "@angular/forms";
import { UserComponent } from './user/user.component';
import { AppCommentComponent } from './app-comment/app-comment.component';
import { WebAppDetailComponent } from './web-app-detail/web-app-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    WebAppComponent,
    UserComponent,
    AppCommentComponent,
    WebAppDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,

      HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false }
      )
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
