function velocidadeMedia(distancia, tempo){
    let velocidadeMedia = distancia/tempo;
    console.log("A velocidade Média foi de ", velocidadeMedia, "metros por minuto");

}

velocidadeMedia(10000,30);

const _velocidadeMedia = (distancia, tempo) => {
    let velocidadeMedia = distancia/tempo;
    console.log('Arrow Function ----> ');
    console.log("A velocidade Média foi de ", velocidadeMedia, "metros por minuto");
}


_velocidadeMedia(30700,30);


const soma = (x, y) =>{
    let soma = y+x;
    console.log("A soma é: ",soma);
}
soma(10,25);