import { Component } from '@angular/core';
import {Buecher} from "../buecher";
import {ActivatedRoute, Router} from "@angular/router";
import {BuecherService} from "../service/buecher.service";

@Component({
  selector: 'app-buecher-form',
  templateUrl: './buecher-form.component.html',
  styleUrl: './buecher-form.component.css'
})
export class BuecherFormComponent {

  buch: Buecher;
  page: string ="create"
  buchnummer = null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public buecherService: BuecherService ) {
    this.buch = new Buecher();
  }


}
