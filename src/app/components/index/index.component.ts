import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Country } from 'src/app/models/country';
import { CountryData } from 'src/app/models/country-data';
import { ResumoData } from 'src/app/models/resumo-data';
import { AuthserviceService } from 'src/app/service/authservice.service';
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



  constructor(private covidService : CovidService, private http : HttpClient,
     private authService : AuthserviceService,  private msg : MessageService,
     private route : Router){}

  ngOnInit(): void {
    this.listCasesGlobal();
    this.getCountry();
    this.capturaPais(this.paisSelecionadoFirst);
  }

  listCasesGlobal():void{
    this.covidService.casesGlobal().subscribe(res => {
      this.data = res;
     this.resumoDados = res;
     this.countryDados = this.resumoDados.Countries.find( x => x.CountryCode === 'BR');
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
    this.visible = true;
}

      enviarDadosBackEnd():void{
        this.covidService.saveDataCountry(this.countryRes).subscribe(res => {
          this.msg.add({severity: 'success', summary: 'Sucesso', detail: 'As informações foram salvas!'});
          console.log(res);
          this.covidService.saveDataCountry(this.countryResponse).subscribe( response => {
            console.log(response);
          })
        }, err => {
          this.msg.add({severity: 'danger', summary: 'Erro', detail: 'Houve um erro ao salvar as informações!'});
          console.log(err);
        });
      }

      logout(){
        this.msg.add({severity: 'danger', summary: 'Logout', detail: 'Sua conta foi desconectada!'});
        this.route.navigate(['']);
        this.authService.logout();

      }

}
