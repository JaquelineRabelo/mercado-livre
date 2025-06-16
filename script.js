// Espera o site carregar completamente antes de rodar o código
document.addEventListener("DOMContentLoaded", function () {
  
  // Seleciona todos os formulários da página
  var formularios = document.querySelectorAll("form");

  //validação
  formularios.forEach(function (formulario) {

    // Quando o formulário for enviado (clicar em "Cadastrar", por exemplo)
    formulario.addEventListener("submit", function (evento) {

      evento.preventDefault();

      // Pegamos todos os campos do formulário (input e textarea)
      var campos = formulario.querySelectorAll("input, textarea");

      var formularioValido = true; // começa como verdadeiro

      // Verifica cada campo
      campos.forEach(function (campo) {

        // Se o campo for obrigatório e estiver vazio
        if (campo.hasAttribute("required") && campo.value.trim() === "") {
          campo.style.borderColor = "red"; // muda a borda para vermelho
          formularioValido = false; // marca que o formulário está com erro
        } else {
          campo.style.borderColor = "#444"; // volta para a borda normal
        }
      });

      // Se tiver algum campo vazio, mostra alerta e não envia
      if (!formularioValido) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return; // sai da função, não continua
      }

      // Se passou na validação, mostra mensagem de sucesso
      alert("Cadastro realizado com sucesso!");

      // Opcional: limpa o formulário após o envio
      // formulario.reset();
    });
  });

  // Verifica se a página tem o checkbox de disponibilidade do produto
  var checkboxDisponivel = document.querySelector("#disponibilidade-produto");

  // Se existir o checkbox, adiciona um evento quando mudar o valor
  if (checkboxDisponivel) {
    checkboxDisponivel.addEventListener("change", function () {
      // Verifica se está marcado ou não
      if (checkboxDisponivel.checked) {
        alert("Produto está agora disponível para venda.");
      } else {
        alert("Produto está agora indisponível para venda.");
      }
    });
  }

});
