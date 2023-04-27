import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { API_URL } from '../config/api.config';
import { ResumoData } from '../models/resumo-data';
import { Country } from '../models/country';
import { CountryData } from '../models/country-data';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http : HttpClient) { }

  casesGlobal():Observable<ResumoData>{
    return this.http.get<ResumoData>(`${API_URL.baseURL}/api-covid/resumo`);
  }

  getPaises():Observable<Country[]>{
    return this.http.get<{Countries : Country[]}>(`${API_URL.baseURL}/api-covid/resumo`).pipe(
      map(res => res.Countries)
    );
  }

  getCountryData(countryName : string):Observable<CountryData>{
    return this.http.get<CountryData>(`${API_URL.baseURL}/api-covid/countries/${countryName}`).pipe(
      map((data:any) => data.pop())
    );
  }

}

