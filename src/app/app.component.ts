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

  visible : boolean = false

  nome: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.required);
  senha: FormControl = new FormControl(null, Validators.required);



  usuario : Usuario = {
    id: '',
    nome: '',
    email: '',
    senha: '',
    dataCadastro: '',
  }

  constructor(private usuarioService : UsuarioService, private route : Router){}

  ngOnInit(): void {

  }
  openDialog(){
      this.visible = true;
  }

  cadastrarUsuario():void{
    this.usuarioService.create(this.usuario).subscribe( () => {
        console.log("Cadastrado com sucesso! " + this.usuario.nome)
    })
  }


}
