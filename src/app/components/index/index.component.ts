import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { CountryData } from 'src/app/models/country-data';
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
  selectPaises! : Country;
  OptionSelectPais! : Country;
  funcaoComparar : boolean = false;
  paisSelecionadoFirst!: string;
  paisSelecionadoSecond!: string;
  visible : boolean = false

  countryRes! : CountryData;
  countryResponse! : CountryData;

  constructor(private covidService : CovidService){}

  ngOnInit(): void {
    this.listCasesGlobal();
    this.getCountry();
    this.capturaPais(this.paisSelecionadoFirst);
    console.log('valor aqui: ',this.funcaoComparar);
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
      this.paises = res.map( (item:any) => {
        return item.Country
      });
    })
  }
  comparacaoButton():void{
    this.getDataCountryFirstSelect();
    this.getDataCountrySecondSelect();
  }

  capturaPais(event:any):void{
    this.paisSelecionadoFirst = event.value;
  }

  capturaOutroPais(event:any):void{
    this.paisSelecionadoSecond = event.value;
  }

  getDataCountryFirstSelect(){
          this.covidService.getCountryData(this.paisSelecionadoFirst).subscribe( (res) => {
                this.countryRes = res;
          })
  }

  getDataCountrySecondSelect(){
    this.covidService.getCountryData(this.paisSelecionadoSecond).subscribe( ( res ) => {
          this.countryResponse = res;
    })
  }

  openDialog(){
    this.funcaoComparar = true;
    console.log('aqui mudou : ', this.funcaoComparar)
    this.visible = true;
}
}
