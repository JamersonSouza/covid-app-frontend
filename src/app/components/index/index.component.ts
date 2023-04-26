import { Component, OnInit } from '@angular/core';
import { CovidService } from 'src/app/service/covid.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{


  data : any;

  constructor(private covidService : CovidService){}

  ngOnInit(): void {
    this.listCasesGlobal();
  }

  listCasesGlobal():void{
    this.covidService.casesGlobal().subscribe(res => {
      this.data = res;
      console.log(this.data);
    })
  }

}
