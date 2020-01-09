import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Informacion } from '../../shared/models/informacion';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class InformacionService {
  headers = new Headers();
  URL = 'http://localhost/angular/coame/master/';

  constructor( private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }

  getInformacion( id) {
    return this.http.post<Informacion>(`${this.URL}articulo.php/`, { id });
  }

  getInformaciones(): Observable<Informacion>  {
    return this.http.get<Informacion>(`${this.URL}articulos.php`);
  }
}

