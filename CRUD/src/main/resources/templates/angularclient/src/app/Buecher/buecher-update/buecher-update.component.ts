import {Component, Inject} from '@angular/core';
import {Buecher} from "../buecher";
import {ActivatedRoute, Router} from "@angular/router";
import {BuecherService} from "../service/buecher.service";
import {
  MatDialog,
  MatDialogRef
} from "@angular/material/dialog";
import {DeleteModalComponent} from "../../delete-modal/delete-modal.component";
import {UpdateModalComponent} from "../update-modal/update-modal.component";


@Component({
  selector: 'app-buecher-update',
  templateUrl: './buecher-update.component.html',
  styleUrl: './buecher-update.component.css'
})
export class BuecherUpdateComponent {

  page: string = "update"

  buch;
  buchtext;
  beschreibung: string;
  autoren: number[];

  object: string;
  verlage: number[];
  // dialogRef: MatDialogRef<DeleteModalComponent>;
  updateRef: MatDialogRef<UpdateModalComponent>;

  buchnummer: number;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    public buecherService: BuecherService ) {
    this.buch = new Buecher();
  }


  ngOnInit(){
    this.route.params.subscribe(params => {
      this.buchnummer = +params['buchnummer']
      this.object = this.buch.buchname

      this.buecherService.get(this.buchnummer).subscribe( data =>{
        this.buch = data
      })

    })


  }

  openEdit(buch): void {
    this.updateRef = this.dialog.open(UpdateModalComponent,{
      data:this.buch
    })

  }

  // openDialog(object: string): void {
  //   this.dialogRef = this.dialog.open(DeleteModalComponent,{
  //     data:object
  //   })
  //   this.dialogRef.componentInstance.deleteCallback = () => {
  //     this.delete();
  //   };
  // }



  // delete(){
  //   this.buecherService.delete((this.buchnummer))
  //   this.router.navigate(['buecher/list'])
  // }


}

