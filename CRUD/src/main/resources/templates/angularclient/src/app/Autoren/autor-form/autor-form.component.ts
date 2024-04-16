import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {Autor, Verlag} from "../model/autor";
import {AutorServiceService} from "../sevice/autor-service.service";

@Component({
  selector: 'app-ator-form',
  templateUrl: './autor-form.component.html',
  styleUrl: './autor-form.component.css',

})
export class AutorFormComponent {
  autor: Autor;
  inputVerlage: string;
  verlage: number[];

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private autorService: AutorServiceService) {
    this.autor = new Autor();
  }

  inputToArray(){
    this.verlage = this.inputVerlage.split(',').map(id => parseInt(id.trim(), 10))
    this.autor.verlag = this.verlage
  }
  onSubmit(){
    this.inputToArray()
    this.autorService.save(this.autor).subscribe();
    this.autor.nachname = '';
    this.autor.vorname = '';
    this.inputVerlage = '';
  }

}
