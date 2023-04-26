import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http : HttpClient) { }

  casesGlobal():Observable<any[]>{
    return this.http.get<any[]>(`${API_URL.baseURL}/api-covid/resumo`);
  }
}
