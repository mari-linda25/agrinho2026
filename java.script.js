// Seleciona elementos
const slider = document.getElementById('impactSlider');
const impactValue = document.getElementById('impactValue');
const natureza = document.getElementById('natureza');
const producao = document.getElementById('producao');

// Atualiza valores quando o slider é movido
slider.addEventListener('input', () => {
    const value = parseInt(slider.value);
    impactValue.textContent = value;

    // O "verde" representa natureza, "amarelo" produção
    natureza.style.height = `${100 - value}%`;
    producao.style.height = `${value}%`;
});