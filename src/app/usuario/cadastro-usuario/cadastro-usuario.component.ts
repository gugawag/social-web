import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../shared/model/usuario';
import {USUARIOS} from '../../shared/model/USUARIOS';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: Usuario;
  usuarios: Array<Usuario>;

  constructor() {
    this.usuario = new Usuario();
    this.usuarios = USUARIOS;
  }

  ngOnInit(): void {
  }

  inserirUsuario(): void {
    this.usuarios.push(this.usuario);
    this.usuario = new Usuario();
  }

}
