import { Component } from '@angular/core';
import {Verlag} from "../model/verlag";
import {ActivatedRoute, Router} from "@angular/router";
import {Verlagservice} from "../service/verlagservice.service";

@Component({
  selector: 'app-verlag-form',
  templateUrl: './verlag-form.component.html',
  styleUrl: './verlag-form.component.css'
})
export class VerlagFormComponent {

  verlag: Verlag;
  inputAutoren: string ="";
  autoren: number[]
  page: string = "create"
  verlagnummer:number = null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public verlagService: Verlagservice  ) {
    this.verlag = new Verlag();
  }


}
