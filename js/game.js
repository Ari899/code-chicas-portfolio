/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
    
/*----- app's state (variables) -----*/
let board; 
let turn = "X";
let win;


/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
const message = document.querySelector('h2');
const xScore = document.getElementById('x-score');
const yScore = 

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
document.getElementById('reset-button').addEventListener('click', init);


/*----- functions -----*/
function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo) {
        if (board[combo[0]] && board[combo[0]]=== board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]]
        
    });
    return winner ? winner : board.includes('') ? null : 'T';
};


function init() {
    board = ['', '', '', '', '', '', '', '', ''];
    render();
};


function render() {
    // some logic for determining how to render the game
    board.forEach(function(value, index) {
        squares[index].textContent = value;
        console.log(value, index);
    });
    
    
};

function handleTurn(event) {
    let idx = squares.findIndex(function(square){
        return square === event.target;
    });
    board[idx] = turn;
    win = getWinner();
    //this is a ternary
    turn = turn === 'X' ? 'O' : 'X';
    message.textContent = win === 'T' ? `That's a tie!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
    render(); 
};

function myScore() {
    
    myScore.text = "Score " + getWinner;
    myScore.update();
}
  
init();
