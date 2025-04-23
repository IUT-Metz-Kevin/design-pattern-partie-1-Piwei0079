// Adaptateur design pattern

interface ControlerActions {
    sauter():void;
    attaquer():void;
    interargir():void;
  }


  class Xbox {
    private buttons: Map<string, string> = new Map();
  
    public constructor() {
      this.buttons.set("A", "attaquer");
      this.buttons.set("B", "interagir");
      this.buttons.set("X", "sauter");
    }

    public getButton(action: string) {
        return this.buttons.get(action);
      }

      public setButton(action: string, button: string) {
        this.buttons.set(action, button);
      }

      public buttonAction(action: string): void {
        switch (action) {
          case "sauter":
            console.log("Sauter");
            break;
          case "attaquer":
            console.log("Attaquer");
            break;
          case "interagir":
            console.log("Interagir");
            break;
          default:
            console.log("Action inconnue");
        }
      }


  }

  class XboxAdaptateur implements ControlerActions {
    private readonly _xbox : Xbox;

    constructor(xbox : Xbox){
        this._xbox = xbox;
    }

    sauter(): void {
      this._xbox.buttonAction("sauter");
    }

    attaquer(): void {
      this._xbox.buttonAction("attaquer");
    }

    interargir(): void {
      this._xbox.buttonAction("interagir");
    }
  
}

  class PS5 {
    private buttons: Map<string, string> = new Map();
  
    public constructor() {
      this.buttons.set("X", "attaquer");
      this.buttons.set("O", "interagir");
      this.buttons.set("Triangle", "sauter");
    }

    public getButton(action: string) {
        return this.buttons.get(action);
    }

    public setButton(action: string, button: string) {
        this.buttons.set(action, button);
      }



    public buttonAction(action: string): void {
        switch (action) {
          case "sauter":
            console.log("Sauter");
            break;
          case "attaquer":
            console.log("Attaquer");
            break;
          case "interagir":
            console.log("Interagir");
            break;
          default:
            console.log("Action inconnue");
        }
      }


  }

  class PS5Adaptateur implements ControlerActions {
    private readonly _ps5 : PS5;

    public constructor (ps5 : PS5){
        this._ps5 = ps5;
    }

    sauter(): void {
        this._ps5.buttonAction("sauter");
    }

    attaquer(): void {
        this._ps5.buttonAction("attaquer");
    }

    interargir(): void {
        this._ps5.buttonAction("interagir");
      
    }

}

 

  class Clavier {
    private keybinds: Map<string, string> = new Map();

    public constructor() {
      this.keybinds.set("space", "sauter");
      this.keybinds.set("left-click", "attaquer");
      this.keybinds.set("right-click", "interagir");
    }

    public buttonAction(action: string): void {
        switch (action) {
          case "sauter":
            console.log("Sauter");
            break;
          case "attaquer":
            console.log("Attaquer");
            break;
          case "interagir":
            console.log("Interagir");
            break;
          default:
            console.log("Action inconnue");
        }
      }

    public getBindKey(key: string, action: string) {
      this.keybinds.set(key, action);
    }

    public setBindKey(key: string, action: string) {
      this.keybinds.set(key, action);
    }

    public getBindAction(key: string) {
      return this.keybinds.get(key);
    }

    public setBindAction(key: string, action: string) {
      this.keybinds.set(key, action);
    }
  }

  class ClavierAdaptateur implements ControlerActions {
    private readonly _clavier: Clavier;

    constructor(clavier: Clavier) {
      this._clavier = clavier;
    }
    sauter(): void {
      this._clavier.buttonAction("sauter");
    }
    attaquer(): void {
      this._clavier.buttonAction("attaquer");
    }
    interargir(): void {
      this._clavier.buttonAction("interagir");
    }
  }



  function main(){

    const clavierAdaptateur = new ClavierAdaptateur(new Clavier());
    clavierAdaptateur.sauter();
    const ps5Adaptateur = new PS5Adaptateur(new PS5());
    ps5Adaptateur.sauter();
    const xboxAdaptateur = new XboxAdaptateur(new Xbox());
    xboxAdaptateur.sauter();


  }


  main();

  




//   - Clavier nous avons :
//   - touche espace
//   - clic gauche
//   - clic droit
// - Manette Xbox :
//   - Bouton A
//   - Bouton B
//   - Bouton X
// - Manette PS5 :
//   - Bouton X
//   - Bouton O
//   - Bouton Triangle

// Il faudrait que notre programme puisse adapter nos controlleurs pour qu'ils puissent se comporter comme un `ControlerActions`.