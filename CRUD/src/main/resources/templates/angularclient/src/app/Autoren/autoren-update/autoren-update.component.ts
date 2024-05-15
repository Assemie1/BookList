import { Component } from '@angular/core';
import {Autor} from "../model/autor";
import {ActivatedRoute, Router} from "@angular/router";
import {AutorServiceService} from "../sevice/autor-service.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DeleteModalComponent} from "../../delete-modal/delete-modal.component";
import {AutorListComponent} from "../autor-list/autor-list.component";
import {GeneralService} from "../../general-service/general-service";

@Component({
  selector: 'app-autoren-update',
  templateUrl: './autoren-update.component.html',
  styleUrl: './autoren-update.component.css'
})
export class AutorenUpdateComponent {

  autor: Autor;
  inputVerlage: string = "";
  page: string ="update"

  public autornummer: number;

  object: string;

  dialogRef: MatDialogRef<DeleteModalComponent>;
  verlage: number[]
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    public autorService: AutorServiceService,

  ) {
    this.autor = new Autor();
  }
  ngOnInit(){
    this.route.params.subscribe(params => {
      this.autornummer = +params['autornummer']
      this.autor.vorname = params['vorname']
      this.autor.nachname = params['nachname']
      this.inputVerlage = params['verlage']
      this.object = this.autor.vorname + " " + this.autor.nachname

    })
  }


  openDialog(object: string){
    this.dialogRef = this.dialog.open(DeleteModalComponent,{
      data: object
    });
    this.dialogRef.componentInstance.deleteCallback = () => {
      this.delete();
    }
  }

  delete(){
    this.autorService.delete((this.autornummer))
    this.router.navigate(["autoren/list"])
  }

}

