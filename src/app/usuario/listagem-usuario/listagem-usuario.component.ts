import {Component, OnInit} from '@angular/core';
import {USUARIOS} from '../../shared/model/USUARIOS';
import {Usuario} from '../../shared/model/usuario';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios = USUARIOS;

  constructor() {
  }

  ngOnInit(): void {
  }

  editar(usuario: Usuario): void {
    usuario.nome += ' Alterado';
  }

  remover(usuario: Usuario): void {
    const indxUsuarioARemover = this.usuarios.findIndex(u => u.cpf === usuario.cpf);
    if (indxUsuarioARemover > -1) {
      this.usuarios.splice(indxUsuarioARemover, 1);
    }
  }

}
