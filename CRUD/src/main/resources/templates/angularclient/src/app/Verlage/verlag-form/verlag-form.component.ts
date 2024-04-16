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
  inputAutoren: string;
  autoren: number[]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private verlagService: Verlagservice  ) {
    this.verlag = new Verlag();
  }

  inputToArray(){
    this.autoren = this.inputAutoren.split(',').map(id => parseInt(id.trim(), 10))
    this.verlag.autor = this.autoren
  }
  onSubmit(){
    this.inputToArray()

    this.verlagService.save(this.verlag).subscribe();
    this.verlag.name='';    this.inputAutoren='';
  }

}
