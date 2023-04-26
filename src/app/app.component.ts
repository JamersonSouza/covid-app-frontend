import { Component, OnInit } from '@angular/core';
import { Usuario } from './models/usuario';
import { FormControl, Validators } from '@angular/forms';
import { UsuarioService } from './service/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'covid-app';


  ngOnInit(): void {

  }

}
