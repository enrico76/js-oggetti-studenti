// Creare un oggetto che descriva uno studente con le seguenti proprietà:
//  nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

// creazione oggetto con le proprietà richieste
var student = {
  "nome" : "giovanni",
  "cognome" : "rossi",
  "età" : "25"
};
// console.log(student.cognome);

for (var listaprop in student) {
  console.log(listaprop, ":"+ student[listaprop]);
}
