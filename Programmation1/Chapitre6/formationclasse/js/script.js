/**
 * Exercices Classe:
 * Étudiant: Rafael De Mendonça
 * Date: 2020-01-30
 */
//Créez une classe JoueurHockey.
class JoueurHockey{

    constructor(nom,nbButs,nbPasses) {
        this.nom = nom;
        this.nbButs = nbButs;
        this.nbPasses = nbPasses;
    }
//Créez une méthode nommée Total qui retourne le nombre de points (buts + passes)
    Total(){
        return ("Total de points "+this.nbButs+" buts et " +this.nbPasses+" passes. ");
    }

}
//Instanciez
let sydney = new JoueurHockey("Sydney Crosby", 454 , 787);
let mario = new JoueurHockey("Mario Lemieux", 690 , 1033);
let jaromir = new JoueurHockey("Jaromir Jagr",766,1155);
let totalSydney = sydney.Total();
let totalMario = mario.Total();
let totalJaromir = jaromir.Total();


document.write(totalSydney+"</br>"+totalMario+"</br>"+totalJaromir);