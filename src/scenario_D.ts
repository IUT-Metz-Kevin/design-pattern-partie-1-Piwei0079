interface Produit {
    getCout():number;
    getDescription():string;
}

class Coffee implements Produit{
    getCout(): number {
      return 4;
    }

    getDescription(): string {
      return 'Coffee';
    }

}

abstract class ProduitDecorator implements Produit{
    constructor(protected produit: Produit){
    }

    getCout(): number {
      return this.produit.getCout();
    }

    getDescription(): string {
      return this.produit.getDescription();
    }
}

class Lait extends ProduitDecorator{
    getCout(): number {
      return this.produit.getCout()+1;
    }

    getDescription(): string {
      return this.produit.getDescription() + ', Lait';
    }
}

class CoconutLait extends ProduitDecorator{
    getCost(): number {
        return this.produit.getCout() + 2;
      }
    
      getDescription(): string {
        return this.produit.getDescription() + ", lait de coco";
      }
    
}

class Chantilly extends ProduitDecorator {
    getCost(): number {
      return this.produit.getCout() + 1;
    }
  
    getDescription(): string {
      return this.produit.getDescription() + ", Chantilly";
    }
  }
  
  class Vanille extends ProduitDecorator {
    getCost(): number {
      return this.produit.getCout() + 0.5;
    }
  
    getDescription(): string {
      return this.produit.getDescription() + ", Saveur Vanille";
    }
  }
  
  class Sucre extends ProduitDecorator {
    getCost(): number {
      return this.produit.getCout(); // Gratuit
    }
  
    getDescription(): string {
      return this.produit.getDescription() + ", Sucre";
    }
  }


  function main(){
    let boisson : Produit = new Coffee();
    boisson = new CoconutLait(boisson);
    boisson = new Chantilly(boisson);
    boisson = new Vanille(boisson);

    console.log(`Cout total boisson: ${boisson.getCout()} euros`);
    console.log(`Description: ${boisson.getDescription()}`);

    let boissonDeux : Produit = new Coffee();
    boissonDeux = new Sucre(boissonDeux);

    console.log(`Cout total cafe: ${boissonDeux.getCout()} euros`);
    console.log(`Description: ${boissonDeux.getDescription()}`);

    
    

  }

  main();