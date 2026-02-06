function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let doNum = parseInt(document.getElementById("doN").value);
  let ateNum = parseInt(document.getElementById("ateN").value);

    if (!alerta(doNum, ateNum)) {
    return; // para a função se tiver erro
    }

    if (!alerta2(quantidade, doNum, ateNum)) {
      return;
    }

    if (quantidade > (ateN - doN + 1)) {
    alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
    return;
  }
    
  let Sorteados = [];
  let numero;

  for (let i = 0; i < quantidade; i++) {
    numero = resultadoRdn(doNum, ateNum);

    while (Sorteados.includes(numero)) {
      numero = resultadoRdn(doNum, ateNum);
    }

    Sorteados.push(numero);
  }

  let resultadoSorteio = document.getElementById("numerosSorteados");
  resultadoSorteio.innerHTML = `<p id="numerosSorteados">${Sorteados}</p>`;

  alterarStatusBotao();
}

function resultadoRdn(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {}
// * apenas para alterar estilo do botao zera //

function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("doN").value = "";
  document.getElementById("ateN").value = "";

  document.getElementById("numerosSorteados").innerHTML = `<p id="numerosSorteados">nenhum ate agora</p>`;
}

// ? function ja serve como variavel//
function alerta(doN, ateN){
  if (doN > ateN){
    alert(`erro`);
    return false;
  }
  return true;
}

/* //!primeira tentativa
function alerta2(quantidade, doN, ateN){
  if (quantidade >= doN - ateN){
    alert(`erro2`);
    return false;
  }
  return true;
}
*/

//* jeito correto
function alerta2(quantidade, doN, ateN){
  const totalDisponivel = ateN - doN + 1;

  if (quantidade > totalDisponivel) {
    alert(`A quantidade é maior que o intervalo disponível`);
    return false;
  }
  return true;
}

