import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Buecher} from "../buecher";
import {Router} from "@angular/router";
import {GeneralService} from "../../general-service/general-service";

@Injectable({
  providedIn: 'root'
})
export class BuecherService {

  private bucherUrlBase: string;
  private bucherUrl: string;

  constructor(
    private http:HttpClient,
    public router: Router,
    private generalService: GeneralService,
  ) {
    this.bucherUrlBase = "http://localhost:8080/buecher/"

  }

  public findAll(): Observable<Buecher[]>{
    this.bucherUrl = this.bucherUrlBase+"all"
    return this.http.get<Buecher[]>(this.bucherUrl)
  }

  public save(buch: Buecher){
    console.log(buch)
    this.bucherUrl = this.bucherUrlBase+"create"
    return this.http.post<Buecher>(this.bucherUrl, buch)
  }

  public get(buchnummer): Observable<Buecher>{
    this.bucherUrl = this.bucherUrlBase+buchnummer.toString()
    return this.http.get<Buecher>(this.bucherUrl)
  }
  public update(buch: Buecher, buchnummer){
    this.bucherUrl = this.bucherUrlBase+buchnummer.toString()
    return this.http.put<Buecher>(this.bucherUrl, buch)
  }

  public delete(buchnummer){
    this.bucherUrl = this.bucherUrlBase+buchnummer.toString()
    this.http.delete(this.bucherUrl).subscribe();
  }


  public onSubmit(buch, page, buchnummer){
    if (page === "create") {
      this.save(buch).subscribe();
      buch.buchname = "";
      buch.isbn = null;
      buch.verlagnummer = null;
      buch.autornummer = null;
    } else {
      this.update(buch, buchnummer).subscribe();
      this.router.navigate(['buecher/list'])
    }

  }

}
