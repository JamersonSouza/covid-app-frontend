import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Credenciais } from 'src/app/models/credenciais';
import { Usuario } from 'src/app/models/usuario';
import { AuthserviceService } from 'src/app/service/authservice.service';
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

  loginUser : Credenciais = {
    email: '',
    senha: ''
  }

  usuario : Usuario = {
    id: '',
    nome: '',
    email: '',
    senha: '',
    dataCadastro: new Date().getDate,
  }


  constructor(private userService : UsuarioService, private msg : MessageService,
     private loginService : AuthserviceService, private rout : Router){}

  ngOnInit(): void {
  }

  openDialog(){
    this.visible = true;
}

create(): void{
    this.userService.create(this.usuario).subscribe( () => {
      this.msg.add({severity: 'success', summary: 'Novo usuário', detail: 'Cadastro realizado com sucesso!'});
    })
  }

  login():void{
    this.loginService.authenticate(this.loginUser).subscribe( res => {
      this.loginService.successFullLogin(res.headers.get('Authorization')?.substring(7));
      this.rout.navigate(['index']);
    })
  }

}
