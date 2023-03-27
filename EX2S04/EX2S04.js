class Conta {
  constructor(saldo, senha) {
    this._saldo = saldo;
    this._senha = senha;
  }

  deposito(senha, valor) {
    if (senha !== this._senha) {
      console.log("Senha incorreta.");
      return;
    }
    this._saldo += valor;
    console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$ ${this._saldo.toFixed(2)}`);
  }

  retirada(senha, valor) {
    if (senha !== this._senha) {
      console.log("Senha incorreta.");
      return;
    }
    if (valor > this._saldo) {
      console.log("Saldo insuficiente.");
      return;
    }
    this._saldo -= valor;
    console.log(`Retirada de R$ ${valor.toFixed(2)} realizada com sucesso. Saldo atual: R$ ${this._saldo.toFixed(2)}`);
  }
}

const contaCorrente = new Conta(1500, "senha123");

contaCorrente.deposito("senha123", 500); 
contaCorrente.retirada("senha123", 300); 
contaCorrente.retirada("senhaerrada", 200);
contaCorrente.retirada("senha123", 200); 

