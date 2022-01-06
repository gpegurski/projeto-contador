let count = 0;

const numeroAtual = document.getElementById('currentNumber');
//document.getElementById('decrementar').disabled = true

function changeNumberColor() {
    console.log(numeroAtual.innerHTML);
    if(numeroAtual.innerHTML < 0) {
        numeroAtual.style.color = 'red';
    } else {
        numeroAtual.style.color = 'black';
    }
}

function increment() {
	count++;
	numeroAtual.innerHTML = count;
    changeNumberColor();
}

function zerar() {
    count = 0;
    numeroAtual.innerHTML = count;
    changeNumberColor();
}

function decrement() {
	count--;
	numeroAtual.innerHTML = count;
    changeNumberColor();
}

