import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as ENV } from 'src/environments/environment';

export interface MisDatos {
  objectId?: string;
  updateAt?: string;
  createdAt?: string;
  ACL?: string;
  calle?: string;
  numero?: string;
  municipio?: string;
  estado?: string;
  pais?: string;
  idcard?: string;
  banco?: string;
  idUser?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MisDatosService {
  
  private url = ENV.API + 'classes/misDatos';
  private urlpost = ENV.API + 'misDatos';
  private headerGet = {
    "X-Parse-Application-Id": ENV.APP_ID,
    "X-Parse-REST-API-Key": ENV.API_SECRET,
  }
  private header = {
    "X-Parse-Application-Id": ENV.APP_ID,
    "X-Parse-REST-API-Key": ENV.API_SECRET,
    "X-Parse-Revocable-Session": "1",
    "Content-Type": "application/json"
  }


  constructor(
    private http: HttpClient
  ) { 

  }

  getMisDatos(){
    return this.http.get<[MisDatos]>(this.url, {headers: this.headerGet});
  }

  misDatosAdd(misDatos: MisDatos){
    return this.http.post(this.url, misDatos, {headers: this.header});
  }
}
