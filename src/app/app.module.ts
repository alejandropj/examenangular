import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

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
import { ServiceCubos } from './services/service.cubos';

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
    HttpClientModule,
    FormsModule,
    BrowserModule,
    routing
  ],
  providers: [appRoutingProvider,ServiceCubos],
  bootstrap: [AppComponent]
})
export class AppModule { }
