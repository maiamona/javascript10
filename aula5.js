

// fetch('pessoas.json')// utilizando o 'Fetch API'
// .then(resposta => resposta.json())// pegamos a resposta e convertemos para 'json'
// .then(json => {
//     // console.log(json);
// carregaElementosNaPagina(json)
// });

axios('pessoas.json')// utilizando o 'Axios'
.then(resposta => {
    // resposta.data;
    carregaElementosNaPagina(resposta.data)
});

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    for (let pessoa of json) {
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        // console.log(pessoa.nome);
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3);
        table.appendChild(tr);
    }
    const resultado = document.querySelector('.resultado');
   resultado.appendChild(table);
}