import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { ResumoData } from 'src/app/models/resumo-data';
import { CovidService } from 'src/app/service/covid.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{

  resumoDados! : ResumoData;
  countryDados! : Country | undefined;
  data : any;
  paises! : Country[];

  constructor(private covidService : CovidService){}

  ngOnInit(): void {
    this.listCasesGlobal();
    this.getCountry();
  }

  listCasesGlobal():void{
    this.covidService.casesGlobal().subscribe(res => {
      this.data = res;
     this.resumoDados = res;
     this.countryDados = this.resumoDados.Countries.find( x => x.CountryCode === 'BR');
     console.log('Dados do BR',this.countryDados);
    })
  }

  getCountry():void{
    this.covidService.getPaises().subscribe( res => {
      this.paises = res;
    })
  }
  comparacao():void{

  }

}
