import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/UserLogin';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public checkToken!: boolean;
  public usuario !: UserLogin;
  public mensaje !: string;
  constructor(private _service: ServiceCubos, private _router: Router) {
    this.usuario = new UserLogin("", "");
    //this.token = localStorage.getItem("token");

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
    this._service.login(this.usuario).subscribe(response => {
      this.mensaje = "";
      localStorage.setItem("token", response.response);
      this._router.navigate(["/perfil"]);
      console.log(response.response)
    }, err => {
      this.mensaje = "Credenciales no válidas."
    })
  }

}
