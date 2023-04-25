import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'covid-app';

  visible : boolean = false

  constructor(){}

  ngOnInit(): void {
  }
  openDialog(){
      this.visible = true;
  }


}
