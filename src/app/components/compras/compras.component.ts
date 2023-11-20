import { Component } from '@angular/core';
import { Compra } from 'src/app/models/Compra';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent {
  public checkToken!: boolean;
  public compras !: Array<Compra>;

  constructor(private _service: ServiceCubos){}


  ngOnInit(): void {
    this.checkToken = this.localStorageItem();
    if(!this.checkToken){
      this._service.getCompras().subscribe(response=>{
        this.compras = response
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
