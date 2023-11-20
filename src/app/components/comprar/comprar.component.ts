import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cubo } from 'src/app/models/Cubo';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent {
  public checkToken!: boolean;
  public cubos !: Array<Cubo>;
  public cuboSeleccionado:any;

  constructor(private _service: ServiceCubos, private _router: Router){}


  ngOnInit(): void {
    this.checkToken = this.localStorageItem();
    if(!this.checkToken){
      this._service.getCubos().subscribe(response=>{
        this.cubos = response
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

  public enviarDatos():void {
    console.log(this.cuboSeleccionado);
    this._service.postCompra(this.cuboSeleccionado).subscribe(res=>{
      this._router.navigate(["/compras"]);
    })
  }

}
