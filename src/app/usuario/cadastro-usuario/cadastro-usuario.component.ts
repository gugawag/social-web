import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from '../../shared/services/usuario.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent implements OnInit {

  usuario: Usuario;

  operacaoCadastro = true;

  constructor(private usuarioService: UsuarioService, private rotalAtual: ActivatedRoute, private roteador: Router) {
    this.usuario = new Usuario();
    if (this.rotalAtual.snapshot.paramMap.has('id')) {
      this.operacaoCadastro = false;
      const idParaEdicao = Number(this.rotalAtual.snapshot.paramMap.get('id'));
      // pegar do banco usuario id=idParaEdicao
      this.usuarioService.pesquisarPorId(idParaEdicao).subscribe(
        usuarioRetornado => this.usuario = usuarioRetornado
      );
    }
  }

  ngOnInit(): void {
  }

  inserirUsuario(): void {
    if (this.usuario.id) {
      this.usuarioService.atualizar(this.usuario).subscribe(
        usuarioAlterado => {
          console.log(usuarioAlterado);
          this.roteador.navigate(['listarusuarios']);
        }
      );
    } else {
      this.usuarioService.inserir(this.usuario).subscribe(
        usuarioInserido => {
          console.log(usuarioInserido);
          this.roteador.navigate(['listarusuarios']);
        }
      );
    }
  }
}
