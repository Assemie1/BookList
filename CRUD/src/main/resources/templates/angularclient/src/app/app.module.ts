import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutorFormComponent } from './Autoren/autor-form/autor-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AutorServiceService} from "./Autoren/sevice/autor-service.service";
import { AutorListComponent } from './Autoren/autor-list/autor-list.component';
import {AutorenComponent} from "./Autoren/autoren.component";
import { VerlageComponent } from './Verlage/verlage.component';
import { VerlagListComponent } from './Verlage/verlag-list/verlag-list.component';
import {Verlagservice} from "./Verlage/service/verlagservice.service";
import { VerlagFormComponent } from './Verlage/verlag-form/verlag-form.component';


@NgModule({
  declarations: [
    AppComponent,
    AutorenComponent,
    AutorFormComponent,
    AutorListComponent,
    VerlageComponent,
    VerlagListComponent,
    VerlagFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [AutorServiceService, Verlagservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
