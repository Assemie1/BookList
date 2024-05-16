import {Component, Inject} from '@angular/core';
import {Buecher} from "../buecher";
import {DeleteModalComponent} from "../../delete-modal/delete-modal.component";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {BuecherService} from "../service/buecher.service";

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrl: './update-modal.component.css'
})
export class UpdateModalComponent {

  object:string
  dialogRef: MatDialogRef<DeleteModalComponent>;

  page: string = "update"

  buchnummer: number;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    public buecherService: BuecherService,
    public updateRef: MatDialogRef<UpdateModalComponent>,
  @Inject(MAT_DIALOG_DATA) public  buch:Buecher
  ) {
  }


  ngOnInit(){
    this.object = this.buch.buchname
    this.buchnummer = this.buch.buchnummer
    console.log(this.buch)

  }
  openDialog(object: string): void {
    this.dialogRef = this.dialog.open(DeleteModalComponent,{
      data:object
    })
    this.dialogRef.componentInstance.deleteCallback = () => {
      this.delete();
    };
  }

  delete(){
    this.buecherService.delete((this.buch.buchnummer))
    this.router.navigate(['buecher/list'])
    this.updateRef.close()
  }


}
