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
