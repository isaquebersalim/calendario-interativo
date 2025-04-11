function colorirDia(){
    // Pegar valor do campo dia
    let days = document.getElementById('days').value;

    // Pegar o valor do campo de cor
    let color = document.getElementById('color').value;

    // Pega os elementos da tabela calendário
    let calendar = document.getElementById('calendar');

      // Verifica se o campo de dia foi preenchido
      if(!days){
        alert('Favor informar o dia');
    }
    else if((days > 0) && (days < 31)){
        // Se o número de dias está no intervalo valor, aplicará a cor na célula do calendário
        let td = calendar.getElementsByTagName('td')[parseInt(days)+1];
        td.style.backgroundColor = color;
    }
    else{
        alert('Favor informar um dia do calendário');
    }


}


