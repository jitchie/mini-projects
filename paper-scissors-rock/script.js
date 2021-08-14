//variables to store info
let wins = 0;
let draw = 0 ;        //pass-test
let losses = 0;


//define an array with possible choices to be returned by program.
let computer_choices = ["P", "S", "R"]
let length = computer_choices.length //pass-test


//generate actual choice for comparison to user input.
let computer_selected = computer_choices[Math.floor(Math.random() * length)] //past-test



function game () {

//collect and correct user input for comparative logic.
//asigns input to upper case 
var input = window.prompt("R, P OR S").toUpperCase()



  function checkInput(input, computer_choices){
    let userChoice = input;
    let array = computer_choices;

    if(array.includes(userChoice)){
        if(userChoice==computer_selected){
          draw++ 
          window.alert('its a tie')
        } else if (
          (userChoice === "P" && computer_selected === "R") ||  //logic tested
          (userChoice === "S" && computer_selected === "P") ||
          (userChoice === "R" && computer_selected === "S") 
          ){wins++;
          window.alert("You win!");} 
          else{
            losses++;
            window.alert("You lost!");
          }

          window.window.alert(
            "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + draw
          )
          
          // option to play again
          var playAgain = window.confirm("Play again?");
          
          // If user pressed OK, run the function again
          if (playAgain) {
            game(); //call game.
          }
        
      } else{
        alert('invalid input, please wait then try again')
        setTimeout(function(){game();},2000); //pass-test
        
  
    };
    
  }
checkInput(input, computer_choices)

};

game();