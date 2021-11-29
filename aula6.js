

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

function criaElemento(dados) {
    let td = document.createElement('td');
    td.innerHTML = dados;
    return td; 
}

function carregaElementosNaPagina(json) {
    const table = document.querySelector('.table');
    const tBody = document.createElement('tbody');
    for (let pessoa of json) {
        const tr = document.createElement('tr');

        let td1 = criaElemento(pessoa.nome);
        tr.appendChild(td1);

        let td2 = criaElemento(pessoa.email);
        tr.appendChild(td2);

        let td3 = criaElemento(pessoa.salario);
        tr.appendChild(td3);

        let td4 = criaElemento(pessoa.estado);
        tr.appendChild(td4);

        let td5 = criaElemento(pessoa.empresa);
        tr.appendChild(td5);

        let td6 = criaElemento(pessoa.idade);
        tr.appendChild(td6);

        let td7 = criaElemento(pessoa.sexo);
        tr.appendChild(td7);

        let td8 = criaElemento(pessoa.cpf);
        tr.appendChild(td8);

        tBody.appendChild(tr);
    }
    // const resultado = document.querySelector('.resultado');
   table.appendChild(tBody);
}