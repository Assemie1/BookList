import {Component, OnInit} from '@angular/core';
import {Verlag} from "../model/verlag"
import {Verlagservice} from "../service/verlagservice.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-verlag-list',
  templateUrl: './verlag-list.component.html',
  styleUrl: './verlag-list.component.css'
})
export class VerlagListComponent {

  public displayColumnDesktop: string[] = ["verlagnummer", "name", "autoren", "verlagbuecher"]
  public displayColumnMobile: string[] = ["verlagnummer", "name"]
  public displayColumn: string[] = []
  public dataSource: MatTableDataSource<Verlag>
  verlage: Verlag[];
  autoren: string[] =[]

  constructor(
    private verlagService: Verlagservice,
    private router: Router,
    private breakpoint: BreakpointObserver,
    ) {
    this.dataSource = new MatTableDataSource<Verlag>([])
  }

  ngOnInit() {
    this.verlagService.findAll().subscribe(data => {
      this.verlage = data;
      this.dataSource.data = data;

    });

    this.breakpoint.observe(Breakpoints.Handset).subscribe(result =>{
      if(result.matches){
        this.displayColumn = this.displayColumnMobile;
      }else {
        this.displayColumn = this.displayColumnDesktop;
      }
    })


  }

  applyFilter(event: KeyboardEvent){
    const filterValue=(event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }

  editRow(verlag){
    for (var counter = 0; counter < verlag.autor.length; counter++){
      this.autoren.push(verlag.autor[counter].autornummer.toString())
    }
    verlag.autor = this.autoren.toString()
    this.router.navigate(["verlage/update", verlag]);

  }

}
