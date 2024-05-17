import { Component, OnInit } from '@angular/core';
import {Buecher} from "../buecher";
import {BuecherService} from "../service/buecher.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-buecher-list',
  templateUrl: './buecher-list.component.html',
  styleUrl: './buecher-list.component.css'
})
export class BuecherListComponent {

  displayColumnDesktop: string[] = ['buchnummer', 'buchname', 'isbn', 'autor', 'verlagname'];
  displayColumnMobile: string[] = ['buchname', 'autor'];
  displayColumn: string[] = [];

  public dataSource: MatTableDataSource<Buecher>
  buecher: Buecher[];
  public buch;

  constructor(
    private buecherService: BuecherService,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
  ) {
    this.dataSource  = new MatTableDataSource<Buecher>([])
  }

  ngOnInit() {
    this.buecherService.findAll().subscribe(data => {
      this.buecher = data;
      console.log(this.buecher);
      this.dataSource.data = data;

    });

    this.breakpointObserver.observe([
      Breakpoints.Handset,
    ]).subscribe(result => {
      if (result.matches) {
        this.displayColumn = this.displayColumnMobile;
      } else {
        this.displayColumn = this.displayColumnDesktop;
      }
    });

  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  editRow(buch){
    const buchnummer = buch.buchnummer
    this.router.navigate(['buecher/update', buchnummer])
  }

}
