import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../config/api.config';
import { ResumoData } from '../models/resumo-data';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http : HttpClient) { }

  casesGlobal():Observable<ResumoData>{
    return this.http.get<ResumoData>(`${API_URL.baseURL}/api-covid/resumo`);
  }
}
