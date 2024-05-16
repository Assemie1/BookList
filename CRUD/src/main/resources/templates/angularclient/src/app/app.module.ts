import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatTableModule} from "@angular/material/table";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule} from '@angular/material/input';
import {MatButton, MatFabButton} from "@angular/material/button";

import { SidenavComponent } from './sidenav/sidenav.component';
import {AutorServiceService} from "./Autoren/sevice/autor-service.service";
import { AutorListComponent } from './Autoren/autor-list/autor-list.component';
import { AutorFormComponent } from './Autoren/autor-form/autor-form.component';
import {AutorenComponent} from "./Autoren/autoren.component";
import { VerlageComponent } from './Verlage/verlage.component';
import { VerlagListComponent } from './Verlage/verlag-list/verlag-list.component';
import {Verlagservice} from "./Verlage/service/verlagservice.service";
import { VerlagFormComponent } from './Verlage/verlag-form/verlag-form.component';
import { BuecherListComponent } from './Buecher/buecher-list/buecher-list.component';
import { BuecherFormComponent } from './Buecher/buecher-form/buecher-form.component';
import {BuecherUpdateComponent} from './Buecher/buecher-update/buecher-update.component';
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import { AutorenUpdateComponent } from './Autoren/autoren-update/autoren-update.component';
import { VerlagUpdateComponent } from './Verlage/verlag-update/verlag-update.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { WrongInputComponent } from './wrong-input/wrong-input.component';
import {MatCard, MatCardActions, MatCardContent, MatCardImage, MatCardTitle} from "@angular/material/card";
import { HomeComponent } from './home/home.component';
import { UpdateModalComponent } from './Buecher/update-modal/update-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    AutorenComponent,
    AutorFormComponent,
    AutorListComponent,
    VerlageComponent,
    VerlagListComponent,
    VerlagFormComponent,
    SidenavComponent,
    BuecherListComponent,
    BuecherFormComponent,
    BuecherUpdateComponent,
    AutorenUpdateComponent,
    VerlagUpdateComponent,
    DeleteModalComponent,
    WrongInputComponent,
    HomeComponent,
    UpdateModalComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        RouterModule,
        MatTableModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatButton,
        MatDialogActions,
        MatDialogContent,
        MatDialogClose,
        MatCard,
        MatCardContent,
        MatCardTitle,
        MatCardActions,
        MatCardImage,
    ],
  providers: [AutorServiceService, Verlagservice, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
