import { Component } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Autor} from "../Autoren/model/autor";
import {AutorServiceService} from "../Autoren/sevice/autor-service.service";
import {Verlagservice} from "../Verlage/service/verlagservice.service";
import {BuecherService} from "../Buecher/service/buecher.service";
import {Router} from "@angular/router";
import {Verlag} from "../Verlage/model/verlag";
import {Buecher} from "../Buecher/buecher";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  public displayColumnAutor: string[] = ["vorname", "nachname",]
  public dataSourceAutor: MatTableDataSource<Autor>

  public displayColumnVerlag: string[] = ["name",]
  public dataSourceVerlag: MatTableDataSource<Verlag>

  public displayColumnBuch: string[] = ["buchname", "autor",]
  public dataSourceBuch: MatTableDataSource<Buecher>
  autor: Autor[];

  verlag: Verlag[];

  buch: Buecher[];
  verlage
  filterValue: string = '';
  constructor(
    private autorService: AutorServiceService,
    private verlageService: Verlagservice,
    private buchService: BuecherService,
    private router: Router) {
    this.dataSourceAutor = new MatTableDataSource<Autor>([]);

    this.dataSourceVerlag = new MatTableDataSource<Verlag>([]);
    this.dataSourceBuch = new MatTableDataSource<Buecher>([]);
  }

  ngOnInit() {
    this.autorService.findAll().subscribe(data => {
      data.sort((a, b) => b.autornummer - a.autornummer)
      this.autor = data;
      this.dataSourceAutor.data = data
    });

    this.verlageService.findAll().subscribe(data=>{
      data.sort((a, b) => b.verlagnummer - a.verlagnummer)
      this.verlag = data;
      this.dataSourceVerlag.data = data
    });
    this.buchService.findAll().subscribe(data=>{
      data.sort((a, b) => b.buchnummer - a.buchnummer)
      this.buch = data;
      this.dataSourceBuch.data = data
    });

  }
}
