// creare una lista mail tramite array
// chiedere all'utente di inserire la propria mail
// confrontare il risultato dell'inserimento con la lista mail creata al punto 1
// esprimere un messaggio in base al risultato precedente: se è nella lista= "benvenuto", altrimenti "non sei nella lista".

//creazione array lista mail
var listaEmail = ['frodo.baggins@hobbit.tdm', 'gandalf@mago.tdm', 'sam.gamgee@hobbit.tdm', 'sauron@mordor.tdm', 'gollum@smeagol.tdm']
console.log(listaEmail);

var emailUtente = prompt('Inserisci il tuo indirizzo email completo');

// for (var i = 0; i < listaEmail.length; i++) {
    if (emailUtente === listaEmail) {
        console.log('Benvenuto');
    } else {
        console.log('Non puoi accedere');
    }
// }
