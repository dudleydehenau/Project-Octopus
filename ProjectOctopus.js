//créateur du projet : Dudley, Dimtri


//Déclaration de variable

let nbrVie;
let modeJeu;

//Introduction du jeu

console.log("Bienvenue jeune aventurier. Vous entrez dés maintenant dans une aventure tout nouvelle au concept tout particulier de se dérouler là où seul les vrais aventurier oserait se rendre : ");
console.log("* Voix épique * La Console Du Navigateur Web *Voix épique*")
console.log("Mais prenez garde, car chaque erreur pourrait vous renvoyez au début de la partie.")
console.log("Pour démarrer cette aventure épique, une seul chose a faire, entrez game() dans la console")

//----------------------------------------------Principale function contenant tout le jeux et les boucles----------------------------------------------

function game() {
    console.log("Vous voila donc sur le point de démarrer votre quète mais tout d'abbord, vous allez séléctionner votre mode de jeux");
    console.log("Vous avez choisi le mode : " + choixMode());
    console.log("Nous voila donc près.");
    console.log("Présentation du personnage : ");
    console.log("Vous personnage se trouve dans un univers se déroullant dans un hypotétique Moyen-Âge rempli de personnage atypique et d'évènements incompris associer, par soucis d'incompréhension, à de la magie");
    console.log("Votre personnage se doit d'avancer, cependant, vous ne savez pas pourquoi. Tout ce que vous savez, c'est que cette être prend la forme d'un poulpe-humanoide à " + nbrVie + " tentacule.");
    console.log("Pour le reste, c'est votre histoire, à vous de prendre des decisions et d'avancer au plus loin.")
    console.log("Bonne chance et surtout, bonne amusement")
    //suite jeu
}

//----------------------------------------------Function méchanique de jeux----------------------------------------------

/**
 * Lorsque le joueur tombe sur un ennemi, il choisi entre 3 options, attaquer, deffendre et fuire
 * la fonction va : 
 * - demander à l'utilisateur par prompt
 * - tester la réponse et recommencer tant que c'est faux
 * - renvoyer : 
 * - 1 si attaquer, 2 si defenre et 3 si false. 
 * 
 * @returns {Number} - retourne 1, 2 ou 3
 */
function choixAttDefFuite() {

}

/**
 * Function qui va donner un résultat random entre attaquer et defendre
 * 
 * @returns {Number} - retourne 1 ou 2
 */
function choixEnnemi() {

}

/**
 * Pour créer différentes difficulté de jeux, on choisi avec combien de vie démarre le joueur, 7 pour facile, 5 pour moyen, et 3 pour difficiles.
 * Cette function au moment d'être appelé va : 
 * -Demander à l'utilisateur de choisir en prompt entre facile, moyen et difficile
 * -Test ce qui rentre et recommenbce si ne correspond pas à un choix
 * -attribue une valleur a nbrVie en fonction du choix du joueur
 * -attribue une valleur a modeJeu identique que celle attribuer a nbrVie 
 * -retourne le choix pris
 * 
 * @returns {string} - renvoie le mode de jeu (facile, moyen ou difficile)
 */
function choixMode() {
    
}

/**
 * Si le personnage arrive devant un arbre sur le haut d'une colline, il peut choisir de se reposer et récupère deux vies
 * la fonction va : 
 *  - Augmenter le nombre de vie du personnage si :
 *      - nbrVie + 2 <= modeJeu (Pour que le joueur ne puisse pas avoir plus de vie que ce que le mode de jeu permet), ajouter 2 vie
 *  sinon : 
 *      - modeJeu != nbrVie (pour que si le joueur ne manque d'une vie, il ai quand même l'effet du soin), ajouter 1 vie
 *  sinon : 
 *      - ne rien faire vu que le personnage est déjà soigner
 * 
 * et pour tout les résultats, renvoyer nombre de vie gagné correspndante
 * 
 * @returns {Number} - renvoie le nombre de vie gagné
 */
function soin() {

}

//----------------------------------------------Fuction de fonctionnement de base----------------------------------------------

/**
 * Function ayant but de, en cas de mort, être appelé pour : 
 * - Enlever un au nombre de vie du joueur
 * - Vérifier si le nombre de vie de joeur est supérieur à 0 et en fonction de ça : 
 *          - Si suppérieur à 0, faire un return du nombre de vie restant
 *         - Si vaut 0 ou moins, alors retourner false (raison de 0 ou moins : si par après, on décide qu'une certaine erreur vaut 2 point de dégâts et qu'il n'en restait qu'un, cela va donner -1 et la fonction ne fonctionnera pas
 * 
 * @param {Number} nombre - nombre de vie restant au joeur
 * @returns {(Number|Boolean)} - Nombre de vie ou, si joueur mort, false 
*/
function vie(nbrVie) {

}
