/**Examen 1 - Question 2
 * Rafael Izaias De Mendonça
 *
 */

var age;

age = Number(prompt("Veuillez rentrer votre âge: "));

if (age >= 0 && age <=12){
    document.write("Enfant.");
}
else if (age >= 13 && age <= 17){
    document.write("Adolescent.");
}
else if (age >= 18 && age <= 54){
    document.write("Adulte.");
}
else if (age >= 55){
    document.write("Senior.");
}
else {
    document.write("Pas encore né.");
}
