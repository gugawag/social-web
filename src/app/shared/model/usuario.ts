export class Usuario {
  id?: number;
  nome?: string;
  cpf?: string;
  idade?: number;

  constructor(id?: number, usuario: Usuario = {}) {
    this.id = id;
    this.cpf = usuario.cpf;
    this.nome = usuario.nome;
    this.idade = usuario.idade;
  }

}
