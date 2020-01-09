import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// Módulos
import { RouterModule } from '@angular/router';

// Componentes
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

// import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

// Servicios
// import { EventService } from '../service/service.index';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



@NgModule({
  imports: [
    // CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,

    BreadcrumbsComponent,
   // SidebarComponent,
     FooterComponent,
   NopagefoundComponent,

  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    // SidebarComponent,
    FooterComponent,
    NopagefoundComponent,
  ],
  providers: [
   // EventService
  ]
})
export class SharedModule { }
