import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from '../../shared/services/usuario.service';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios: Array<Usuario>;

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.usuarios = this.usuarioService.listar();
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
