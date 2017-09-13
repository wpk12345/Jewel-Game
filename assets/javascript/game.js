$(document).ready(function() {

    //Global variables

    //Need to write a "press the play button to begin playing" function

    // $("#start-button").on("click", function() {

    var startValue = Math.floor(Math.random() * 101) + 19;
    var wins = 0;
    var losses = 0;
    console.log(startValue, wins, losses);
    var jewel1;
    var jewel2;
    var jewel3;
    var jewel4;
    $("#targetNum").html(startValue);
    $("#wins").append(wins);
    $("#loss").append(losses);


    // })

    //Need to have an updated user score



    //The player will be shown a random # ranging from 19-120at the start of each game
    //I need to set a random # ranging from 19-120 for each crystal image

    //New game function that resets the image amounts and starting amount
    function gameReset() {
        var startValue = Math.floor(Math.random() * 101) + 19;

    }


    //A function when ran sets Each crystal's hidden value between 1-12
    function imageReset() {
        var random = Math.floor(Math.random() * 12) + 1;
        console.log(random);

    }


    //When a crystal is clicked, it will add a specific amount of points to the player's score
    //The game will hide this amount until the player clicks a crystal
    //When they do click one, update the player's score counter.

    //The player wins if their total score matches the random # from the beginning

    //The player loses if he goes above the random #

    //The game restarts whenever the player wins or loses.

    //When the game restarts the player should see a new #,
    //also all 4 crystals will have 4 new hidden values, and 
    //user's score (and score counter) will reset to 0.

    //The app should tally wins/losses when new game starts






});