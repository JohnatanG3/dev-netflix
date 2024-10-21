let botaoSom = document.querySelector('.botao-som');
let video = document.querySelector('.video');
let modal = document.querySelector('.modal');
let linkInformacoes = document.querySelector('.link-informacoes');
let audio = document.querySelector('.audio');

botaoSom.addEventListener('click', ligarSom);

function ligarSom() {
    video.muted = !video.muted; // Alterna entre som ligado e mutado
    atualizarIconeSom(); // Atualiza o ícone do botão de som
}

function atualizarIconeSom() {
    if (video.muted) {
        botaoSom.textContent = '🔇'; // Emoji de som mutado
    } else {
        botaoSom.textContent = '🔊'; // Emoji de som ligado
    }
}

function mostrarModal() {
    modal.style.display = 'block'; // Exibe o modal
}

function fecharModal() {
    modal.style.display = 'none'; // Oculta o modal
}

// Adicionar um evento para fechar o modal clicando fora dele
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        fecharModal();
    }
});

function tocarAudio() {
    audio.play();
}

window.addEventListener('load', tocarAudio);