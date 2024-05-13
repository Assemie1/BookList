import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.css'
})
export class DeleteModalComponent{
  deleteCallback: () => void;

  object: string;
  constructor(public dialogRef: MatDialogRef<DeleteModalComponent>,
  @Inject(MAT_DIALOG_DATA) public  receivedObjekt: string
  ) {
    this.object = receivedObjekt
}


  onDelete() {
    if (this.deleteCallback) {
      this.deleteCallback();

    }
    this.dialogRef.close();
  }
}

