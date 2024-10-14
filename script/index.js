const loginForm = document.getElementById("loginForm");

// Função para validar e enviar o formulário de login
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = loginForm["name"].value;
    const email = loginForm["email"].value;

    if (name === "") {
        alert("Por favor, preencha seu nome.");
        return;
    }

    if (email === "") {
        alert("Por favor, preencha seu e-mail.");
        return;
    }

    // Redireciona para a página principal após o login bem-sucedido
    window.location.replace("./funcionario/vitrine_funcionario/index.html");
});
