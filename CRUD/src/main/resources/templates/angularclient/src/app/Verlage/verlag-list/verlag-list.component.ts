import { Component } from '@angular/core';
import {Verlag} from "../model/verlag"
import {Verlagservice} from "../service/verlagservice.service";

@Component({
  selector: 'app-verlag-list',
  templateUrl: './verlag-list.component.html',
  styleUrl: './verlag-list.component.css'
})
export class VerlagListComponent {
  verlage: Verlag[];

  constructor(private verlagService: Verlagservice) {
  }

  ngOnInit() {
    this.verlagService.findAll().subscribe(data => {
      this.verlage = data;
      console.log(this.verlage)
    });
  }
}
