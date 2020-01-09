import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Servicios
import { HeaderService,
         SidebarService,
         InformacionService,
        } from '../service/service.index';

// Rutas
import { PAGES_ROUTING } from './pages.routes';

// Componentes
import { PagesComponent } from './pages.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ObservatorioComponent } from './components/observatorio/observatorio.component';
import { AstronomiaComponent } from './components/sidebar/astronomia/astronomia.component';
import { DesarrolloComponent } from './components/actividades/desarrollo/desarrollo.component';
import { TransistorComponent } from './components/actividades/transistor/transistor.component';
import { NopagefoundComponent } from '../nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    PagesComponent,
    AboutComponent,
    DashboardComponent,
    SidebarComponent,
    InformacionComponent,
    ObservatorioComponent,
    AstronomiaComponent,
    DesarrolloComponent,
    TransistorComponent,
    NopagefoundComponent,
  ],
  exports: [
    PagesComponent,
    AboutComponent,
    DashboardComponent,
    SidebarComponent,
    InformacionComponent,
    AstronomiaComponent,
    NopagefoundComponent,
  ],
  imports: [
    CommonModule,
    PAGES_ROUTING,
    SharedModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ],
  providers: [
    HeaderService,
    SidebarService,
    InformacionService,

  ]
})
export class PagesModule { }

