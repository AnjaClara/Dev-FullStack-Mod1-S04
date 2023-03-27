class Person{
  constructor(nome,idade,altura){
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }

  apresentar(){
    console.log(`Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura`);
  }
}

class atualizePerson{
  constructor(nome,idade,altura,profissao){
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.profissao = profissao;
  }

  apresentar(){
    console.log(`Olá me chamo ${this.nome}, tenho ${this.idade} anos, ${this.altura} de altura e sou ${this.profissao}`);
  }
}

const pessoa1 = new atualizePerson("Ana", 21, 1.71, "Engenheira de Software");
pessoa1.apresentar();

const pessoa2 = new atualizePerson("Sidnei", 22, 1.85, "Desenvolvedor Software");
pessoa2.apresentar();


