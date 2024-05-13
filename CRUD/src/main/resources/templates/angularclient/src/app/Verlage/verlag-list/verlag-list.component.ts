import {Component, OnInit} from '@angular/core';
import {Verlag} from "../model/verlag"
import {Verlagservice} from "../service/verlagservice.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";

@Component({
  selector: 'app-verlag-list',
  templateUrl: './verlag-list.component.html',
  styleUrl: './verlag-list.component.css'
})
export class VerlagListComponent {

  public displayColumn: string[] = ["verlagnummer", "name", "autoren", "verlagbuecher"]
  public dataSource: MatTableDataSource<Verlag>
  verlage: Verlag[];
  autoren: string[] =[]

  constructor(private verlagService: Verlagservice, private router: Router) {
    this.dataSource = new MatTableDataSource<Verlag>([])
  }

  ngOnInit() {
    this.verlagService.findAll().subscribe(data => {
      this.verlage = data;
      this.dataSource.data = data;

    });
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
