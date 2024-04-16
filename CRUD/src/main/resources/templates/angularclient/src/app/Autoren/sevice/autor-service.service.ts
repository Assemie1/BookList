import { Injectable } from '@angular/core';
import {Autor} from "../model/autor";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AutorServiceService {

  private autorUrlCreate: string;
  private autorUrlList: string;

  constructor(private http: HttpClient) {
    this.autorUrlCreate = 'http://localhost:8080/autoren/create'
    this.autorUrlList = 'http://localhost:8080/autoren/all'
  }

  public findAll(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.autorUrlList);
  }

  public save(autor: Autor){
    return this.http.post<Autor>(this.autorUrlCreate, autor)
  }

}
