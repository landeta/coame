import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { AboutComponent,
         DashboardComponent,
         InformacionComponent,
         ObservatorioComponent,
         AstronomiaComponent,
         DesarrolloComponent,
         NopagefoundComponent } from './index.pages';
const pagesRoutes: Routes = [
  {
  path: '',
  component: PagesComponent,
    children : [
      { path: '', component: PagesComponent },
      { path: 'about', component: AboutComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'informacion', component: InformacionComponent },
      { path: 'observatorio', component: ObservatorioComponent },
      { path: 'astronomia', component: AstronomiaComponent },
      { path: 'astronomia/:IdSidebar', component: AstronomiaComponent },
      { path: 'desarrollo', component: DesarrolloComponent },
      { path: 'lna', component: DesarrolloComponent },
      { path: '**', component: NopagefoundComponent }
      // { path: '', redirectTo: 'dashboard', pathMatch : 'full' },
    ] },

];

export const PAGES_ROUTING = RouterModule.forChild(pagesRoutes);
