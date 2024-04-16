import {Component, OnInit} from '@angular/core';
import {Autor} from "../model/autor";
import {AutorServiceService} from "../sevice/autor-service.service";

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrl: './autor-list.component.css'
})
export class AutorListComponent implements OnInit {

  autors: Autor[];

  constructor(private autorService: AutorServiceService) {
  }

  ngOnInit() {
    this.autorService.findAll().subscribe(data => {
      this.autors = data;
      console.log(this.autors)
    });
  }
}
