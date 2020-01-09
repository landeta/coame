import { Component, OnInit, Input, ViewChild, ElementRef  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SidebarService } from '../../../../service/service.index';
import { Sidebar } from '../../../../models/sidebar';




@Component({
  selector: 'app-astronomia',
  templateUrl: './astronomia.component.html',
  styles: []
})

export class AstronomiaComponent implements OnInit {
  public id = null;
  public sidebar: Sidebar;
  public info: any;
  totalRegistros: number;
  public desde: number;
  public inputStr: any; // store input
  public  textInput: string; // store input after beging trim()med
  public  outputHtml: string; // store output
  public  counter: number;
  constructor(
      public sidebarService: SidebarService,
      private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
        this.id = this.route.snapshot.params.IdSidebar;
        console.log('Es this.id----> : ', this.id );
        this.route.params.subscribe(
          (params: Params) => {
            this.id = params.IdSidebar;
            console.log('dentro del observable : ', this.id);
            this.cargarInformacion();
          }
        );
        this.cargarInformaciones();
        this.cargarInformacion();
       // this.converter();
  }
  // tslint:disable-next-line:use-life-cycle-interface
  cargarInformaciones(): void {
    this.sidebarService.getSidebarEntradas()
    .subscribe(result => {
              this.info = result;
              this.totalRegistros = this.info.length;
              console.log(this.totalRegistros);
    });
  }
  cargarInformacion() {
    console.log('Entre dentro de cargarInformacion id:   .....', this.id);
    this.sidebarService.getSidebar(this.id)
    .subscribe( res => {
      console.log('Dentro de cargarInformacion', res[0]);
      this.sidebar = res[0];
    });

  }
}
