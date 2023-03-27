class CaixaRegistradora {
  constructor() {
    this.produtos = [];
    this.cliente = null;
    this.conta = {};
  }

  adicionarProduto(codigoBarra, preco, nome) {
    const novoProduto = { codigoBarra, preco, nome };
    this.produtos.push(novoProduto);
    return novoProduto;
  }

  iniciarAtendimento(nomeCliente) {
    this.cliente = nomeCliente;
  }

  adicionarItem(codigoBarra, quantidade) {
    const produto = this.produtos.find((p) => p.codigoBarra === codigoBarra);
    if (!produto) {
      return false;
    }
    const valorItem = produto.preco * quantidade;
    if (!this.conta[codigoBarra]) {
      this.conta[codigoBarra] = { produto: produto, quantidade: quantidade, valor: valorItem };
    } else {
      this.conta[codigoBarra].quantidade += quantidade;
      this.conta[codigoBarra].valor += valorItem;
    }
    return true;
  }

  calcularTotalConta() {
    let total = 0;
    for (let codigoBarra in this.conta) {
      total += this.conta[codigoBarra].valor;
    }
    return total;
  }

  fecharConta(dinheiro) {
    const totalConta = this.calcularTotalConta();
    const troco = dinheiro - totalConta;
    this.produtos = [];
    this.cliente = null;
    this.conta = {};
    return { totalConta, troco };
  }
}

const caixa = new CaixaRegistradora();

function adicionarProdutoAoHTML(produto) {
  const divProdutosAdicionados = document.getElementById("produtosAdicionados");
  const ul = document.createElement("ul");
  const liCodigoBarra = document.createElement("li");
  liCodigoBarra.textContent = `Código de Barra: ${produto.codigoBarra}`;
  ul.appendChild(liCodigoBarra);
  const liPreco = document.createElement("li");
  liPreco.textContent = `Preço: R$${produto.preco.toFixed(2)}`;
  ul.appendChild(liPreco);
  const liNome = document.createElement("li");
  liNome.textContent = `Nome: ${produto.nome}`;
  ul.appendChild(liNome);
  divProdutosAdicionados.appendChild(ul);
}

document.getElementById("adicionarProdutoBtn").addEventListener("click", () => {
  const codigoBarra = Number(document.getElementById("codigoBarra").value);
  const preco = Number(document.getElementById("preco").value);
  const nome = document.getElementById("nome").value;
  const produto = caixa.adicionarProduto(codigoBarra, preco, nome);
  if (produto) {
    adicionarProdutoAoHTML(produto);
  } else {
    alert("Produto já cadastrado!");
  }
});

document.getElementById("iniciarAtendimentoBtn").addEventListener("click", () => {
  const nomeCliente = document.getElementById("nomeCliente").value;
  caixa.iniciarAtendimento(nomeCliente);
  document.getElementById("resultado").textContent = `Atendimento iniciado para o cliente ${nomeCliente}.`;
});

document.getElementById("adicionarItemBtn").addEventListener("click", () => {
  const codigoBarra = Number(document.getElementById("codigoBarraItem").value);
  const quantidade = Number(document.getElementById("quantidade").value);
  const adicionado = caixa.adicionarItem(codigoBarra, quantidade);
  if (adicionado) {
    document.getElementById("resultado").textContent = `Produto adicionado: ${quantidade}x ${caixa.conta[codigoBarra].produto.nome}`;
  } else {
    document.getElementById("resultado").textContent =`Produto não encontrado.`; 
  }
  });
  
  document.getElementById("calcularTotalBtn").addEventListener("click", () => {
  const totalConta = caixa.calcularTotalConta();
  document.getElementById("resultado").textContent = `Total da conta: R$${totalConta.toFixed(2)}`;
  });
  
  document.getElementById("fecharContaBtn").addEventListener("click", () => {
  const dinheiro = Number(document.getElementById("dinheiro").value);
  const troco = caixa.fecharConta(dinheiro);
  document.getElementById("produtosAdicionados").innerHTML = "";
  document.getElementById("resultado").textContent = `Conta fechada! Total: R$${troco.totalConta.toFixed(2)}. Troco: R$${troco.troco.toFixed(2)}.`;
  });
