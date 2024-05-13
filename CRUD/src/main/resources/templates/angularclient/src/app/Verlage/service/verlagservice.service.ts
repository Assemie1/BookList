import {Injectable, input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Verlag} from "../model/verlag"
import {Router} from "@angular/router";
import {GeneralService} from "../../general-service/general-service";

@Injectable({
  providedIn: 'root'
})
export class Verlagservice {

  private verlagUrlBase: string;
  private verlagUrl: string;
  autoren: number[];
  validation: boolean;

  constructor(
    private http:HttpClient,
    private router: Router,
    private generalService: GeneralService,
  ) {
    this.verlagUrlBase = 'http://localhost:8080/verlage/'
  }

  public findAll(): Observable<Verlag[]>{
    this.verlagUrl = this.verlagUrlBase+'all'
    return this.http.get<Verlag[]>(this.verlagUrl)
  }

  public save(verlag: Verlag){
    this.verlagUrl = this.verlagUrlBase+'create'
    return this.http.post<Verlag>(this.verlagUrl, verlag)
  }

  public update(verlag: Verlag, verlagnummer){
    console.log(verlag)
    this.verlagUrl = this.verlagUrlBase+verlagnummer.toString();
    return this.http.put<Verlag>(this.verlagUrl, verlag);
  }

  public delete(verlagnummer){
    this.verlagUrl = this.verlagUrlBase+verlagnummer.toString()
    this.http.delete(this.verlagUrl).subscribe();
  }


  inputToArray(inputAutoren, verlag){
    this.autoren = inputAutoren.split(',').map(id => parseInt(id.trim(), 10))
    verlag.autor = this.autoren
  }

  validateAutor(autoren){
    const valid = autoren.every(num => !isNaN(num))
    return valid
  }

  onSubmit(verlag, inputAutoren, page, verlagnummer){
    if(inputAutoren != ""){
      this.inputToArray(inputAutoren, verlag)
      this.validation = this.validateAutor(verlag.autor)
    }else {
      verlag.autor= null
      this.validation = true
    }

    if (this.validation){
      if (page === "create") {
        this.save(verlag).subscribe();
      }else{
        this.autoren = [];
        this.update(verlag, verlagnummer).subscribe();
        this.router.navigate(['verlage/list'])
      }
      verlag.name='';
    }else {
      this.generalService.openSnackBar()
    }

  }

}
