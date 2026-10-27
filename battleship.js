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

// Posizionamento esplicito sarebbe simile a campo[1][2] = "N"..

// F5: Crea casualmente la nave in griglia (orizzontale)
/**
 * Per generare casualmente anche l'orientament posso sfruttare 
 * Math.random() < 0.5 (torna vero se esce da 0.4 in giù) oppure
 * generare numeri fino a 2 e calcolare se è pari o dispari
 */
const rigaNave = Math.floor(Math.random() * DIM); 

// DIM - LUNGHEZZA_NAVE + 1 perchè la riga può essere tra 0 e 4 ma non 
// non la colonna in quanto poi devo fare il +3 della lunghezza nave 
// e rischio di andare fuori matrice (Error)
// da 0 a (5 - 3 + 1) --> math.floor arrotonda per difetto rischio di 
// "mangiarmi" un numero (fino a 4 incluso) 
const colonnaNave = Math.floor(Math.random() * (DIM - LUNGHEZZA_NAVE + 1)); 


// Stringa di log da togliere successivamente
console.log("[LOG] Coordinate riga e colonna: ", rigaNave, colonnaNave); 



stampaGriglia(campo); 