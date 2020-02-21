/**Formatif 2 - Question 4
 * Rafael Izaias De Mendonça
 * Date: 2020-02-10
 */

class MonnaieVirtualle {
    constructor(nomMonnaie,valeurUSD,actif,actifUSD){
        this.monMonnaie = nomMonnaie;
        this.valeurUSD = valeurUSD;
        this.actif = actif;
    }
    actifUSD(){
        return this.valeurUSD * this.actif;
    }
}

//Classe Portefeuille et ses propriétés
class Portefeuille{
    constructor(nomProprietaire,tableauMonnaies){
        this.nomProprietaire = nomProprietaire;
        this.tableauMonnaies = tableauMonnaies;
    }
    //Méthode explore tableau
    ValeurDuPortefeuille(){
        let totalActif = 0;
        for (let i=0; i<tableauMonnaies.length;i++){
            totalActif+= tableauMonnaies[i].actifUSD();
        }
        return totalActif;

    }
}

//Instanciez les monnais suivantes:
let Bitcoin = new MonnaieVirtualle("Bitcoin",9730,6);
let Ethereum = new MonnaieVirtualle("Ethereum", 194,20);
let Litecoin = new MonnaieVirtualle("Litecoin",58,10);

//Vérification du méthode:
document.write(Bitcoin.actifUSD()+" valeur d'actifs de Bitcoin en US dollars</br>");
document.write(Ethereum.actifUSD()+" valeur d'actifs de Ethereum en US dollars</br>");
document.write(Litecoin.actifUSD()+" valeur d'actifs de Litecoin en US dollars</br>");

//Instanciez le portefeuille suivant :
let actifsBitcoin = new MonnaieVirtualle("Bitcoin",9730, 2);
let actifsEther = new MonnaieVirtualle("Ethereum",194, 25);
let actifsLite = new MonnaieVirtualle("Litecoin",58, 20);

let tableauMonnaies = [actifsBitcoin,actifsEther,actifsLite];

let mesActifs = new Portefeuille("Rafael De Mendonca",tableauMonnaies);
let mesTotalActifs = mesActifs.ValeurDuPortefeuille();

document.write("<br>"+mesTotalActifs+" total d'actifs en USD.");