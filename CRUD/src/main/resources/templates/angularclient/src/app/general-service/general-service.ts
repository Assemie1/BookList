import { Injectable } from '@angular/core';
import {WrongInputComponent} from "../wrong-input/wrong-input.component";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private duration: number = 10;

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  openSnackBar(){
    this.snackBar.openFromComponent(WrongInputComponent, {
      duration: this.duration * 1000,
    });
  }


}
