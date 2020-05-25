// Eserizio email

var emailArray = ["topolino@disney.com", "minnie@disney.com", "pippo@disney.com", "pluto@disney.com"];
var userMail = prompt('Inserisci la tua mail');
var controlEmail = false;
for (var i = 0; i < emailArray.length; i++) {
  if (userMail === emailArray[i]) {
    controlEmail = true;
  }
}

if (controlEmail) {
  document.write('Accesso consentito');
} else {
  document.write('Accesso non consentito');
}

// Esercizio dadi

// var numberUser = Math.floor(Math.random() * 6) + 1;
// document.write('Il tuo numero è ' + numberUser + '<br>');
//
// var numberComputer = Math.floor(Math.random() * 6) + 1;
// document.write('Il numero del computer è ' + numberComputer + '<br>');
//
// if (numberUser > numberComputer) {
//   document.write('Hai vinto');
// } else if (numberUser < numberComputer) {
//   document.write('Hai perso');
// } else {
//   document.write('Hai pareggiato');
// }
