// frabrique design pattern

// Dans un jeu vidéo de type RPG ou jeu d'aventure, vous avez besoin de créer différents types de personnages :

// - Guerrier
// - Magicien
// - Archer

// Ces personnages partagent le même comportement : "Attaquer". Mais ce ne sera pas la même attaque selon que le personnage soit un Guerrier, un Magicien ou un Archer.

// On doit pouvoir ajouter d'autres personnages facilement en déléguant la création des personnages à une classe.

// Le principe de la fabrique est de créer des classes abstraites et de laisser les sous-classes créer les instances des classes concretes.

interface comportementsPersonnages {
    attaquer(): string;
}

abstract class personnages implements comportementsPersonnages {
    abstract attaquer(): string;
}

class creationPersonnages {
   private typePersonnage: comportementsPersonnages[]=[];

   ajouterPersonnage(personnage: comportementsPersonnages): void {
       this.typePersonnage.push(personnage);
   }

   creerPersonnage(type: string): comportementsPersonnages | null{
    let personnage: comportementsPersonnages;
    switch (type) {
        case "Guerrier":
            personnage = new Guerrier();
            break;
        case "Magicien":
            personnage = new Magicien();
            break;
        case "Archer":
            personnage = new Archer();
            break;
        default:
            console.log("Personnage non supporté.");
            return null;
    }
    this.ajouterPersonnage(personnage);
    return personnage;
}


}

class Guerrier extends personnages {
    attaquer(): string {
        return "Attaque a la machette";
    }
}
class Magicien extends personnages {
    attaquer(): string {
        return "Attaque magicienne des tenebres";
    }
}
class Archer extends personnages {
    attaquer(): string {
        return "Tir dans sa jambe";
    }
}


const creation = new creationPersonnages();
const guerrier = creation.creerPersonnage("Guerrier");
const magicien = creation.creerPersonnage("Magicien");
const archer = creation.creerPersonnage("Archer");

if (guerrier) {
    console.log(guerrier.attaquer());
}
if (magicien) {
    console.log(magicien.attaquer());
}
if (archer) {
    console.log(archer.attaquer());
}



