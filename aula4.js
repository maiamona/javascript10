// ajax => assincrone javascript xml (requisição assincrona)
// 'xhrNovo' é o famoso 'ajax'
// API é um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web. A sigla API refere-se ao termo em inglês "Application Programming Interface" que significa em tradução para o português "Interface de Programação de Aplicativos".
// podemos fazer requisição de 'json', 'xml', etc.
// XMLHttpRequest vai fazer 'ajax', xhrNovo => XMLHttpRequest (ajax)

// const request = obj =>{
// const xhrNovo = new XMLHttpRequest();
// xhrNovo.open(obj.method, obj.url, true)//o 1º parametro é metodo (GET, POST, etc...), 2º é a URL, 3º recebe se é sincrono => 'false' ou assincrono => 'true'
// // xhrNovo.send("dados formulario"); se fose o metodo POST' poderiamos mandar os dados do formulario
// xhrNovo.send();

// xhrNovo.addEventListener('load', () =>{
//   if (xhrNovo.status >= 200 && xhrNovo.status < 300) {
//       obj.success(xhrNovo.responseText);
//   }  else{
// //    obj.error({
// //     code: xhrNovo.status,// 'xhrNovo.status' é o numero do erro
// //   msg: xhrNovo.statusText
// // });  
// obj.error(xhrNovo.statusText);
//   }
// })
// };

// const request = obj =>{
//     return new Promise((resolve, reject) =>{//utilizando a 'promise'
//         const xhrNovo = new XMLHttpRequest();
//         xhrNovo.open(obj.method, obj.url, true)//o 1º parametro é metodo (GET, POST, etc...), 2º é a URL, 3º recebe se é sincrono => 'false' ou assincrono => 'true'
//         // xhrNovo.send("dados formulario"); se fose o metodo POST' poderiamos mandar os dados do formulario
//         xhrNovo.send();
        
//         xhrNovo.addEventListener('load', () =>{
//           if (xhrNovo.status >= 200 && xhrNovo.status < 300) {
//               resolve(xhrNovo.responseText);
//           }  else{
//         //    obj.error({
//         //     code: xhrNovo.status,// 'xhrNovo.status' é o numero do erro
//         //   msg: xhrNovo.statusText
//         // });  
//         reject(xhrNovo.statusText);
//           }
//         });
//     });

// };



document.addEventListener('click', e =>{
const el = e.target;
const tag = el.tagName.toLowerCase();// pegamos o nome da tag do elemento ex. '<a></a>'
if (tag === 'a') {
    e.preventDefault();// preveni o evento para continuar na mesma pagina e não mudar de pagina que é o seu comportamento normal
    carregaPagina(el);
}
});

// function carregaPagina(el) {
//     const href = el.getAttribute('href');
//     // console.log(href);

//     request({
// method: 'GET',// é o mesmo que obj.method por causa das chaves '{}' do corpo do objeto
// url: href,   
// success(response){
// carregaResultado(response)
// },
// error(errorText){
// console.log(errorText);
// }
// });
// }

// function carregaPagina(el) {
//     const href = el.getAttribute('href');
//     // console.log(href);

//     const objConfig = {
//         method: 'GET',// é o mesmo que obj.method por causa das chaves '{}' do corpo do objeto
//         url: href,   
//         // success(response){
//         // carregaResultado(response);
//         // },
//         // error(errorText){
//         // console.log(errorText);
//         // }
//         };

//     request(objConfig)
//     .then( response => carregaResultado(response))
//     .catch( errorText => console.log(errorText));
// }

// async function carregaPagina(el) {
//     const href = el.getAttribute('href');
//     // console.log(href);

//     const objConfig = {
//         method: 'GET',// é o mesmo que obj.method por causa das chaves '{}' do corpo do objeto
//         url: href,   
//         // success(response){
//         // carregaResultado(response);
//         // },
//         // error(errorText){
//         // console.log(errorText);
//         // }
//         };

//         try {
//             const response = await request(objConfig);
//             carregaResultado(response)
//              // .then( response => carregaResultado(response))
//              // .catch( errorText => console.log(errorText));
//         } catch (error) {
//             console.log(error);
//         }

  
// }

// function carregaPagina(el) {
//     const href = el.getAttribute('href');
  
//     fetch(href)
//     .then(response =>{ 
//         if (response.status !== 200) throw new Error('ERRO 404!');
//       return response.text()
//     })
//     .then(html => carregaResultado(html))
//     .catch(e => console.error(e))        
             
// }



async function carregaPagina(el) {//transformando em 'async await'
    try {

        const href = el.getAttribute('href');
        const response = await fetch(href);
        
        if (response.status !== 200) throw new Error('ERRO 404!');
        
        const html = await response.text(); //utilizamos o 'await' porque tambem retorna uma 'promise'
        carregaResultado(html);
        
    } catch (error) {
        console.log(error);
    }

    // fetch(href)
    // .then(response =>{ 
    //     if (response.status !== 200) throw new Error('ERRO 404!');
    //   return response.text()
    // })
    // .then(html => carregaResultado(html))
    // .catch(e => console.error(e))        
             
}


function carregaResultado(response){
const resultado = document.querySelector('.resultado');
resultado.innerHTML = response;
}


// como não temos backent não vamos mandar nada de 'POST'
// fetch('pagina4.html')//utilizando a 'fetch API'
// .then(resposta =>{
// if (resposta.status !== 200) throw new Error('ERRO 404 NOSSA');
// return resposta.text();// retorna o que esta dentro da pagina 'html', como esta função tambem retorna uma 'promise' ele tambem tera um 'then()' como esta abaixo
// })
// .then(html => console.log(html))
// // .catch(e => console.log(e));
// // .catch(e => console.warn(e));
// .catch(e => console.error(e));