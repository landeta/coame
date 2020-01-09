import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AboutComponent } from './pages/components/about/about.component';

const APP_ROUTES: Routes = [

  { path: 'about', component: AboutComponent},
  { path: '**', component: NopagefoundComponent }

];
// Exportar el módulo de Routng
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash : true});
