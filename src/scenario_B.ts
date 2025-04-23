// Composite

interface Departement {
    getNom(): string;
    getEmployes(): Employe[];
    ajouterEmploye(employe: Employe): void;
    supprimerEmploye(employe: Employe): void;
  }
  
  class DepartementImpl implements Departement {
    private nom: string;
    private employes: Employe[] = [];
    private departements: Departement[] = [];
  
    constructor(nom: string) {
      this.nom = nom;
    }
  
    getNom(): string {
      return this.nom;
    }
  
    getEmployes(): Employe[] {
      return this.employes;
    }
  
    ajouterEmploye(employe: Employe): void {
      this.employes.push(employe);
    }
  
    supprimerEmploye(employe: Employe): void {
      const index = this.employes.indexOf(employe);
      if (index !== -1) {
        this.employes.splice(index, 1);
      }
    }
  
    ajouterDepartement(departement: Departement): void {
      this.departements.push(departement);
    }
  
    supprimerDepartement(departement: Departement): void {
      const index = this.departements.indexOf(departement);
      if (index !== -1) {
        this.departements.splice(index, 1);
      }
    }
  
    getDepartements(): Departement[] {
      return this.departements;
    }
  }
  
  class Employe {
    private nom: string;
    private prenom: string;
  
    constructor(nom: string, prenom: string) {
      this.nom = nom;
      this.prenom = prenom;
    }
  
    getNom(): string {
      return this.nom;
    }

    getPrenom(): string {
      return this.prenom;
    }

    setPrenom(prenom: string): void {
      this.prenom = prenom;
    }
    
    setNom(nom: string): void {
      this.nom = nom;
    }
  }
  

  function main()
  {
    const departementGeneral = new DepartementImpl("Direction Générale");
    const departementTechnique = new DepartementImpl("Departement technique");
    const departementCommercial = new DepartementImpl("Departement commercial");
    const departementFinancier = new DepartementImpl("Departement financier");  

    const employe1 = new Employe("Theo", "zinzin");
    const employe2 = new Employe("Arnaud", "Fou");    

    departementGeneral.ajouterEmploye(employe1);
    departementGeneral.ajouterEmploye(employe2);

    departementTechnique.ajouterEmploye(employe1);
    departementTechnique.ajouterEmploye(employe2);

    departementCommercial.ajouterEmploye(employe1);
    departementCommercial.ajouterEmploye(employe2);

    departementFinancier.ajouterEmploye(employe1);
    departementFinancier.ajouterEmploye(employe2);

    departementGeneral.ajouterDepartement(departementTechnique);
    departementGeneral.ajouterDepartement(departementCommercial);
    departementGeneral.ajouterDepartement(departementFinancier);

    console.log(departementGeneral.getNom());
    console.log(departementGeneral.getEmployes());
    console.log(departementGeneral.getDepartements());
  }

  main();



// Dans une grande entreprise, on peut trouver les départements et sous-départements suivants :

// - Direction Générale
//   - Secrétariat général
//   - Département technique
//     - IT
//     - Web
//   - Département commercial
//     - Ventes
//     - Achats
//   - Département financier
//     - RH
//     - Comptabilité
//     - Administration

// Chaque département et sous-département peuvent avoir plusieurs employés.

// Le programme doit pouvoir transcrire l'organigramme de cette entreprise.