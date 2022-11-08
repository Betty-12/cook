import { Injectable } from '@angular/core';
import { environment as ENV } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

export interface AuthLogin {
  objectId?: string;
  username?: string;
  email?: string;
  telefono?: string;
  password?: string;
  updateAt?: string;
  createdAt?: string;
  ACL?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private url = ENV.API + 'classes/users';
  private urlo = ENV.API + 'login';
  private headerGet = {
    "X-Parse-Application-Id": ENV.APP_ID,
    "X-Parse-REST-API-Key": ENV.API_SECRET,
    "X-Parse-Revocable-Session": "1",
    "Content-Type": "application/json"
  }

  constructor(
    private http: HttpClient
  ) { }


  authService(){
    return this.http.get<[AuthLogin]>(this.url, {headers: this.headerGet});
  }

  authServiceGet(usuario){
    return this.http.get<[AuthLogin]>(this.urlo, {params: usuario, headers: this.headerGet});
  }

}

