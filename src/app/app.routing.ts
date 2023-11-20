import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { ComprarComponent } from "./components/comprar/comprar.component";
import { DetallecuboComponent } from "./components/detallecubo/detallecubo.component";
import { MarcaComponent } from "./components/marca/marca.component";
import { ComprasComponent } from "./components/compras/compras.component";

const appRoutes : Routes = [
    {
        path:"", component:HomeComponent
    },
    {
        path:"login", component:LoginComponent
    },
    {
        path:"registro", component:RegistroComponent
    },
    {
        path:"perfil", component:PerfilComponent
    },
    {
        path:"compras", component:ComprasComponent
    },
    {
        path:"comprar", component:ComprarComponent
    },
    {
        path:"detalle/:id", component:DetallecuboComponent
    },
    {
        path:"marca/:marca", component:MarcaComponent
    }
]

export const appRoutingProvider: any[] = [];

export const routing: ModuleWithProviders<any> =
    RouterModule.forRoot(appRoutes);
