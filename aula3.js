function aleatorio(min=0, max=3) {
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

// esperaAi('fase 1', aleatorio())
// .then(valor => {
//     console.log(valor);
//     return esperaAi('fase 2', aleatorio())//temos que retornar uma 'promise' para nós pegarmos outro 'then'
// })
// .then(fase =>{
//     console.log(fase);
//     return esperaAi('fase 3', aleatorio())
// })
// .then(fase =>{//sem o 'then()' não conseguimos ver o retorno da 'promise' anterior => 'return esperaAi('fase 3', aleatorio())'
// console.log(fase);
// return fase;
// })
// .then(fase =>{
//     console.log('terminamos na fase:', fase);
// })
// .catch(e => console.log(e));

// assincrona - 'async'

async function executa() {
    try {
        const fase1 = await esperaAi('fase 1', aleatorio());// sempre que utilizamos 'async function' podemos utilizar o 'await', 'esperaAi' => esta função não é assincrona
        // const fase1 = esperaAi('fase 1', aleatorio());
        console.log(fase1);

        // setTimeout(function () {
        //   console.log('essa promise estava pendente', fase1);  
        // }, 1100);//1 minuto e 1 milesimo de segundos
        const fase2 = await esperaAi('fase 2', aleatorio());//'await' => espera as 'promises'
        console.log(fase2);
        const fase3 = await esperaAi('fase 3', aleatorio());
        console.log(fase3);
        console.log('terminamos na fase:', fase3); 
    } catch (error) {
        console.log(error);
    }

}

executa();

// as 'promises' tem 3 estados: 1ºpendente 'pending'- se não utilizarmos a palavra 'await',2ºfulfill, 3ºrejected => investigar

// const teste2 = esperaAi('coisa', 5000);
// console.log(teste2);

// nas 'promises' utilizamos o 'await', 'then' ou 'cath'