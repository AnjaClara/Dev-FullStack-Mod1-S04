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

class ContaPoupanca extends Conta {
  constructor(saldo, senha) {
    super(saldo, senha);
  }

  atualizaJuros() {
    const juros = this._saldo * 0.007;
    this._saldo += juros;
    console.log(`Juros de R$${juros.toFixed(2)} adicionados. Saldo atual: R$${this._saldo.toFixed(2)}`);
  }
}

class poupancaPremium extends ContaPoupanca{
  constructor(saldo,senha ){
    super(saldo,senha)
  }

  atualizaJuros(){
    const juros = this._saldo * 0.012;
    this._saldo += juros;
    console.log(`Juros de R$${juros.toFixed(2)} adicionados. Saldo atual: R$${this._saldo.toFixed(2)}`);
  }
}

const contaPoupanca = new poupancaPremium(1500, "senha123");
contaPoupanca.deposito("senha123", 500); 
contaPoupanca.retirada("senha123", 700); 
contaPoupanca.atualizaJuros(); 