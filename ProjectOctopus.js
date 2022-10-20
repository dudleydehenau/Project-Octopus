//créateur du projet : Dudley, Dimtri, 


//Déclaration de variable

let nbrVie;
let modeJeu;
let premierChoix;
let choix2; 
let tempRepos;

//Introduction du jeu

console.log("Bienvenue jeune aventurier. Vous entrez dés maintenant dans une aventure tout nouvelle au concept tout particulier de se dérouler là où seul les vrais aventurier oserait se rendre : ");
console.log("* Voix épique * La Console Du Navigateur Web *Voix épique*")
console.log("Mais prenez garde, car chaque erreur pourrait vous renvoyez au début de la partie.")
console.log("Pour démarrer cette aventure épique, une seul chose a faire, entrez game() dans la console")

//----------------------------------------------Principale function contenant tout le jeux et les boucles----------------------------------------------

function game() {
    //console.log("Vous voila donc sur le point de démarrer votre quète mais tout d'abbord, vous allez séléctionner votre mode de jeux");
    //console.log("Vous avez choisi le mode : " + choixPorte());
    console.log("Nous voila donc près.");
    console.log("Présentation du personnage : ");
    console.log("Vous personnage se trouve dans un univers se déroullant dans un hypotétique Moyen-Âge rempli de personnage atypique et d'évènements incompris associer, par soucis d'incompréhension, à de la magie");
    console.log("Votre personnage se doit d'avancer, cependant, vous ne savez pas pourquoi. Tout ce que vous savez, c'est que cette être prend la forme d'un poulpe-humanoide");
    console.log("Pour le reste, c'est votre histoire, à vous de prendre des decisions et d'avancer au plus loin.")
    console.log("Bonne chance et surtout, bonne amusement")
    alert("Prêt pour démarrer l'aventure (ça sert à rien d'appuyer sur non)")
    console.log("Un premier choix s'offre à vous. Vous êtes face à trois portes identiques dans une pièces noir. Vous ne savez pas qui vous êtes et qu'est ce que vous faites là, cependant, vous êtes certain que le choix de la porte peut porter atteinte a votre expérience de vie.")
    console.log("La première vous semble accesible et réconfortante. Un parfait choix pour un débutant ou pour passer du bon temps")
    console.log("La seconde vous semble plus hostile, quoique si vous êtes en quête d'aventure, cela peut-être le choix parfait")
    console.log("Pour la dernière, rien ne semble donner envie d'y toucher, rien qu'à la vie, celle-ci vous fait frissoner, cependant, vous ne rejetter pas le choix de celui-ci")
    console.log("Vous réfléchissez un moment et prenez un choix:")
    console.log("Vous choisiez la porte " + choixPorte());
    if (modeJeu == 7) {
        console.log("Peut-être perçu comme un choix avec peu d'audace, c'est celui qui permet le mieux de découvrir le monde qui nous entourre sans être constamment aux aguets")
    } else if (modeJeu == 5) {
        console.log("Le parfait équilibre entre challenge et tranquillité, permet de profitez tout en ayant du challenge");
    } else if (modeJeu == 3) {
        console.log("Le choix le plus osé, et le plus dire, intéressant, voyons si le choix n'étais pas trop osé");
    }
    console.log("Vous vous réveillez sur ce qui vous semble être un lit d'appoint posé sur une planche. Vous essayez de décrochez votre membre solidement colé à la planche")
    console.log("Vous vous levez et vous appercevez uniquement de l'eau, en tout cas face à vous. Vous vous penchez vers l'eau et y voyez votre reflets")
    console.log("Vous êtes de type Poulpe-Humanoide, une des plus habile des espèces existant. Vous posédez : " + nbrVie + " tentacules 🦑.")
    console.log("Vous vous regrdez encore un momement en essayant de vous souvenirs. De quoi, vous ne savez pas. Vous ne savez rien. En tous cas, rien de vous. Mais cela n'est pas vraiment un problème")
    console.log("Vous vous retourner et voyez un petit coffre. Dans celui-ci, des vêtements adapté à vos nombre de tentacules et quelque object servant à trouver votre chemin semble tout prêt pour vous")
    console.log("Et derrière le petit coffre se trouve le dernier objet atypique présente, un petit sac de voyage se portant de l'épaule aux hanches. Vous y ranger vos trouvailles et ne comprenez pas encore bien ce que vous faites. Mais cela semble être la seul chose à faire")
    console.log("Vous suivez un petit tracé aux sol semblant indiqué vers où vous devriez vous rendre")
    console.log("Soudainement, le chemin se divise en deux. à gauche, au loin, apparaît de haut arbres. et à droite, un chemin semblant plus aride et rempli de dénivelé.")
    premierChoix = promptP("Veuillez choisir entre", "gauche", "droite", "le chemin");
    console.log("Vous décidez d'aller vers : " + premierChoix);
    if(premierChoix == "gauche") {
        console.log("Le trajet vous semble être long jusqu'à la forêt, et la nuit s'apprête à tomber.");
        console.log("Voulez vous avancer, ou bien vous poser en dessous d'un arbre sur le haut d'une coline.");
        choix2 = promptP("Choissisez", "entre", "Continuer", "Dormir");
        console.log("Vous avez choisi : " + choix2)
        if(choix2 == "Dormir") {
            console.log("Après un petit temps de repos, vous vous relever aussi déterminer qu'avant votre repos");
            tempRepos = console.log(soin());
            if(tempRepos == 0) {
                console.log("Il semble que ce temps de repos n'était pas fort nécessaire, vous gagné " + tempRepos + " points de vie");
            } else if (tempRepos >= 1) {
                console.log("Ce repos peut agité fut pourtant productif, vous gagné " + tempRepos + " point(s) de vie(s)");
            }
            console.log("sur ce, vous continuez votre chemin");
        } else if (choix2 == "Continuer") {
            console.log("Vous continuer donc votre quête");
            console.log("Cependant, à mis trajet, vous repenser à l'abre et vous dites que cela n'aurait pas été de refus, cependant vous tenez le coup")
        }
        console.log("Vous arrivez en l'entrée du bois qui, une fois proche, vous paraît anormale. Depuis l'extérieur, un seul endroit semble vous permettre de rentrer dans le bois");
        console.log("Vous inspecter les arbres qui semblent faire office de mur et remarque quelque chose d'assez anodin, tout les arbres sont comme soudé l'un à l'autre, et cela semble être le cas pendant plusieurs kilomètre");
        console.log("Vous décidez tout de même de rentrée, même si cela ne vous rassure pas tant que ça");
        console.log("Une fois entrée, vous entendez quelqu'un vous appeler : 'Octave !?, est-ce possible'");
        console.log("..");
        console.log("..");
        console.log("vous ne comprenez pas si il vous parle, cependant, vous répondez");
        console.log("Vous parvenez à entendre de où il vient, cependant, il semble ne pas vous avoir entendu");
        console.log("Une fois que vous le voyez, vous comprenez qu'il y a très peu de chance qu'il vous entende, le personnage en question, à l'apparence mi-humaine mi-vegetal, vous inique rapidement qu'un problème de croissance provoque le bouchage de ses oreilles");
        console.log("L'arbre parlant, en vous voyant, préviens effectivement qu'il ne peut pas vous entendre");
        console.log("L'arbre parlant : 'Cela fait longtemps que je ne vous ai plus vu, je pensais que c'était fini, je vous prie de m'excusez pour mes actes'");
        console.log("Ne savant pas qu'est ce qu'il vous raconte, vous ochez de la tête.");
        console.log("Le personnage se retourne, et agît bizzarement, saute une fois comme pour essayer de ne pas tomber et se retourne vers vous")
        console.log("L'arbre parlant : 'Cette fôret est une horreur, je suis ici depuis maitenant 2 jours. Il y a de quoi vivre ici pour toujours, mais cela ne me suffit pas. De plus, la nuit, lorsque les oiseaux cesse de chanter, il m'arrive d'entendre des grognements'");
        console.log("Et le personnage, sans raison apparante, se colla contre un arbre et cessa de bouger.");
        console.log("Vous déduissez que le personnage n'est pas dans un état normal étant donné qu'en fasse de lui se trouvais l'entrée par laquel vous êtes passé il y a quelque minutes");
        console.log("Vous comprenez donc qu'il faut passer à travers cette forêt ressemblant à un labyrinthe");
        let sortieLab = 0;
        while (sortieLab == 0) {
            console.log("Un premiez choix s'offre à vous, partir par la gauche et la droite.");
            let tempLab1 = promptP("Vouus décidez de prendre", "gauche", "droite", "le chemin");
            console.log("Vous avez choisi " + tempLab1);
            if (tempLab1 == "gauche") {
                console.log("Félicitation, vous avez trouver la sortie");
                console.log("Vous vous avancer, et le sol se défondre sous vos pieds. Vous êtes arriver dans une zone en travaux. La suite aux prochaines mise à jour")
                return 'win';
            } else if (templab1 == "droite") {
                console.log("Un monstre vous demande de trouver un nombre entre 1 et 100 en moins de 7 fois, si vous échouez, il vous tue");
                chiffreAlea();
            }
        }
        







    } else if (premierChoix == "droite") {
        while(true) {
            let mathrandometemp = (Math.random() * (2 - 0) + 0).toFixed();
            if (mathrandometemp == 0) {
                console.log("Un ennemi apparaît devant vous et vous lance ce qui semble êtres une patate et prend la fuite");
                console.log("Vous la ramassez mais comprenez pas ce qu'il s'est passé");
            } else if (mathrandometemp == 5) {
                console.log("Un chien apparaît, vous vous approchez pour le caresser mais celui-ci s'attaque à vous");
                vie()
                console.log("Le chien vous arrache une tentacule. Il vous reste " + nbrVie + " vie(s)");
                if(nbrVie <= 0) {
                    console.log("Il semble que vous n'avez plus de vie, vous tombez par terre et ..");
                    return console.log('lose');
                }
            } else if (mathrandometemp == 1) {
                let nom;
                let lNom;
                nom = nomRandom()
                if(nom == 1){
                    lNom = "Mme Masson";
                } else if(nom == 2) {
                    lNom = "Mr Delvigne";
                } else if(nom == 3) {
                    lNom = "Mr Dewulf";
                }
                console.log("Un ennemi, ressemblant bizzarement à " + lNom + " vient vous attaquer");
               
                let tempChoix = choixAttDefFuite();
                if(tempChoix == 1) {
                    if(choixEnnemi == 1) {
                        console.log("Vous attaquez, mais " + lNom + "fait de même en" + nomAttRandom(nom));
                        vie()
                    } else if(choixEnnemi == 0) {
                        console.log("Vous attaquez, mais" + lNom + " Se defend");
                    }
                } else if (tempChoix == 2) {
                    console.log("Vous vous défendez et avec la peur, fermer les yeux.");
                    console.log("Il semblerais que vous soyez vivant");
                }
            }
        }
        
    }
    
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
    let choix;
    //let Attaquer = 1;
    //let Defendre = 2;
    //let Fuire = 3;

    while((choix != 2) && (choix != 1)){
        choix = Number(prompt("Introduire 1 pour attaquer et 2 pour defendre"));
        //J'ai laissé ton anciens codes. Vu que tu étais à deux doigt que ça fonctionne, j'ai modifier et laisser ce qu'il y avait :)
        /**if(choix > 3){
            console.log("Introduire un nombre entre 1 et 3");
        }
        else {
            console.log(choix);
        }*/
        if(choix == 1){
            return 1;
        }
        else if(choix == 2){
            return 2;
        } else {
            console.log("Veuillez entrer un chiffre entre 1, 2 et 3")
        }
    }
}
//console.log(choixAttDefFuite());


/**
 * Function qui va donner un résultat random entre attaquer et defendre
 * 
 * @returns {Number} - retourne 1 ou 2
 */
function choixEnnemi() {
    let choixEnnemi = ((Math.random() + 1).toFixed());
    
    if(choixEnnemi == 1){
        return 1;
    }
    else{
        return 2;
    }
}
//Je suis pas sûr que ça soit bon, mais j'essaie. // Commentaire dudley : Quasiment, il y avait juste trop de chiffre après la ",". J'ai du coup arranger ça avec .toFixed()

/**
 * Pour créer différentes difficulté de jeux, on choisi avec combien de vie démarre le joueur, 7 pour facile, 5 pour moyen, et 3 pour difficiles.
 * Cette function au moment d'être appelé va : 
 * -Demander à l'utilisateur de choisir en prompt entre facile, moyen et difficile
 * -Test ce qui rentre et recommence si ne correspond pas à un choix
 * -attribue une valleur a nbrVie en fonction du choix du joueur
 * -attribue une valleur a modeJeu identique que celle attribuer a nbrVie 
 * -retourne le choix pris
 * - atrribue la valeur adequat a nbrVie
 * 
 * @returns {number} - renvoie le mode de jeu (facile, moyen ou difficile) avec un number de 1, 2 ou 3
 */
function choixPorte(nbrVie) {
    let porte = prompt("Choisiez la porte (1, 2 ou 3)")
    while((porte != 1) && (porte != 2) && (porte != 3)) {
        if ((porte != 1) && (porte != 2) && (porte != 3)) {
            console.log("Mauvais choix, veuillez rerentrée une valeur entre 1, 2 et 3");
        } else if (porte == 1) {
            nbrVie = 7;
            modeJeu = 7;
            return 1
        } else if (porte == 2) {
            nbrVie = 5;
            modeJeu = 5;
            return 2
        } else if (porte == 3) {
            nbrVie = 3;
            modeJeu = 3;
            return 3
        }
    }
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
function soin(){ //Ce n'était pas nécessaire de mettre les paramètre, même si cela fonctionnais. Mais ce n'étais pas une bonne utilisation.
	if (nbreVie + 2 <= modeJeu){
		nbrVie += 2;
        return 2
	} else if (nbreVie + 1 == modeJeu){
		nbreVie += 1;
        return 1
	} else if (nbrVie == modeJeu) {
        return 0
    } //J'ai réglé le jeu pour qu'il retourne le nombre de vie gagné. Comme ça, on peux, grace au return, faire une console.log("vous avez gagné " +soin + " vie")
}
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
function vie() {
    nbrVie = nbrVie - 1;
    if(nbrVie > 0) {
        return nbrVie;
    } else if(nbrVie <= 0) {
        return false;
    }
}

//----------------------------------------------Function de focntionnement de base----------------------------------------------

function promptP(message, r1, r2, nom) {
    let temp;
    while((temp != r1) && (temp != r2)) {
        temp = prompt(message + " " + nom + " " + r1 + " ou " + r2);
    }
    return temp
} 

function nomRandom() {
    let ran = (Math.random() * (3 - 1) + 1).toFixed();
    if(ran == 1) {
        return 1;
    }
    else if(ran ==2) {
        return 2;
    }
    else if(ran ==3) {
        return 3;
    }
}

function nomAttRandom(nom) {
    if (nom == 1) {
        let temp = nomRandom();
        if (temp == 1) {
            return console.log("Passer la console en mode root");
        } else if (temp == 2) {
            return console.log("Vous jetant du code C au visage");
        } else if(temp == 3) {
            return console.log("Sniffer votre bande passante");
        }
    } 
    else if (nom == 2) {
        let temp = nomRandom();
        if (temp ==1) {
            return console.log("vous espionnant votre écran")
        } else if (temp == 2) {
            return console.log("vérifiant si le TRxx est fait");
        } else if(temp == 3) {
            return console.log("vous engeulant pour pas avoir fait la prepa");
        }
    } else if (nom == 3) {
        let temp = nomRandom();
        if (temp ==1) {
            return console.log("vous demander de faire une intégrale de tête au tableau")
        } else if (temp == 2) {
            return console.log("vous demandant la racine carré de 234567876543");
        } else if(temp == 3) {
            return console.log("faisant passer deux test en 75 minutes");
        }
    }
}

function chiffreAlea() {
    let promptUser;
    let tempChiffre = 0;
    let tempTp03Ex01_9a = (Math.random()*100).toFixed();
    promptUser = +prompt("Deviner le nombre entre 1 et 100 !");
    if (tempTp03Ex01_9a > promptUser) {
        console.log("Plus grand");
        tempChiffre += 1;
    } else if (tempTp03Ex01_9a < promptUser){
        console.log("plus petit");
        tempChiffre =+ 1;
    } else if (tempTp03Ex01_9a == promptUser) {
        console.log("égal");
        console.log("Félicitation, vous pouvez repartir en arrière")
    }
}