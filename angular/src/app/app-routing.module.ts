import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WebAppComponent} from "./web-app/web-app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {WebAppDetailComponent} from "./web-app-detail/web-app-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: WebAppDetailComponent },
  { path: 'webapps', component: WebAppComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
