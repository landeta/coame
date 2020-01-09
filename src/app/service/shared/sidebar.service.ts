import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams  } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Sidebar } from '../../shared/models/sidebar';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class SidebarService {
  headers = new Headers();
  sidebar: Sidebar;
  URL = 'http://localhost/angular/coame/master/';

  constructor( private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }


  getSidebar(id: number) {
    console.log('Entre dentro de getSidebar id:   .....', id);
    const prueba =  this.http.post<Sidebar>(`${this.URL}sidebar.php/`, { id })
    .pipe(map(res =>  res));
    console.log('Entre dentro de getSidebar prueba:   .....', prueba);
    return prueba;
  }

  getSidebarItems_( id ) {
    return this.http.post<Sidebar>(`${this.URL}sidebaritems_.php`, { id })
    .pipe(map(res =>  res));
  }

  getSidebarEntradas(): Observable<Sidebar>  {
    return this.http.get<Sidebar>(`${this.URL}sidebaritems.php`);
  }
  saveSidebars( createSidebar: Sidebar) {
    // console.log('Veo si creo Sidebar ---> : ', createSidebar, 'Direccion --> : ', this.URL);
    const corr =  this.http.post(`${this.URL}crearSidebar.php`, createSidebar);
    return corr;
  }
  updateSidebar( tk: string|number, updateSidebar: Sidebar ) {

    // console.log('Dentro del servicio 1ro id:-->>', tk, '2do updateSidebar', updateSidebar);
    const result = this.http.post(`${this.URL}updateSidebar.php`, updateSidebar);
    return result;
  }
  deleteSidebar(tk: string) {
    const params = new HttpParams()
      .set('tk', tk.toString());
    // console.log('entre enel servicio de  delte, y el id es: ...', tk, ' Parametro : ', params);
    const prueba = this.http.delete(`${this.URL}/deleteSidebar.php?id=${tk}`);
    // const prueba = this.http.get(`${this.URL}deleteSidebar.php?id=` + tk)
    //                  .pipe(catchError(this.handleError));
    return prueba;

  }


}
