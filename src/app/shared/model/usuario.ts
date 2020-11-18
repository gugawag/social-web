export class Usuario {
  id?: string;
  nome?: string;
  cpf?: string;
  idade?: number;

  constructor(id?: string, usuario: Usuario = {}) {
    this.id = id;
    this.cpf = usuario.cpf;
    this.nome = usuario.nome;
    this.idade = usuario.idade;
  }

}
