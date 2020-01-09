import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


// import { Informacion } from '../../../service/shared/informacion.service';
// import { Informacion, Informacions } from '../../../models/informacion';
import { InformacionService } from '../../../service/service.index';
// import { HttpErrorResponse } from '@angular/common/http';
import { Informacions } from '../../../models/informacion';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component2.html',
  styles: [],
  providers: [
  ]
})

export class InformacionComponent implements OnInit {

  informaciones: Informacions;
  info: any;
  fotos: string[] = [];
  titulos: string[] = [];
  desde = 1;
  public estado: string ;
  totalRegistros: number;

  slides: any [];
  showNavigationArrows = true;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public informacionService: InformacionService,
    private http: HttpClient
  ) {
     }

  ngOnInit() {
    this.cargarInformaciones();
    this.cargarInformacion();
  }

  cargarInformaciones(): void {
    this.informacionService.getInformaciones()
    .subscribe(result => {
              this.info = result;
              this.totalRegistros = this.info.length;
              console.log(this.totalRegistros);
    });
  }

  cargarInformacion() {
    this.informacionService.getInformacion(this.desde)
    .subscribe( res => {
      console.log(res);
      this.informaciones = res[0];

      this.fotos = res[0].foto.split(',');
      this.titulos = res[0].tituloFoto.split(';');
      console.log(this.fotos);
      console.log(this.fotos.length);

    });
  }

  moverse(valor: number) {
    // tslint:disable-next-line:prefer-const
    let desde  = this.desde + valor;
    console.log('aprete boton');
    if ( desde === 0) {
     return;
    }
    if (  desde > this.totalRegistros) {
      this.estado = 'disabled';
      return;
    }
    this.desde += valor;
    this.cargarInformacion();
  }

}
