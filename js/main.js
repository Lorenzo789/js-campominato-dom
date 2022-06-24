

/*  generare 16 bombe casuali
 nell' array delle bombe non possono esserci due numeri uguali.

 click sulla cella blu se va bene rossa se è una bomba e fine partita (disabilitare il click)

 punteggio a fine partita con un alert? o semplicemente in console


*/

// array bombe
let listBomb = [];
 
// variabile bomba presa
let endGame;

// prendo il bottone per iniziare il gioco
const btnGameStart = document.getElementById('btn-grid-game')

btnGameStart.addEventListener( 'click', function() {

    endGame = false;

    // disabilito il click del pulsante
    document.getElementById("btn-grid-game").disabled = true;
    
    // creo una variabile per inserire poi i miei quadratini
    let parentGrid = document.getElementById("grid-game");
    
    // aggiungo una classe al parent
    parentGrid.classList.add('grid-container');
    
    listBomb = [];

    // ciclo for per la generazione casuale di 16 bombe
    for (let index = 0; index <= 16; index++) {
        
        // variabile per la generazione delle bombe
        const bombUnique = bombGenerator (listBomb, 1 , 100);
        
        // inserire le bombe generate casualmente nell'array
        listBomb.push(bombUnique);

        console.log(listBomb);
    }

    // variabile per la condizione di vittora
    let winGame = ((100) - (16));

    // ciclo for per la creazione dei quadratini
    for (let index = 0; index < 100; index++) {
        
        // funzione per la creazione di 100 div
        const newSquare = createNewSquare();
        
        // inserisco i 100 div nel parent
        parentGrid.append(newSquare);

        newSquare.addEventListener( 'click', function(){

            // condizione array bombe
            if (listBomb.includes(index + 1)) {

                // aggiungere classe active-bomb
                newSquare.classList.add('active-bomb');  

                // variabile sconfitta
                endGame = true;

                // se la variabile è true
                if (endGame == true) {
                    
                    // svuota il parent da tutti i suoi div
                    parentGrid.innerHTML = null;

                    parentGrid.classList.remove('grid-container');

                    alert('Hai Perso!!!! Premi Play per Riprovarci');

                    // riabilita il click del bottone play
                    document.getElementById("btn-grid-game").disabled = false;
                }

            } else {
                
                newSquare.classList.add('active');
                
                // variabile vittoria
                let counter = document.querySelectorAll(".active").length;

                // condizione vittoria
                if ( counter == winGame) {
                    
                    alert('Hai Vinto Premi Play per giocare ancora')
                    
                    parentGrid.innerHTML = null;
    
                    document.getElementById("btn-grid-game").disabled = false;
                }
            }

        }) 
    }
})


// * FUNCTIONS * \\
function createNewSquare() {
    const square = document.createElement('div');

    square.classList.add('square');

    return square;
}


function bombGenerator (bombNumberList, min , max) {
        
    let randomBomb;
    
    let validBomb = false;
        
    while (validBomb === false) {
    
        randomBomb = (Math.floor(Math.random() * max) + min);
    
        if ( !bombNumberList.includes(randomBomb)) {
                
            validBomb = true;
    
        }
    }   

    return randomBomb;
}
// * FUNCTIONS * \\