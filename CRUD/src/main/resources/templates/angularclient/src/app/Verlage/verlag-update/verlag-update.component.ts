import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Verlag} from "../model/verlag";
import {Verlagservice} from "../service/verlagservice.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DeleteModalComponent} from "../../delete-modal/delete-modal.component";

@Component({
  selector: 'app-verlag-update',
  templateUrl: './verlag-update.component.html',
  styleUrl: './verlag-update.component.css'
})
export class VerlagUpdateComponent {

  verlag;

  public verlagnummer: number;

  object: string;
  inputAutoren: string = ""
  autoren: number[] =[]
  page: string = "update"
  dialogRef: MatDialogRef<DeleteModalComponent>

  constructor(
    public verlagService: Verlagservice,
    private router: Router,
    public dialog: MatDialog,
    private route: ActivatedRoute) {
    this.verlag = new Verlag();

  }


  ngOnInit(){
    this.route.params.subscribe(params => {
      this.verlagnummer = +params['verlagnummer']
      this.verlag.name = params['name']
      this.inputAutoren = params['autor']
      this.object = this.verlag.name
    })
  }


  openDialog(object: string){
    this.dialogRef = this.dialog.open(DeleteModalComponent, {
      data: object
    });
    this.dialogRef.componentInstance.deleteCallback = () => {
      this.delete();
    }
  }

  delete(){
    this.verlagService.delete(this.verlagnummer)
    this.router.navigate(["verlage/list"])
  }


}

