/**Structure de contrôle SI
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça Date: 2019-11-22
 */
var adminlog = "admin";
var admotdepasse = "12345";
var nutilisateur;
var motdepasse;

nutilisateur = prompt("Veuillez rentrez le nom de l'utilisateur: ");
motdepasse = prompt("Veuillez rentrer votre mot de passe: ");

if (nutilisateur === adminlog && motdepasse === admotdepasse){
    alert("Bonjour "+adminlog+"!");
    }
else {
    alert("Votre nom d'utilisateur ou votre mot de passe est invalide.");
}