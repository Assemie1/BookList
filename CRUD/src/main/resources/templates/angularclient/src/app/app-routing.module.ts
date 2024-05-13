import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AutorFormComponent} from "./Autoren/autor-form/autor-form.component";
import {AutorListComponent} from "./Autoren/autor-list/autor-list.component";
import {AutorenComponent} from "./Autoren/autoren.component";
import {AppComponent} from "./app.component";
import {VerlageComponent} from "./Verlage/verlage.component";
import {VerlagListComponent} from "./Verlage/verlag-list/verlag-list.component";
import {VerlagFormComponent} from "./Verlage/verlag-form/verlag-form.component";
import {BuecherListComponent} from "./Buecher/buecher-list/buecher-list.component";
import {BuecherFormComponent} from "./Buecher/buecher-form/buecher-form.component";
import {BuecherUpdateComponent} from "./Buecher/buecher-update/buecher-update.component";
import {AutorenUpdateComponent} from "./Autoren/autoren-update/autoren-update.component";
import {VerlagUpdateComponent} from "./Verlage/verlag-update/verlag-update.component";

const routes: Routes = [
  {path:  '""', component: AppComponent ,data: {title : "Home"}},
  // {path: 'autoren', component: AutorenComponent},
  // {path: 'verlage', component: VerlageComponent},
  {path: 'verlage/list', component: VerlagListComponent, data: {title : "Liste Verlage"}},
  {path: 'verlage/create', component: VerlagFormComponent, data: {title : "Verlag erstellen"}},
  {path: 'verlage/update', component: VerlagUpdateComponent, data: {title : "Verlag anpassen"}},
  {path: 'autoren/list', component: AutorListComponent, data: {title : "Liste Autoren"}},
  {path: 'autoren/create', component: AutorFormComponent, data: {title : "Autor erstellen"}},
  {path: 'autoren/update', component: AutorenUpdateComponent, data: {title : "Autor anpassen"}},
  {path: 'buecher/list', component: BuecherListComponent, data: {title : "Liste Bücher"}},
  {path: 'buecher/create', component: BuecherFormComponent, data: {title : "Buch erstellen"}},
  {path: 'buecher/update', component: BuecherUpdateComponent, data: {title : "Buch anpassen"}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
