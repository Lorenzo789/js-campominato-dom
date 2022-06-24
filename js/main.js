

const btnGameStart = document.getElementById('btn-grid-game')


btnGameStart.addEventListener( 'click', function() {

    document.getElementById("btn-grid-game").disabled = true;
    
    const parentGrid = document.getElementById("grid-game");
    
    parentGrid.classList.add('grid-container')
    
    for (let index = 0; index < 100; index++) {
        
        const newSquare = createNewSquare();
        
        newSquare.innerHTML = (index + 1);
        
        parentGrid.append(newSquare);
        
        newSquare.addEventListener( 'click', function(){
    
            newSquare.classList.toggle('active');

            console.log('hai cliccato il numero' , + index + 1);
    
        })

    }
})


// * FUNCTIONS * \\
function createNewSquare() {
    const square = document.createElement('div');

    square.classList.add('square');

    return square;
}





/*  generare 16 bombe casuali
 nell' array delle bombe non possono esserci due numeri uguali.

 click sulla cella blu se va bene rossa se è una bomba e fine partita (disabilitare il click)

 punteggio a fine partita con un alert? o semplicemente in console


*/



function bombGenerator () {
    
    
    
    
}


// array bombe
const listBomb = [];

for (let i = 0; i < 17; i++) {
    
    // genero dei numeri casuali da 1 a 100
    let randomBomb = (Math.floor( Math.random() * 100) + 1);

    // push numero random nella lista bombe
    listBomb.push(randomBomb);
    


}

console.log(listBomb);