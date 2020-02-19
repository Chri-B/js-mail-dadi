// genero due numeri randomici e li associo a due variabili A e B
// comparo i due numeri A e B
// se A > B vince A, se A < B vince B , altrimenti è un pareggio.

var numeri = [1,2,3,4,5,6]; // numeri possibili su un dado a 6 facce
var numeroA = numeri[Math.floor(Math.random() * numeri.length)]; // random number nell'array
var numeroB = numeri[Math.floor(Math.random() * numeri.length)]; // random number nell'array
// console.log('A = ' + numeroA);
// console.log('B = ' + numeroB);

document.getElementById('numero-a').innerHTML = numeroA; // mostro a monitor il numero estratto
document.getElementById('numero-b').innerHTML = numeroB; // mostro a monitor il numero estratto

// risultati del gioco
if (numeroA > numeroB) {
    document.getElementById('vincitore').innerHTML = numeroA;
    document.getElementById('win').setAttribute('class', 'text-uppercase visible')
} else if (numeroA < numeroB) {
    document.getElementById('vincitore').innerHTML = numeroB;
    document.getElementById('lose').setAttribute('class', 'text-uppercase visible')
} else {
    document.getElementById('vincitore').innerHTML = 'nessuno';
    document.getElementById('draw').setAttribute('class', 'text-uppercase visibl')
}
