import {Component, Inject} from '@angular/core';
import {Buecher} from "../buecher";
import {ActivatedRoute, Router} from "@angular/router";
import {BuecherService} from "../service/buecher.service";
import {
  MatDialog,
  MatDialogRef
} from "@angular/material/dialog";
import {DeleteModalComponent} from "../../delete-modal/delete-modal.component";


@Component({
  selector: 'app-buecher-update',
  templateUrl: './buecher-update.component.html',
  styleUrl: './buecher-update.component.css'
})
export class BuecherUpdateComponent {

  page: string = "update"

  buch;
  autoren: number[];

  object: string;
  verlage: number[];
  dialogRef: MatDialogRef<DeleteModalComponent>;

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
      this.buch.buchname = params['buchname']
      this.buch.isbn = params['isbn']
      this.buch.autornummer = params['autornummer']
      this.buch.verlagnummer = params['verlagnummer']
      this.object = this.buch.buchname

      this.buecherService.get(this.buchnummer).subscribe( data =>{
        this.buch = data
      })

    })
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
    this.buecherService.delete((this.buchnummer))
    this.router.navigate(['buecher/list'])
  }

}

