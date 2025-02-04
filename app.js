let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   

   console.log (intentos);
    if ( numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero secreto en ${intentos} ${(intentos === 1)? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';

}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    // Si ya sorteamos todos los numeros 
    if (listaNumeroSorteados.length == numeroMaximo){
       asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }else{

    // Si el numero generado esta incluido en la lista 
        if (listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
            } else {
                listaNumeroSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
    }
}



function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos= 1;
}

function reiniciarJuego() {
    // limpiar caja  para reiniciar  juego
    limpiarCaja();
    // Indicar mensaje de intervalo de números
   
    // Generar el número aleatorio
    // Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuejo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
