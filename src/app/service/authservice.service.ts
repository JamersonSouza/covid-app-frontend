import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { API_URL } from '../config/api.config';
import { Credenciais } from '../models/credenciais';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  jwtService : JwtHelperService = new JwtHelperService();

  constructor(private http : HttpClient) { }

  authenticate(credenciais : Credenciais){
    return this.http.post(`${API_URL.baseURL}/user/login`, credenciais, {
        observe: 'response',
        responseType: 'text'
    });
  }

  successFullLogin(authToken : string | undefined){
    localStorage.setItem('token', authToken!);
  }

  isAuthenticated(){
    let token = localStorage.getItem('token')
    if(token != null){
      //token não está expirado e retorna um true;
       return !this.jwtService.isTokenExpired(token)
    }
    return false;
  }

  logout(){
    localStorage.clear()
  }

}
