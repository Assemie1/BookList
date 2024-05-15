import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AutorFormComponent} from "./Autoren/autor-form/autor-form.component";
import {AutorListComponent} from "./Autoren/autor-list/autor-list.component";
import {AppComponent} from "./app.component";
import {VerlagListComponent} from "./Verlage/verlag-list/verlag-list.component";
import {VerlagFormComponent} from "./Verlage/verlag-form/verlag-form.component";
import {BuecherListComponent} from "./Buecher/buecher-list/buecher-list.component";
import {BuecherFormComponent} from "./Buecher/buecher-form/buecher-form.component";
import {BuecherUpdateComponent} from "./Buecher/buecher-update/buecher-update.component";
import {AutorenUpdateComponent} from "./Autoren/autoren-update/autoren-update.component";
import {VerlagUpdateComponent} from "./Verlage/verlag-update/verlag-update.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:  "home", component: HomeComponent ,data: {title : "Home"}},
  {path: 'verlage/list', component: VerlagListComponent, data: {title : "Liste Verlage"}},
  {path: 'verlage/create', component: VerlagFormComponent, data: {title : "Verlag erstellen"}},
  {path: 'verlage/update', component: VerlagUpdateComponent, data: {title : "Verlag anpassen"}},
  {path: 'autoren/list', component: AutorListComponent, data: {title : "Liste Autoren"}},
  {path: 'autoren/create', component: AutorFormComponent, data: {title : "Autor erstellen"}},
  {path: 'autoren/update', component: AutorenUpdateComponent, data: {title : "Autor anpassen"}},
  {path: 'buecher/list', component: BuecherListComponent, data: {title : "Liste Bücher"}},
  {path: 'buecher/create', component: BuecherFormComponent, data: {title : "Buch erstellen"}},
  {path: 'buecher/update/:buchnummer', component: BuecherUpdateComponent, data: {title : "Buch anpassen"}},
  {path:  "**", component: HomeComponent ,data: {title : "Home"}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
