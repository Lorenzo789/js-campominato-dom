

/*  generare 16 bombe casuali
 nell' array delle bombe non possono esserci due numeri uguali.

 click sulla cella blu se va bene rossa se è una bomba e fine partita (disabilitare il click)

 punteggio a fine partita con un alert? o semplicemente in console


*/

// array bombe
const listBomb = [];

let endGame;

const btnGameStart = document.getElementById('btn-grid-game')

btnGameStart.addEventListener( 'click', function() {

    endGame = false;

    document.getElementById("btn-grid-game").disabled = true;
    
    let parentGrid = document.getElementById("grid-game");
    
    parentGrid.classList.add('grid-container')
    
    for (let index = 0; index < 17; index++) {
    
        const bombUnique = bombGenerator (listBomb, 1 , 100);
    
        listBomb.push(bombUnique);
    
    }
    
    for (let index = 0; index < 100; index++) {
        
        const newSquare = createNewSquare();
        
        parentGrid.append(newSquare);
        
        newSquare.addEventListener( 'click', function(){

            console.log( index + 1 , listBomb);

            if (listBomb.includes(index + 1)) {
                
                newSquare.classList.add('active-bomb');  

                endGame = true

                if (endGame == true) {
                    
                    parentGrid.innerHTML = null;

                    parentGrid.classList.remove('grid-container');

                    alert('Hai Perso!!!! Premi Play per Riprovarci')

                    document.getElementById("btn-grid-game").disabled = false;
                }

            } else {
                
                newSquare.classList.add('active');
                
                // console.log('hai cliccato il numero' , + index + 1);
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
