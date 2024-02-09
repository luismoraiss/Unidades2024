// // const promessa = Promise.resolve(5+5)

// // console.log("Lógica que foi desenvolvida")

// // promessa.then(function(value){
// //     console.log(`${value}`)
// //     return value
// // })

// // .then(function(value){
// //     console.log(`subtração ${value - 1}`)
// // })

// // Promise.resolve(`Olá,`*4)
// // .then((value)=>{
// //     if(Number.isNaN(value)){
// //              throw new Error('valores inválidos')    }
// // }).catch((err)=>{
// //     console.log(`Um erro ocorreu ${err}`)

// // })

// // function checkNumber(n){
// //     return new Promise((resolve,reject)=>{
// //         if(n>20){
// //             resolve('O número é maior que 20')
// //         }else{
// //             reject(new Error('número Inválido'))
// //         }
// //     })
// // }

// // const num1 = checkNumber(25)
// // const num2 = checkNumber(10)

// // num1.then((value)=>{
// //     console.log(`O resultado: ${value}`)
// // }).catch((err)=>{
// //   console.log(`Erro: ${err}`)   
// // })


// // num2.then((value)=>{
// //     console.log(`O resultado: ${value}`)
// // }).catch((err)=>{
// //   console.log(`Erro: ${err}`)   
// // })

// // async function calculaComDelay(x,y){
// // return x * y
// // }

// // calculaComDelay(3,3).then((value)=>{
// // console.log(value)
// // }).catch((err)=>{
// //     console.log(err)
// // })

// function respostaComDelay(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve('resolve a promessa')
//         },3000)
//     })
// }
// async function chamadaDelay(){
//     console.log('Chamado a promisse, e esperando o resultado')
//     const resultado = await respostaComDelay()
//     console.log(`O resultado chegou ${resultado}`)
// }

// chamadaDelay()

