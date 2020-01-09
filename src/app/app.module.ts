import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// Rutas
import { APP_ROUTING } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';


// Servicios
import { ServiceModule } from './service/service.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

  ],
  exports: [
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ServiceModule
  ],

  bootstrap: [
    AppComponent]
})
export class AppModule { }
