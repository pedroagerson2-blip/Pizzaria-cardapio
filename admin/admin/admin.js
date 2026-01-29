let pizzas = JSON.parse(localStorage.getItem("pizzas")) || [];

const lista = document.getElementById("lista");

function salvar() {
  localStorage.setItem("pizzas", JSON.stringify(pizzas));
}

function render() {
  lista.innerHTML = "";
  pizzas.forEach((p, i) => {
    lista.innerHTML += `
      <li>
        ${p.nome} - R$ ${p.preco}
        <button onclick="remover(${i})">❌</button>
      </li>
    `;
  });
}

function adicionar() {
  const nome = document.getElementById("nome").value;
  const preco = document.getElementById("preco").value;

  if (!nome || !preco) {
    alert("Preencha tudo");
    return;
  }

  pizzas.push({ nome, preco });
  salvar();
  render();

  document.getElementById("nome").value = "";
  document.getElementById("preco").value = "";
}

function remover(i) {
  pizzas.splice(i, 1);
  salvar();
  render();
}

render();
