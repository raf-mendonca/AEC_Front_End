/**Formatif 2 - Question 1
 * Rafael Izaias De Mendonça
 * Date: 2020-02-06
 */


var degat = 0;
var cpt=0;
var force = 0;
var type;

type = prompt("Quel est le type de votre carte pokemon, ex: EAU, FEUX, TÉNÉBRE.");

while (cpt !== 2) {

    var nbr = Math.floor(Math.random() * 2);
    if (nbr === 1) {
        degat += 100;
        alert("FACE");
    }
    else {
        degat += 0;
        alert("PILE")
    }
    cpt++;
}
if (type === 'EAU'){
    force = degat *2;
}
else {
    force = degat;
}

document.write("Le type est "+type+" les dégâts "+force);





