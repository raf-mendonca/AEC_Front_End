/**Examen 2 - Question 2
 * Prof.: Shany Carle
 * Rafael Izaias De Mendonça
 * Date: 2020-02-18
 */

class Activite {
    constructor(nom,cout){
        this.nom = nom;
        this.cout = cout;
    }
}
class Voyage{
    constructor(destination,billetavion,tabActivite){
        this.destination = destination;
        this.billetavion = billetavion;
        this.tabActivite = tabActivite;
    }
    getPrixVoyage(){
        let total=0;
        for(let i = 0; i<this.tabActivite.length; i++){
            total += this.tabActivite[i].cout;
        }
        return total + this.billetavion;
    }
}

class Personne {
    constructor(personne,voyage) {
        this.personne = personne;
        this.voyage = voyage;
    }
}

//Instanciez les activités
let activite1 = new Activite('Golden Kinights Hokey',125);
let activite2 = new Activite('Raiders football',200);
let activite3 = new Activite('Tournoi de poker',500);

// tableau avec les activités
let tab = [activite1,activite2,activite3];

//Instanciez le voyage à LV avec les 3 activités
let voyage1 = new Voyage('Las Vegas',400,tab);
voyage1 = new Voyage('Las Vegas',400,tab);

//Instanciez Shany avec le voyage précedent
let voyageur = new Personne('Shany Carle',voyage1);

//Faites afficher toutes ces informations à l’écran.
let prixVoyage = voyageur.voyage.getPrixVoyage();
//variable prixVoyage est un chemin pour les objets voyageur et voyage1

// Vous devez en plus afficher le coût total pour le voyage (le billet d’avion et les activités).
document.write("Nom du voyageur: "+voyageur.personne+".<br> Le local de la voyage "+voyage1.destination+". <br>Le total de la voyage: "+prixVoyage);


