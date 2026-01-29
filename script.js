// Cardápio inicial (depois o admin vai editar isso)
const pizzas = [
  { nome: "Calabresa", preco: 30 },
  { nome: "Frango com Catupiry", preco: 32 },
  { nome: "Portuguesa", preco: 35 }
];

const cardapio = document.getElementById("cardapio");

// Monta os cards
pizzas.forEach((p, i) => {
  cardapio.innerHTML += `
    <div class="pizza">
      <h3>${p.nome}</h3>
      <p>R$ ${p.preco},00</p>
      <label>
        <input type="checkbox" value="${p.nome} - R$${p.preco}">
        Selecionar
      </label>
    </div>
  `;
});

function finalizarPedido() {
  const selecionadas = [...document.querySelectorAll("input:checked")]
    .map(e => e.value);

  if (selecionadas.length === 0) {
    alert("Selecione pelo menos uma pizza");
    return;
  }

  let pedido = selecionadas.join("%0A");

  let msg =
`🍕 *NOVO PEDIDO*
%0A${pedido}
%0A
📍 Cidade: Beberibe`;

  window.open(
    "https://wa.me/5585996503011?text=" + msg
  );
}
