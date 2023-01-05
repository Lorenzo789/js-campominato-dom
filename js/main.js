

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

    // prendo il valore selezionato della difficolta
    const difficultySelect = document.getElementById("select-difficulty").value;
    
    // aggiungo una classe al parent
    parentGrid.classList.add('grid-container');
    
    if (difficultySelect == "1") {
        createGame(100, 'square', 100);
    } else if (difficultySelect == "2") {
        createGame(60, 'square-medium', 60);
    } else if (difficultySelect == "3") {
        createGame(20, 'square-hard', 20);
    }
})


// * FUNCTIONS * \\
function createNewSquare(classToAdd) {
    const square = document.createElement('div');

    square.classList.add(classToAdd);

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

function createGame(square, classToAdd, maxBomb) {

    // creo una variabile per inserire poi i miei quadratini
    let parentGrid = document.getElementById("grid-game");

    // aggiungo una classe al parent
    parentGrid.classList.add('grid-container');

    // variabile per la condizione di vittora
    let winGame = ((maxBomb) - (16));

    listBomb = [];

    // ciclo for per la generazione casuale di 16 bombe
    for (let index = 1; index <= 16; index++) {
        
        // variabile per la generazione delle bombe
        const bombUnique = bombGenerator (listBomb, 1, maxBomb);
        
        // inserire le bombe generate casualmente nell'array
        listBomb.push(bombUnique);

        console.log(listBomb);
    }

     // ciclo for per la creazione dei quadratini
     for (let index = 0; index < square; index++) {
        
        // funzione per la creazione di 100 div
        const newSquare = createNewSquare(classToAdd);
        
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
}
// * FUNCTIONS * \\