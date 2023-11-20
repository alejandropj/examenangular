import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public checkToken!: boolean;
  public usuario !: User;

  constructor(private _service: ServiceCubos){}


  ngOnInit(): void {
    this.checkToken = this.localStorageItem();
    if(!this.checkToken){
      this._service.getPerfil().subscribe(response=>{
        this.usuario = response
      })
    }

  }
  public localStorageItem(): boolean {
    if (localStorage.getItem("token") === null) {
      return true
    } else {
      return false;
    };
  }

}
