// VEDI FILE DI ANALISI E PROGETTAZIONE; ALGORITMO IN PARTICOLARE

const prompt = require("prompt-sync")({ sigint: true })

// Costanti di progetto. Posso dichiarare var e const o tutte all'inizio del file 
// oppure contestualmente al primo utilizzo
const DIM = 5;
const LUNGHEZZA_NAVE = 3;
const MAX_COLPI = 15;
const SIMBOLO_ACQUA = "~";
const SIMBOLO_MANCATO = "O";
const SIMBOLO_COLPITO = "X";
const SIMBOLO_NAVE = "N";

let colpi = 0; // Contatore colpi sparati 
let colpite = 0; // Contatore caselle colpite

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

// Devo posizionare la mia nave
for (let i = 0; i < LUNGHEZZA_NAVE; i++) {
    navi[rigaNave][colonnaNave + i] = SIMBOLO_NAVE;
}


stampaGriglia(campo);
console.log();
stampaGriglia(navi);

while (colpite < LUNGHEZZA_NAVE && colpi < MAX_COLPI) {
    console.log();

    // TODO: quel 4 nella stringa deve essere parametrico DIM-1
    const rigaAttacco = Number(prompt("Riga (0-4): "));
    const colonnaAttacco = Number(prompt("Riga (0-4): "));

    // il continue perché se la coordinata in qualche modo non è valida devo fermarmi e richiedere un input valido,
    // non posso proseguire
    if (!Number.isInteger(rigaAttacco) || !Number.isInteger(colonnaAttacco)
        || rigaAttacco < 0 || rigaAttacco > DIM || colonnaAttacco < 0 || colonnaAttacco > DIM) {

        // TODO: Ri-scrivere in console quale era la coordinata
        console.log("Coordinata non valida, riprova."); 
        continue; 
    }

    if (campo[rigaAttacco][colonnaAttacco] !== SIMBOLO_ACQUA) {
        console.log("Hai già sparato in questa casella, ripova."); 
        continue;
    }

    colpi++; // Coordinata valida e nuova, aggiungo un +1 al contatore dei colpi sparati
}