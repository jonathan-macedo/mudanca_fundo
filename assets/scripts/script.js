const TEXT = document.querySelector("#text");
const BODY = document.querySelector("#surroundings");
const CONTENT = document.querySelector("#content");
let date = new Date();

if (date.getHours() <= 11) {
    TEXT.innerHTML = "Bom dia!";
    BODY.style.background = "#00dd9b"
    CONTENT.innerHTML += "<p>Tenha um ótimo dia para quem está lendo esse conteúdo dinâmico. Apareça aqui novamente depois das 12h, ok?</p>"
} else if (date.getHours() <= 18) {
    TEXT.innerHTML = "Boa tarde!";
    BODY.style.background = "#2e2eb8"
    CONTENT.innerHTML += "<p>Fico feliz que tenha voltado para cá novamente! Apareça agora aqui depois das 18h, fechou? 👍    </p>"
} else {
    TEXT.innerHTML = "Boa noite!";
    BODY.style.background = "#1e0057"
    CONTENT.innerHTML += "<p>Já não é surpresa que você está de volta nessa página. Obrigado pela presença e voltermos em breve com novidades ❤️</p>"
}