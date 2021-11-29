function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max -min) + min);
}

function esperaAi(msg, tempo) { 
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(typeof msg !== 'string') {
                // reject(false);
                reject('cai no erro');
                return;
            }

            resolve(msg.toUpperCase() + ' - passei na promise');
            return;
                }, tempo);
    }); 
}

// investigar - Promise.all Promise.race Promise.resolve Promise.reject

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });
// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// // expected output: Array [3, 42, "foo"]


// var p1 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 500, "one");
// });
// var p2 = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 100, "two");
// });
// Promise.race([p1, p2]).then(function(value) {
//   console.log(value); // "two"
//   // Ambos resolvem, mas p2 é mais rápido
// });


// const promises = [
//     // 'primeiro valor',
//     esperaAi('Promise 1', 3000),// 'esperaAi()' é uma 'promise' porque a função dela retorna uma 'new Promise'; o segundo parametro é o tempo que é de 3 segundos
//     esperaAi('Promise 2', 500),//500 milisegundos
//     esperaAi('Promise 3', 1000),//1 segundo
//     // esperaAi(1000 , 1000),
//     // 'outro valor'
// ];

// const promises = [
//     esperaAi('Promise 1', aleatorio(1, 5)),
//     esperaAi('Promise 2', aleatorio(1, 5)),
//     esperaAi('Promise 3', aleatorio(1, 5)),
//     esperaAi(1000, aleatorio(1, 5)),
//     // esperaAi(1000 , 1000),
// ];

// Promise.all(promises)
// .then(function (valor) {
//     console.log(valor);
// })
// .catch(function (erro) {//'catch()' captura qualquer erro que estiver no meio do caminho
//     console.log(erro);
// });



// Promise.race(promises)
// .then(function (valor) {
//     console.log(valor);
// })
// .catch(function (erro) {//'catch()' captura qualquer erro que estiver no meio do caminho
//     console.log(erro);
// });


// function baixaPagina() {
//     // const emCache = true;
//     const emCache = false;

//     if (emCache) {
//         return Promise.resolve('pagina em cache')
//     } else{
//         return esperaAi('baixei a pagina', 3000);//ele vai levar 3 segundos
//     }
// }

function baixaPagina() {
    // const emCache = true;
    const emCache = true;

    if (emCache) {
        return Promise.reject('pagina em cache')
    } else{
        return esperaAi('baixei a pagina', 3000);//ele vai levar 3 segundos
    }
}


// function baixaPagina() {
//     // const emCache = true;
//     const emCache = true;

//     if (emCache) {
//         return Promise.reject('sou um reject');
//     } else{
//         return Promise.resolve('sou um resolve');
//     }
// }


// baixaPagina()
// .then(dadosPagina =>{
//     console.log(dadosPagina);
// })
// .catch(e => console.log(e));


baixaPagina()
.then(dadosPagina =>{
    console.log(dadosPagina);
})
.catch(e => console.log('erro', e));