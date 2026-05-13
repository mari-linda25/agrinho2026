// Seleciona elementos do DOM
const slider = document.getElementById('impactSlider');
const impactValue = document.getElementById('impactValue');
const natureza = document.getElementById('natureza');
const producao = document.getElementById('producao');
const impactText = document.getElementById('impactText');

// Função para atualizar visual e texto
function atualizarImpacto() {
    const valor = parseInt(slider.value);
    impactValue.textContent = valor;

    // Altura da natureza e produção
    natureza.style.height = `${100 - valor}%`;
    producao.style.height = `${valor}%`;

    // Texto explicativo baseado no valor
    if (valor < 30) {
        impactText.textContent = "Baixa produção: a natureza está preservada, mas a produtividade pode ser insuficiente.";
        impactText.style.color = "#2e7d32"; // verde escuro
    } else if (valor < 70) {
        impactText.textContent = "Equilíbrio: produção sustentável e preservação ambiental.";
        impactText.style.color = "#f9a825"; // amarelo
    } else {
        impactText.textContent = "Alta produção: risco de impacto ambiental elevado!";
        impactText.style.color = "#c62828"; // vermelho
    }
}

// Evento para o slider
slider.addEventListener('input', atualizarImpacto);

// Inicializa o impacto ao carregar
window.addEventListener('load', atualizarImpacto);

// Pequena animação de pulso para chamar atenção
function pulseImpact() {
    producao.style.transform = "scaleY(1.05)";
    setTimeout(() => {
        producao.style.transform = "scaleY(1)";
    }, 400);
}

// Pulsar quando o slider é alterado
slider.addEventListener('change', pulseImpact);