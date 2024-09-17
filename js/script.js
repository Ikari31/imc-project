function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (!peso || !altura) {
        alert('Por favor, insira peso e altura válidos.');
        return;
    }

    const imc = peso / (altura * altura);
    let categoria = '';

    if (imc < 18.5) {
        categoria = 'Baixo peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidade';
    }

    document.getElementById('resultado').innerText = `Seu IMC é ${imc.toFixed(2)} (${categoria})`;
}

function toggleMenu() {
    const menuList = document.getElementById('menu-list');
    if (menuList.style.display === 'flex') {
        menuList.style.display = 'none';
    } else {
        menuList.style.display = 'flex';
    }
}
