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
    return this.http.post(`${API_URL.baseURL}/login`, credenciais, {
        observe: 'response',
        responseType: 'text'
    });
  }

  successFulLogin(authToken : string){
    localStorage.setItem('token', authToken);
  }



}
