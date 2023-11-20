import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";
import { User } from "../models/User";
import { UserLogin } from "../models/UserLogin";


@Injectable()
export class ServiceCubos{
    constructor(private _http:HttpClient){}

    login(usuario:UserLogin):Observable<any>{
        var json = JSON.stringify(usuario);
        var header = new HttpHeaders().set("content-type","application-json");

        var request = "api/Manage/Login";
        var url = environment.urlCubos + request;

        return this._http.post(url,usuario);
    }
    registro(usuario:User):Observable<any>{
        var json = JSON.stringify(usuario);
        var header = new HttpHeaders().set("content-type","application-json");

        var request = "api/Manage/RegistroUsuario";
        var url = environment.urlCubos + request;

        return this._http.post(url,usuario);
    }
    getToken():HttpHeaders{
        const headers = new HttpHeaders({
            "Authorization":"Bearer "+localStorage.getItem("token"),
            "Content-Type":"application/json"
        })
        return headers
    }

    getPerfil():Observable<any>{
        var request = "api/Manage/PerfilUsuario";
        var url = environment.urlCubos + request;
        var headers = this.getToken();

        return this._http.get(url,{headers});
    }
    getCompras():Observable<any>{
        var request = "api/Compra/ComprasUsuario";
        var url = environment.urlCubos + request;
        var headers = this.getToken();

        return this._http.get(url,{headers});
    }
    getCubos():Observable<any>{
        var request = "api/Cubos";
        var url = environment.urlCubos + request;

        return this._http.get(url);
    }
    getMarcas():Observable<any>{
        var request = "api/Cubos/Marcas";
        var url = environment.urlCubos + request;

        return this._http.get(url);
    }
    getCubo(id:number):Observable<any>{
        var request = "api/Cubos/"+id;
        var url = environment.urlCubos + request;

        return this._http.get(url);
    }
    getMarcaCubos(marca:string):Observable<any>{
        var request = "api/Cubos/CubosMarca/"+marca;
        var url = environment.urlCubos + request;

        return this._http.get(url);
    }
    getComentarios(id:number):Observable<any>{
        var request = "api/ComentariosCubo/GetComentariosCubo/"+id;
        var url = environment.urlCubos + request;

        return this._http.get(url);
    }

}