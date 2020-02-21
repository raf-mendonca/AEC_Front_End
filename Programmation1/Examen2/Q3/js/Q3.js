/**Examen 2 - Question 2
 * Prof.: Shany Carle
 * Rafael Izaias De Mendonça
 * Date: 2020-02-15
 */

let tabNombres = [];
let tabLettres = [];
let voyelles = 0;
let lettreE = 0;


//Nombres aléatoires 65 à 90
for (let i = 0; i < 1000; i++) {
    tabNombres.push(Math.floor(Math.random() * ((90 - 65) + 1) + 65));
    }
//Tableau de lettres
for (let j = 0; j <tabNombres.length; j++) {
    tabLettres.push(String.fromCharCode(tabNombres[j]));
}

for (let i = 0; i<1000; i++) {
    if (tabLettres[i] === 'A' || tabLettres[i] === 'E' || tabLettres[i] === 'I' || tabLettres[i] === 'O' || tabLettres[i] === 'U' || tabLettres[i] === 'Y' ){
        voyelles++;
    }
    if (tabLettres[i] === 'E') {
        lettreE++;
    }
}
document.write("Nombre de voyelles: "+voyelles+". nombre de lettres E: "+lettreE+"<br>");
document.write(tabLettres+"<br>");

//Affichez si oui ou non la séquence de lettres “DAD” se retrouve dans le tableau.
// Si oui, indiquez l’indice où débute le mot DAD.
// Une fois le mot trouvé, vous pouvez cesser la recherche (pas obligé de trouver tous les mots DAD)

for (let i = 0; i < tabLettres.length - 3; i++) {
    if (tabLettres[i] === 'D' && tabLettres[i + 1] === 'A' && tabLettres[i + 2] === 'D'){
        document.write("DAD encontrado no índice:"+i);
    }
}

