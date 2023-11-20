import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Comentario } from 'src/app/models/Comentario';
import { Cubo } from 'src/app/models/Cubo';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-detallecubo',
  templateUrl: './detallecubo.component.html',
  styleUrls: ['./detallecubo.component.css']
})
export class DetallecuboComponent implements OnInit {
  public cubo !: Cubo;
  public idCubo !: number;
  public comentarios !: Array<Comentario>;

  constructor(private _service:ServiceCubos, private _activeRoute:ActivatedRoute){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros:Params)=>{
      if(parametros["id"]!=null){
        this.idCubo = parametros['id'];
        
        this._service.getCubo(this.idCubo).subscribe(response=>{
          this.cubo = response;
          console.log(this.cubo)
        })
        this._service.getComentarios(this.idCubo).subscribe(response=>{
          this.comentarios = response
        })
      }
    })


  }
}
