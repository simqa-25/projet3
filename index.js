const prompt = require('prompt-sync')()

// PROJET 3

// joueur 1

let player = {
    name: "Guerrier du Feu",
    health: 100,
    attacks: [attackOne, attackTwo, attackThree, attackFour],
};

// joueur 2

let playerTwo = {
    name: "Sombre Lutin",
    health: 100,
    attacks: [attackOne, attackTwo, attackThree, attackFour],
};

// Les attaques

let attackOne = {
    title: " Frappe Rapide",
    power: -10,
    accurancy: 2,
}

let attackTwo = {
    title: " Soin Léger ",
    power: +15,
    accurancy: 3,
}

let attackThree = {
    title: "  Coup Puissant ",
    power: -20,
    accurancy: 3,
}

let attackFour = {
    title: "  Frappe Dévastatrice ",
    power: -20,
    accurancy: 4,
}

function chooseAttacks() {
    for (let i = 0; i < player.attacks.length; i++) {
        console.log(i + 1 + " " + player.attacks[i].title);
    }
    let choice = parseInt(prompt(" Veuillez choisir une attaque entre 1 et 4 : "))
    while (isNaN(choice) && choice <= 1 && choice >= 4) {
        choice = parseInt(prompt("Veuilez rentrer un d'attaque valide 1, 2, 3, 4 : "));
    }

    return player.attacks[choice -1]
}

console.log(chooseAttacks(choice[i]));

function attack(character, target, currentAttack) {
    if (currentAttack.accurancy === random(1, currentAttack.accurancy)) {
        target.health -= currentAttack.power
        console.log(character.name + " a retire ")
    } else {
        console.log()
    }
}

function game(player, bot) {
    let currentAttack = null;
    let target = bot;

    while (player.health > 0 || bot.health > 0) {
        // On doit faire un prompt à l'user
        // Il doit choisir une attaque
        // la fontion chooseAttacks doit renvoyer l'attaque choisie
        currentAttack = chooseAttacks()
        if (currentAttack.power > 0) {
            target = player;
        }

        // Une fois l'attaque choisi on va appliquer cette attaque sur la cible
        attack(player, bot, currentAttack)
        // displayCurrentRound(player, bot, currentPlayerAttack, currentBotAttack)
        // Puis on affiche le résultat du tour de combat
        // 'Player 1 a retirer nombre de pv au player2'
    }

    // Une fois la boucle finie, on affiche le vainqueur de la partie en récupérant le nombre de pv 
}
 
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}