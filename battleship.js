const prompt = require("prompt-sync")({ sigint: true })

// Costanti di progetto. Posso dichiarare var e const o tutte all'inizio del file 
// oppure contestualmente al primo utilizzo
const DIM = 5
const LUNGHEZZA_NAVE = 3
const MAX_COLPI = 15
const SIMBOLO_ACQUA = "~"
const SIMBOLO_MANCATO = "O"
const SIMBOLO_COLPITO = "X"

// F1. Griglia è una matrice di gioco
// TODO: Migliorare grafica della griglia 
function stampaGriglia(griglia) {
    for (const riga of griglia) {
        console.log(riga);
    }
}

function creaGriglia() {
    const griglia = [];

    // "r" sta per "riga", in alternativa "i"
    for (let r = 0; r < DIM; r++) {
        const riga = [];

        // "c" sta per colonna, in alternativa "j"
        for (let c = 0; c < DIM; c++) {
            riga.push(SIMBOLO_ACQUA);
        }

        griglia.push(riga);
    }

    return griglia
}

const campo = creaGriglia(); 
const navi = creaGriglia(); 

stampaGriglia(campo); 