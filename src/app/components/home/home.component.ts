import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  visible : boolean = false

  nome: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
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
