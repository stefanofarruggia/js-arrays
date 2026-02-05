const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE
console.log(teachers)

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();
console.log(reversedTeachers)
/*
CORREZIONE
let reversedTeachers = [];
for (let = teachers.length - 1 ; i >= 0 ; i--){
reversedTeachers.push(teachers[i])
}
*/ 

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
teachers.forEach(names => {
  if (names.length >= 5) {
    longNames.push(names)
  }
}
)

console.log(longNames)

/*
CORREZIONE
for (let i = 0 ; i < teachers.length; i++){
let teacher = teachers[i]
if(teacher.length >= 5){
}longNames.push(teacher)
}
*/

// 3. Rimuovi 'Ed' dall'array teachers
let indexED = teachers.indexOf('Ed') 
console.log(indexED)
teachers.splice(5 ,1)
console.log(teachers)

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf('Fabio') != -1;
console.log(isFabioPresent)

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.toString()
console.log(teachersString)
