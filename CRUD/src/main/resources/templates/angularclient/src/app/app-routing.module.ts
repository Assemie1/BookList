import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AutorFormComponent} from "./Autoren/autor-form/autor-form.component";
import {AutorListComponent} from "./Autoren/autor-list/autor-list.component";
import {AutorenComponent} from "./Autoren/autoren.component";
import {AppComponent} from "./app.component";
import {VerlageComponent} from "./Verlage/verlage.component";
import {VerlagListComponent} from "./Verlage/verlag-list/verlag-list.component";
import {VerlagFormComponent} from "./Verlage/verlag-form/verlag-form.component";

const routes: Routes = [
  {path:  '""', component: AppComponent},
  {path: 'autoren', component: AutorenComponent},
  {path: 'verlage', component: VerlageComponent},
  {path: 'verlage/list', component: VerlagListComponent},
  {path: 'verlage/create', component: VerlagFormComponent},
  {path: 'autoren/list', component: AutorListComponent},
  {path: 'autoren/create', component: AutorFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
