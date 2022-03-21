import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebAppComponent } from './web-app/web-app.component';
import {FormsModule} from "@angular/forms";
import { UserComponent } from './user/user.component';
import { AppCommentComponent } from './app-comment/app-comment.component';
import { WebAppDetailComponent } from './web-app-detail/web-app-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WebAppComponent,
    UserComponent,
    AppCommentComponent,
    WebAppDetailComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
