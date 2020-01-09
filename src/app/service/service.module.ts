import { NgModule, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService,
  SharedService,
  HeaderService,
  SidebarService,
  InformacionService
} from './service.index';

@Injectable()
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SharedService,
    HeaderService,
    SidebarService,
    InformacionService,
  ],
  declarations: []
})
export class ServiceModule { }
