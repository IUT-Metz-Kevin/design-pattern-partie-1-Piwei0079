// singleton

class ParametresJeu{
    private static instance: ParametresJeu;
    private parametres : {
        gameplay: {
            Difficulte: string[],
            Langue: string[],
        },
        audio: {
            VolumeSon: number,
            VolumeMusique: number,
            VolumeEffetSonore: number,
        },
        graphique: {
            Resolution : number[],
            QualiteGraphique : string[],
        }
    } 

    private constructor(){
        this.parametres = {
            gameplay:{
                Difficulte: ["Facile", "Moyenne", "Difficile"],
                Langue: ["Francais", "Anglais", "Espagnol"]
            },
            audio:{
                VolumeSon: 50,
                VolumeMusique: 50,
                VolumeEffetSonore: 50,
            },
            graphique:{
                Resolution : [1920, 1080],
                QualiteGraphique : ["Basse", "Moyenne", "Haute"],
            }
        }

    }

    public static getInstance(): ParametresJeu{
        if(!ParametresJeu.instance){
            ParametresJeu.instance = new ParametresJeu();
        }
        return ParametresJeu.instance;
    }

    public getParametres<T extends keyof typeof this.parametres>(key: T): typeof this.parametres[T] {
        return this.parametres[key];
    }
    
    public setParametre<T extends keyof typeof this.parametres>(key: T, value: typeof this.parametres[T]): void {
        this.parametres[key] = value;
    }

    public getGameplay(): { Difficulte: string[], Langue: string[] } {
        return this.parametres.gameplay;
      }
      
      public setGameplay(gameplay: { Difficulte: string[], Langue: string[] }): void {
        this.parametres.gameplay = gameplay;
      }

    public getAudio(): { VolumeSon: number, VolumeMusique: number, VolumeEffetSonore: number } {
        return this.parametres.audio;
      }
      
      public setAudio(audio: { VolumeSon: number, VolumeMusique: number, VolumeEffetSonore: number }): void {
        this.parametres.audio = audio;
      }

    public getGraphique(): { Resolution: number[], QualiteGraphique: string[] } {
        return this.parametres.graphique;
      }
      
      public setGraphique(graphique: { Resolution: number[], QualiteGraphique: string[] }): void {
        this.parametres.graphique = graphique;
      }

    public getVolumeSon(): number {
        return this.parametres.audio.VolumeSon;
    }

    public setVolumeSon(volume: number): void {
        this.parametres.audio.VolumeSon = volume;
    }

    public getVolumeMusique(): number {
        return this.parametres.audio.VolumeMusique;
    }

    public setVolumeMusique(volume: number): void {
        this.parametres.audio.VolumeMusique = volume;
    }

    public getVolumeEffetSonore(): number {
        return this.parametres.audio.VolumeEffetSonore;
    }

    public setVolumeEffetSonore(volume: number): void {
        this.parametres.audio.VolumeEffetSonore = volume;
    }

    public getLangues(): string[] {
        return this.parametres.gameplay.Langue;
    }

    public setLangues(langues: string[]): void {
        this.parametres.gameplay.Langue = langues;
    }

    public addLangue(langue: string): void {
        this.parametres.gameplay.Langue.push(langue);
    }

    public getResolutions(): number[] {
        return this.parametres.graphique.Resolution;
    }

    public setResolutions(resolutions: number[]): void {
        this.parametres.graphique.Resolution = resolutions;
    }
   

}

function main (){
    const parametresJeu = ParametresJeu.getInstance();

    console.log(parametresJeu.getParametres("gameplay"));

    parametresJeu.setParametre("gameplay", {Difficulte: ["Facile", "Moyenne", "Difficile"], Langue: ["Francais", "Anglais", "Espagnol"]});

    console.log(parametresJeu.getParametres("gameplay"));

    console.log(parametresJeu.getVolumeSon());
    parametresJeu.setVolumeSon(75);
    console.log(parametresJeu.getVolumeSon());

    console.log(parametresJeu.getLangues());
    parametresJeu.setLangues(["Francais", "Anglais", "Espagnol"]);
    console.log(parametresJeu.getLangues());

    console.log(parametresJeu.getResolutions());
    parametresJeu.setResolutions([1920, 1080]);
    console.log(parametresJeu.getResolutions());

    const langue = String(prompt("Quelle langue souhaitez-vous utiliser ?"));
    parametresJeu.addLangue(langue);
    console.log(parametresJeu.getLangues());


}

main();