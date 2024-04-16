import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Verlag} from "../model/verlag"

@Injectable({
  providedIn: 'root'
})
export class Verlagservice {

  private verlagUrlList: string;
  private verlagUrlCreate: string;
  constructor(private http:HttpClient) {
    this.verlagUrlCreate = 'http://localhost:8080/verlage/create'
    this.verlagUrlList = 'http://localhost:8080/verlage/all'
  }

  public findAll(): Observable<Verlag[]>{
    return this.http.get<Verlag[]>(this.verlagUrlList)
  }

  public save(verlag: Verlag){
    return this.http.post<Verlag>(this.verlagUrlCreate, verlag)
  }

}
