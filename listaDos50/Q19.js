/**
 * 19. Escrever um programa para ler 5 horários. Validar cada
 * horário fornecendo através de repetição. Escrever cada um
 * deles no formato HH.MM.SS.
 * 
 */

const prompt = require('prompt-sync')();

function lerValidaHoras(){
    let armazenaHora = new Array(5);
    let recebeHora;
    const regex24Horas = /^(2[0-3]|[01]?[0-9])[0-5][0-9][0-5][0-9]$/;
    let cont = 0;

    while(cont < 5 ){
        recebeHora = prompt("Digite a hora -> ");
        let validaHorario = regex24Horas.test(recebeHora);

        if(validaHorario == true){
            let horas = recebeHora.substring(0, 2);
            let minutos = recebeHora.substring(2, 4);
            let segundos = recebeHora.substring(4);
            armazenaHora[cont] = `${horas}:${minutos}:${segundos}`;
            cont++;
        }
        else{
            console.log("\nDigite um horário válido!");
        }
    }
    console.log("\n");  
    for(i in armazenaHora){
        console.log(`Horario Fomatado: ${armazenaHora[i]} `);

    }
}

lerValidaHoras();
