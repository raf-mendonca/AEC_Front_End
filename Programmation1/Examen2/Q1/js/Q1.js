/**Examen 2 - Question 2
 * Prof.: Shany Carle
 * Rafael Izaias De Mendonça
 * Date: 2020-02-15
 */

let terme;
let type;
let typePrix = 0;
let couleur;
let couleurPrix = 0;
let transmission;
let transPrix = 0;
let prixTotal = 0;
let taxe;
let interet = 0;
let mensualite;

type = prompt("Entrez le type de Jeep que vous voulez, ex: Sport, SportS ou Havane.").toUpperCase();
if (type === 'SPORT'){
    prixTotal+= 33290;
    typePrix = 33290;
}
else if (type === 'SPORTS'){
    prixTotal+= 37240;
    typePrix = 37240;
}
else if (type === 'HAVANE'){
    prixTotal = 39235;
    typePrix = 39235;
}

couleur = prompt("Choisissez la couleur que vous voulez. Pour le rouge et le vert le prix est de 1399$.").toUpperCase();
if (couleur === 'ROUGE' || couleur === 'VERT' ){
    prixTotal+= 1399;
    couleurPrix = 1399;
}
else {
    couleurPrix = 0;
}

transmission = prompt("Choisissez la transmission que vous voulez. Manuelle 0$. Automatique 1500$. Automatique 8 vitesses 2400$.").toUpperCase();
if (transmission === 'AUTOMATIQUE'){
    prixTotal+= 1500;
    transPrix = 1500;
}
else if (transmission === 'AUTOMATIQUE 8 VITESSES'){
    prixTotal+= 2400;
    transPrix = 2400;
}
else if (transmission === 'MANUELLE'){
    transPrix = 0;
}

terme = Number(prompt("Choisissez le terme, 24, 48, 60 ou 84 mois."));
mensualite = prixTotal / terme;
taxe = prixTotal * 15 / 100;
prixTotal+= taxe;

document.write("Voci le résumé de votre transaction: Type: "+type+" valeur de "+typePrix+"$;<br>");
document.write("couleur: "+couleur+" valeur de "+couleurPrix+"$;<br>");
document.write("type de transmission: "+transmission+" valeur de "+transPrix+"$; <br>");
document.write("taxex 15% de la valeur total: "+taxe+"$. Intérêt est de "+interet+"$.<br>");
document.write("<b>La valeur total est de "+prixTotal+"$. Vous avez choisi faire en "+terme+" versements de "+mensualite.toFixed(2)+"$.</b>");









