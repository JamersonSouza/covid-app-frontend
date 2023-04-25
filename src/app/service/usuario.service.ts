import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { API_URL } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) { }

  create(usuario : Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${API_URL.baseURL}/user/cadastro`, usuario);
  }
}
