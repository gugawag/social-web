import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from '../../shared/services/usuario.service';
import {MatTableDataSource} from '@angular/material/table';
import {UsuarioFirestoreService} from '../../shared/services/usuario-firestore.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listagem-usuario-tabela',
  templateUrl: './listagem-usuario-tabela.component.html',
  styleUrls: ['./listagem-usuario-tabela.component.scss']
})
export class ListagemUsuarioTabelaComponent implements OnInit {

  dataSource: MatTableDataSource<Usuario>;
  mostrarColunas = ['nome', 'cpf', 'idade', 'acoes'];

  constructor(private usuarioService: UsuarioFirestoreService, private roteador: Router) {
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => this.dataSource = new MatTableDataSource(usuarios)
    );
  }

  filtrar(texto: string): void {
    this.dataSource.filter = texto.trim().toLowerCase();
  }

  apagar(id: string): void {
    this.usuarioService.remover(id).subscribe(
      apagado => {
        const indx = this.dataSource.data.findIndex(usuario => usuario.id === id);
        if (indx > -1) {
          this.dataSource.data.splice(indx, 1);
          this.dataSource = new MatTableDataSource<Usuario>(this.dataSource.data);
        }
      }
    );
  }

  editar(usuario: Usuario): void {
    this.roteador.navigate(['cadastrarusuario', usuario.id]);
  }

}
