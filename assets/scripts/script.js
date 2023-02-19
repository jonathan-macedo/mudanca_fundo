const TEXTO = document.getElementById("text");
const BODY = document.getElementById("surroundings");
const CORPO = document.getElementById("content");
let date = new Date();

if (date.getHours() <= 11) {
    TEXTO.innerHTML = "Bom dia!";
    BODY.style.background = "#00dd9b"
    CORPO.innerHTML += "<p>Tenha um ótimo dia para quem está lendo esse conteúdo dinâmico. Apareça aqui novamente depois das 12h, ok?</p>"
} else if (date.getHours() <= 18) {
    TEXTO.innerHTML = "Boa tarde!";
    BODY.style.background = "#2e2eb8"
    CORPO.innerHTML += "<p>Fico feliz que tenha voltado para cá novamente! Apareça agora aqui depois das 18h, fechou? 👍    </p>"
} else {
    TEXTO.innerHTML = "Boa noite!";
    BODY.style.background = "#1e0057"
    CORPO.innerHTML += "<p>Já não é surpresa que você está de volta nessa página. Obrigado pela presença e voltermos em breve com novidades ❤️</p>"
}