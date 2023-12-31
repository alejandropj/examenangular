import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/Cubo';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cubos!: Array<Cubo>;

  constructor(private _service:ServiceCubos){}
  ngOnInit(): void {
    this._service.getCubos().subscribe(res=>{
      this.cubos = res
    })
  }

}
