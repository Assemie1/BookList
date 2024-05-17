import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Autor} from "../model/autor";
import {AutorServiceService} from "../sevice/autor-service.service";
import {filter} from "rxjs";
import {Event, Router} from "@angular/router";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-autor-list',
  templateUrl: './autor-list.component.html',
  styleUrl: './autor-list.component.css'
})
export class AutorListComponent implements OnInit {


  public displayColumnDesktop: string[] = ["autornummer", "vorname", "nachname", "verlage", "autorbuecher"]
  public displayColumnMobile: string[] = ["vorname", "nachname"]
  public displayColumn: string[] = []

  public dataSource: MatTableDataSource<Autor>
  autors: Autor[];
  verlage: string[] = [];
  filterValue: string = '';
  constructor(
    private autorService: AutorServiceService,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
  ) {
    this.dataSource = new MatTableDataSource<Autor>([])
  }

  ngOnInit() {
    this.autorService.findAll().subscribe(data => {
      this.autors = data;
      this.dataSource.data = data

    });

    this.breakpointObserver.observe([Breakpoints.Handset,]).subscribe(result => {
      if (result.matches){
        this.displayColumn = this.displayColumnMobile;
      } else {
        this.displayColumn = this.displayColumnDesktop;
      }
    })

  }

  applyFilter(event: KeyboardEvent){
    const filterValue=(event.target as HTMLInputElement).value.trim().toLowerCase()
    this.dataSource.filter = filterValue
  }


  editRow(autor) {
    for (var counter = 0; counter < autor.verlage.length; counter++){
      this.verlage.push(autor.verlage[counter].verlagnummer.toString())
    }
    autor.verlage = this.verlage.toString()
    this.router.navigate(['autoren/update', autor]);
  }

}
