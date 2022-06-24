

/*  generare 16 bombe casuali
 nell' array delle bombe non possono esserci due numeri uguali.

 click sulla cella blu se va bene rossa se è una bomba e fine partita (disabilitare il click)

 punteggio a fine partita con un alert? o semplicemente in console


*/

// array bombe
const listBomb = [];

const btnGameStart = document.getElementById('btn-grid-game')

btnGameStart.addEventListener( 'click', function() {

    document.getElementById("btn-grid-game").disabled = true;
    
    const parentGrid = document.getElementById("grid-game");
    
    parentGrid.classList.add('grid-container')
    
        for (let index = 0; index < 17; index++) {
    
            const bombUnique = bombGenerator (listBomb, 1 , 100);
    
            listBomb.push(bombUnique);
    
            console.log(listBomb); 
        }
    
    for (let index = 0; index < 100; index++) {
        
        const newSquare = createNewSquare();
        
        newSquare.innerHTML = (index + 1);
        
        parentGrid.append(newSquare);
        
        newSquare.addEventListener( 'click', function(){
            
            if (newSquare === listBomb.includes(bombUnique)) {
                
                newSquare.classList.add('active-bomb');
                
                this.addEventListener.disabled;
                
            } else {
                
                newSquare.classList.add('active');
                
                console.log('hai cliccato il numero' , + index + 1);
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
