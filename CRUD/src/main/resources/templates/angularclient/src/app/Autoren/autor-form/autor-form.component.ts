import { Component } from '@angular/core';
import {Autor} from "../model/autor";
import {AutorServiceService} from "../sevice/autor-service.service";


@Component({
  selector: 'app-ator-form',
  templateUrl: './autor-form.component.html',
  styleUrl: './autor-form.component.css',

})
export class AutorFormComponent {
  autor: Autor;
  inputVerlage: string = "";
  page: string ="create"
  autornummer = null

  constructor(

    public autorService: AutorServiceService,

  ) {
    this.autor = new Autor();
  }


}
