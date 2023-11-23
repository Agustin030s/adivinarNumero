const btnComenzarJuego = document.querySelector('#btnComenzarJuego');
const formNumero = document.getElementById('formNumero');
let numeroGenerado;

const numeroAleatorio = () =>{
    const numGenerado = Math.floor(Math.random()*10) + 1;
    console.log(numGenerado)
    return numGenerado;
}

const iniciarJuego = () =>{
    numeroGenerado = numeroAleatorio();
    formNumero.value = '';
}

const adivinoNumero = (numeroIngresado, numeroGenerado) => numeroIngresado === numeroGenerado;

const obtenerNumeroIngresado = () => {
    const input = document.getElementById('numero');
    const numIngresado = parseInt(input.value);
    return numIngresado;
}

const verificarNumeroIngresado = (num) => !isNaN(num) && num >= 1 && num <= 10;

const verificarEnvio = (e) => {
    const numeroIngresado = obtenerNumeroIngresado();
    e.preventDefault();

    if (verificarNumeroIngresado(numeroIngresado)) {
        if(adivinoNumero(numeroIngresado,numeroGenerado)){
            alert(`Adivinaste, el número era ${numeroGenerado}`);
            document.getElementById('formNumero').value="";
        }else{
            alert(`Fallaste, el número era ${numeroGenerado}, intentalo de nuevo`);
            document.getElementById('formNumero').value="";
        }
        console.log(formNumero.value);
    } else {
        alert('Ingresa un número válido');
    }
};


btnComenzarJuego.addEventListener('click', iniciarJuego);
formNumero.addEventListener('submit', verificarEnvio);