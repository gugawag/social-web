import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ListagemUsuarioComponent } from './listagem-usuario/listagem-usuario.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ListagemUsuarioTabelaComponent } from './listagem-usuario-tabela/listagem-usuario-tabela.component';
import {MatTableModule} from '@angular/material/table';
import {PipesModule} from '../shared/pipes/pipes.module';

@NgModule({
  declarations: [CadastroUsuarioComponent, ListagemUsuarioComponent, ListagemUsuarioTabelaComponent],
  exports: [
    CadastroUsuarioComponent,
    ListagemUsuarioComponent,
    ListagemUsuarioTabelaComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule,
    PipesModule
  ]
})
export class UsuarioModule { }
