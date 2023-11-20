import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MarcaComponent } from './components/marca/marca.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ComprarComponent } from './components/comprar/comprar.component';
import { DetallecuboComponent } from './components/detallecubo/detallecubo.component';
import { ComprasComponent } from './components/compras/compras.component';
import { appRoutingProvider, routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent,
    MarcaComponent,
    PerfilComponent,
    ComprarComponent,
    DetallecuboComponent,
    ComprasComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
