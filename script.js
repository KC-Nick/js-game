// Array of options for computer to pick from
var options = ["F", "O", "C"];

var playGame = function () {
    // Ask user for their choice
    var userChoice = window.prompt("Awaken, Hero! You have fallen unconcious, and somehow find yourself washed ashore. Before you stand a cave, a forest, and the ocean. Where do you choose to adventure to? Please Enter F, C, or O.");

    // If user pressed Cancel, immediately end function
    if (!userChoice) {
        return;
    }

    // Convert to uppercase to make comparisons easier
    userChoice = userChoice.toUpperCase();
    if (userChoice === "F") {
        window.alert("You venture into the forest, northbound. The wind whistles eerily by your ears as the leaves crunch beneath your feet. One step and you're sent falling into a trap buried into the ground. Better luck next time!");
    } else if (userChoice == "O") {
        window.alert("Something calls you about the water, moving along the coastline hypnotizingly. You wade into it, deeper and deeper. You don't feel in control of your legs. Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. Better luck next time!");
    } else if (userChoice == "C") {
        window.alert("You choose the closed shelter of the cave. You venture deeper, investigating the rudimentary drawings on the walls. There are noises coming from in the caverns, but you've lost your way. As you wander the cave, you come across a Goblin camp. Your story ends here. Better luck next time!");
    }
    // Ask user to play again
    var playAgain = window.confirm("Play again?");

    // If user pressed OK, run the function again
    if (playAgain) {
        playGame();
    }
};

// Run the game for the first time
playGame();
