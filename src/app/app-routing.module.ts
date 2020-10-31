import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CadastroUsuarioComponent} from './usuario/cadastro-usuario/cadastro-usuario.component';
import {ListagemUsuarioComponent} from './usuario/listagem-usuario/listagem-usuario.component';
import {ListagemUsuarioTabelaComponent} from './usuario/listagem-usuario-tabela/listagem-usuario-tabela.component';

const routes: Routes = [
  {
    path: 'cadastrarusuario',
    component: CadastroUsuarioComponent
  },
  {
    path: 'cadastrarusuario/:id',
    component: CadastroUsuarioComponent
  },
  {
    path: 'listarusuarios',
    component: ListagemUsuarioComponent
  },
  {
    path: 'listarusuariostabela',
    component: ListagemUsuarioTabelaComponent
  },
  {
    path: '',
    component: ListagemUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
