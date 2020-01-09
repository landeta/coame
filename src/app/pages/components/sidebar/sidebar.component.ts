import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { NgbCarousel} from '@ng-bootstrap/ng-bootstrap';
import { InformacionService } from '../../../service/service.index';
import {  SidebarService } from '../../../service/service.index';
import { Informacions } from '../../../models/informacion';

import { Sidebar } from '../../../models/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],

})

export class SidebarComponent implements OnInit {
  @Input() sidebar: Sidebar;
  public sidebares: Sidebar;
  public info: any;
  public infos: any;
  totalRegistros: number;
  restoRegistros: number;
  desde = 1;
  public estado: string ;
  public inputStr: any; // store input
  public  textInput: string; // store input after beging trim()med
  public  outputHtml: string; // store output
  public  counter: number;
  constructor(
    public sidebarService: SidebarService,
    ) {

  }

  ngOnInit() {
    this.cargarSidebarEntradas();
    this.cargarSidebar();
    this.cargarSidebarItems();
  }

  cargarSidebarEntradas(): any {
    this.sidebarService.getSidebarEntradas()
    .subscribe(result => {
              this.info = result;
              this.totalRegistros = this.info.length;
              console.log( 'esto es total registros 1', this.totalRegistros);
              console.log(  'esto es info 1', this.info); });
  }
  cargarSidebarItems(): any {
    this.sidebarService.getSidebarItems_(this.desde)
    .subscribe(result => {
              this.info = result;
              this.restoRegistros = this.info.length;
              console.log( 'esto es total registros 1', this.totalRegistros);
              console.log(  'esto es info 1', this.info); });
  }
  cargarSidebar() {
    this.sidebarService.getSidebar(this.desde)
    .subscribe( res => {
      this.sidebar = res[0];
      console.log( 'esto es sidebar', this.sidebar);
    });

  }

  moverse(valor: number) {
    // tslint:disable-next-line:prefer-const
    let desde  = this.desde + valor;
    if ( desde <= 0) {
      desde = 1;
      this.estado = 'disabled';
      return;
    }
    if ( desde < this.totalRegistros) {
      this.desde = desde;
      this.cargarSidebarItems();
      return;
    }
    if ( desde >= this.totalRegistros) {
      this.desde -= this.totalRegistros - this.restoRegistros;
      this.estado = 'disabled';
      this.desde = desde;
      this.cargarSidebarItems();
      return;
    }
  }

}


