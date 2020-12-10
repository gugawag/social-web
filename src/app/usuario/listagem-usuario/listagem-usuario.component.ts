import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../shared/model/usuario';
import {Router} from '@angular/router';
import {UsuarioService} from '../../shared/services/usuario.service';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.scss']
})
export class ListagemUsuarioComponent implements OnInit {

  usuarios: Array<Usuario>;
  maioresIdade = false;

  constructor(private usuarioService: UsuarioService, private roteador: Router) {
  }

  ngOnInit(): void {
    this.atualizarListagem();
  }

  editar(usuario: Usuario): void {
    this.roteador.navigate(['cadastrarusuario', usuario.id]);
  }

  remover(usuario: Usuario): void {
    this.usuarioService.remover(usuario.id).subscribe(
      resposta => {
        const indxUsuarioARemover = this.usuarios.findIndex(u => u.cpf === usuario.cpf);
        if (indxUsuarioARemover > -1) {
          this.usuarios.splice(indxUsuarioARemover, 1);
        }
      }
    );

  }

  atualizarListagem(): void {
    if (this.maioresIdade) {
      // this.usuarioService.listarMaioresDeIdade().subscribe(
      //   usuarios => this.usuarios = usuarios
      // );
    } else {
      this.usuarioService.listar().subscribe(
        usuarios => this.usuarios = usuarios
      );
    }
  }
}
