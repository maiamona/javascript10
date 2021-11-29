function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max -min) + min);
}

// function esperaAi(msg, tempo, callback) {
//     setTimeout(() =>{
// console.log(msg);
// if(callback) callback();
//     }, tempo);
// }


function esperaAi(msg, tempo) {// resovendo com promises
    return new Promise((resolve, reject) =>{

        // if(typeof msg !== 'string') reject('BAD VALUE');
        if(typeof msg !== 'string') reject(new Error('ERRO'));
        setTimeout(() =>{
            // console.log(msg);
            resolve(msg);
                }, tempo);
    }); 
}

// esperaAi('Frase 1', aleatorio(1, 3), function () {// entre '1' a '3' segundos
//     esperaAi('Frase 2', aleatorio(1, 3), function (){
//         esperaAi('Frase 3', aleatorio(1, 3));
//     });   
// });

esperaAi('1º Conexão com o BD', aleatorio(1, 3))
.then(resposta =>{// utilizamos o 'then()' para o 'resolve()' e o 'catch()' para o 'reject()' que estao nas funções acima
console.log(resposta);
return esperaAi('2º Buscando dados da BASE', aleatorio(1, 3));
})
.then(resposta =>{// utilizamos o 'then()' para o 'resolve()' e o 'catch()' para o 'reject()' que estao nas funções acima
    console.log(resposta);
    // return esperaAi('3º Tratando os dados da BASE', aleatorio(1, 3));
    return esperaAi(999 , aleatorio(1, 3));
    })
    .then(resposta =>{// utilizamos o 'then()' para o 'resolve()' e o 'catch()' para o 'reject()' que estao nas funções acima
        console.log(resposta);
        })
        .then(() =>{
            console.log('4º Exibe dados na tela');
        })
        .catch(e =>{
            console.log('ERRO: ', e);
        });


        console.log('==== PRIMEIRO ====');

