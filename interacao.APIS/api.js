let obj = {
 
pessoa: 'luis',
enderecos: [
    {
        estado: 'alagoas',
        cidade: 'maceio',
        rua: 'D',
        numero: 22 
    },

    {
        estado: 'alagoas',
        cidade: 'maceio',
        rua: 'D',
        numero: 22 
    },

    {
        estado: 'alagoas',
        cidade: 'maceio',
        rua: 'D',
        numero: 22 
    }

]

}

obj.enderecos.forEach(elemento,indice => {
    console.log(`${indice+1} - ${elemento.rua}`)
});

