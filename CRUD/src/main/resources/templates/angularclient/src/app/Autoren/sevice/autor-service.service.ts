import { Injectable } from '@angular/core';
import {Autor} from "../model/autor";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {GeneralService} from "../../general-service/general-service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AutorServiceService {

  private autorUrlBase:string
  private autorUrl:string
  verlage: number[];

  validation: boolean;

  constructor(
    private http: HttpClient,
    private generalService: GeneralService,
    public router: Router,

    ) {
    this.autorUrlBase = 'http://localhost:8080/autoren/'
  }

  public findAll(): Observable<Autor[]> {
    this.autorUrl = this.autorUrlBase+'all'
    return this.http.get<Autor[]>(this.autorUrl);
  }

  public save(autor: Autor){
    this.autorUrl = this.autorUrlBase+'create'
    return this.http.post<Autor>(this.autorUrl, autor)
  }

  public update(autor: Autor, autornummer){
    this.autorUrl = this.autorUrlBase+autornummer.toString()
    return this.http.put<Autor>(this.autorUrl, autor)
  }

  public delete(autornummer){
    this.autorUrl = this.autorUrlBase+autornummer.toString()
    this.http.delete(this.autorUrl).subscribe();
  }

  inputToArray(inputVerlage, autor){
    this.verlage = inputVerlage.split(',').map(id => parseInt(id.trim(), 10))
    autor.verlag = this.verlage
  }
  validateVerlag(verlage){
    const valid = verlage.every(num => !isNaN(num));
    return valid
  }

  onSubmit(autor, inputVerlage, page, autornummer){
    console.log("Service Service SErvice ")
    if (inputVerlage != ""){
      this.inputToArray(inputVerlage, autor)
      this.validation = this.validateVerlag(autor.verlag)
    }else{
      autor.verlag = null
      this.validation = true
    }

    if (this.validation){
      if (page == "create"){
        this.save(autor).subscribe();
      } else{
        this.update(autor, autornummer).subscribe();
        this.router.navigate(['autoren/list'])
      }

      autor.vorname = ""
      autor.nachname = ""
      inputVerlage = ""

    }
    else{
      this.generalService.openSnackBar()
    }
    return inputVerlage

  }

}
