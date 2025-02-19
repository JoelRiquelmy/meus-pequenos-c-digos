document.getElementById("formulario").addEventListener("submit", function(e) {
    event.preventDefault();
    
    let campoA = parseFloat(document.getElementById("campoA").value);
    let campoB = parseFloat(document.getElementById("campoB").value);
    let mensagem = document.getElementById("mensagem");
    
    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido! O número B é maior que o número A.";
        mensagem.className = "mensagem sucesso";
    } else {
        mensagem.textContent = "Erro: O número B deve ser maior que o número A.";
        mensagem.className = "mensagem erro";
    }
});