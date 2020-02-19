// creare una lista mail tramite array
// chiedere all'utente di inserire la propria mail
// confrontare il risultato dell'inserimento con la lista mail creata al punto 1
// esprimere un messaggio in base al risultato precedente: se è nella lista= "benvenuto", altrimenti "non sei nella lista".

//creazione array lista mail
var listaEmail = ['frodo.baggins@hobbit.tdm', 'gandalf@mago.tdm', 'sam.gamgee@hobbit.tdm', 'legolas@elf.tdm', 'aragorn@granpasso.tdm']
console.log(listaEmail);

// chiedo all'utente di inserire il proprio indirizzo email
var emailUtente = prompt('Inserisci il tuo indirizzo email completo');

// ciclo for per confrontare email utente con email della lista: se presente, la mia variabile 'entra' assumerà valore 1, altrimenti 0.
for (var i = 0; i < listaEmail.length; i++) {
    if (emailUtente === listaEmail[i]) {
        var entra = 1;
    }
}

if (entra === 1) {
    document.getElementById('email-utente-in').innerHTML = emailUtente;
    document.getElementsByClassName('benvenuto')[0].setAttribute('class','benvenuto visible');
} else {
    document.getElementById('email-utente-out').innerHTML = emailUtente;
    document.getElementsByClassName('addio')[0].setAttribute('class','addio visible');
}
