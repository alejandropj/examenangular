import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public checkToken!: boolean;
  public usuario !: User;
  public mensaje !: string;

  constructor(private _service: ServiceCubos, private _router: Router) {
    this.usuario = new User(1, "", "", "");

  }
  ngOnInit(): void {
    this.checkToken = this.localStorageItem();
  }
  public localStorageItem(): boolean {
    if (localStorage.getItem("token") === null) {
      return true
    } else {
      return false;
    };
  }

  enviarDatos() {
    console.log(this.usuario)
    this._service.registro(this.usuario).subscribe(response => {
      this.mensaje = "";
      //console.log(response)
      localStorage.setItem("token", response.response);
      this._router.navigate(["/perfil"]);
      console.log(response.response)
    }, err => {
      this.mensaje = "Error interno."
    })
  }

}
