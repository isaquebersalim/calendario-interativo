function colorirDia() {
    let days = document.getElementById('days').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');

    if (!days) {
        alert('Favor informar o dia');
        return;
    }

    if (days < 1 || days > 30) {
        alert('Favor informar um dia do calendário');
        return;
    }

    // Corrige o índice da célula
    let td = calendar.getElementsByTagName('td')[parseInt(days) + 1];
    td.style.backgroundColor = color;

    // Atualiza os contadores imediatamente
    atualizarContadores();
}

function atualizarContadores() {
    let elementos = document.querySelectorAll('td');
    let contadorAzul = 0, contadorVerde = 0, contadorRosa = 0, contadorRoxo = 0;

    for (let i = 0; i < elementos.length; i++) {
        let corEstilo = elementos[i].style.backgroundColor;

        if (corEstilo === "LightBlue" || corEstilo === "lightblue") {
            contadorAzul++;
        } else if (corEstilo === "PaleGreen" || corEstilo === "palegreen") {
            contadorVerde++;
        } else if (corEstilo === "LightPink" || corEstilo === "lightpink") {
            contadorRosa++;
        } else if (corEstilo === "SlateBlue" || corEstilo === "slateblue") {
            contadorRoxo++;
        }
    }

    document.getElementById('contAzul').innerText = contadorAzul;
    document.getElementById('contVerde').innerText = contadorVerde;
    document.getElementById('contRosa').innerText = contadorRosa;
    document.getElementById('contRoxo').innerText = contadorRoxo;
}
