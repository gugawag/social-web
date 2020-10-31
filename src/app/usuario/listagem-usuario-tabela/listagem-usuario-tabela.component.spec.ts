import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemUsuarioTabelaComponent } from './listagem-usuario-tabela.component';

describe('ListagemUsuarioTabelaComponent', () => {
  let component: ListagemUsuarioTabelaComponent;
  let fixture: ComponentFixture<ListagemUsuarioTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemUsuarioTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemUsuarioTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
