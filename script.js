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

}