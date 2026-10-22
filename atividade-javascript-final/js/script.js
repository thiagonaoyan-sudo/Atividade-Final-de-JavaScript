const contador = document.querySelector("#contador-tarefas");
const tarefas = document.querySelectorAll(".tarefa");
const botaoMotivacao = document.querySelector("#botao-motivacao");
const mensagem = document.querySelector("#mensagem-motivacional");
 
function atualizarContador() {
  let total = 0;
 
  tarefas.forEach(function (tarefa) {
    if (tarefa.classList.contains("tarefa-concluida")) {
      total++;
    }
  });
  contador.textContent = total + " de " + tarefas.length + " tarefas concluídas";
}
 
atualizarContador();
 
tarefas.forEach(function (tarefa) {
  const indicador = tarefa.querySelector(".indicador-estado");
  const botao = tarefa.querySelector(".botao-avancar");
 
  botao.addEventListener("click", function () {
    if (tarefa.classList.contains("tarefa-pendente")) {
        tarefa.classList.remove("tarefa-pendente");
        tarefa.classList.add("tarefa-andamento");
 
        indicador.classList.remove("estado-pendente");
        indicador.classList.add("estado-andamento");
 
        indicador.textContent = "Em andamento";
        botao.textContent = "Concluir tarefa";
    } else if (tarefa.classList.contains("tarefa-andamento")) {
        tarefa.classList.remove("tarefa-andamento");
        tarefa.classList.add("tarefa-concluida");
 
        indicador.classList.remove("estado-andamento");
        indicador.classList.add("estado-concluida");
 
        indicador.textContent = "Concluída";
        botao.textContent = "Recomeçar tarefa";
    } else if (tarefa.classList.contains("tarefa-concluida")) {
        tarefa.classList.remove("tarefa-concluida");
        tarefa.classList.add("tarefa-pendente");
 
        indicador.classList.remove("estado-concluida");
        indicador.classList.add("estado-pendente");
 
        indicador.textContent = "Pendente";
        botao.textContent = "Iniciar tarefa";
    }
    atualizarContador();
  });
});
 
const frases = [
  "Grandes aprendizados começam com pequenos passos.",
  "Cada exercício é uma oportunidade de descobrir algo novo.",
  "Com dedicação e prática, você chega mais longe.",
  "Errar faz parte do caminho de quem está aprendendo.",
  "Uma tarefa de cada vez: seu esforço está construindo resultados.",
  "Continue curioso e celebre cada progresso nos estudos."
];
 
botaoMotivacao.addEventListener("click", function () {
  const indice = Math.floor(Math.random() * frases.length);
  mensagem.textContent = frases[indice];
});
 
 