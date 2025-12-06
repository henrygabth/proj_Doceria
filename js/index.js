function finalizarCompra() {
  const nome = document.getElementById('nomeCliente').value.trim();
  const quantidade = parseInt(document.getElementById('quantidadeCliente').value);
  const produtoSelecionado = document.querySelector('input[name="produto"]:checked');

  if (!nome || !produtoSelecionado || quantidade < 1) {
    alert("Preencha todos os campos corretamente.");
    return;
  }

  const nomeProduto = produtoSelecionado.value;
  const preco = parseFloat(produtoSelecionado.dataset.preco);
  const emoji = produtoSelecionado.dataset.emoji;
  const total = (preco * quantidade).toFixed(2);
  const imagens = emoji.repeat(quantidade);

  const resumoHTML = `
    <h2>DOCERIA Vai que Engorda</h2>
    <hr>
    Olá <b>${nome}</b><br>
    ${nomeProduto} – ${quantidade}x<br>
    <b>Valor total:</b> R$ ${total}<br>
    <div class="imagem-doce">${imagens}</div>
  `;

  document.getElementById("resumoCompra").innerHTML = resumoHTML;
}
