$(document).ready(function() {


    //hiding instructions so they are only availible upon toggling the instructions button
    $("#instructions").hide();

    $("#help-button").click(function() {
        $("#instructions").toggle();

    })



    //using a start button to begin the game
    //start button dissapears after pressed so user can't press twice
    $("#start-button").click(function() {
        $("#start-button, #pushed").hide();


        var startValue = Math.floor(Math.random() * 101) + 19;
        var wins = 0;
        var losses = 0;
        var counter = 0;
        console.log(startValue, wins, losses);
        var img1 = Math.floor(Math.random() * 12) + 1;
        var img2 = Math.floor(Math.random() * 12) + 1;
        var img3 = Math.floor(Math.random() * 12) + 1;
        var img4 = Math.floor(Math.random() * 12) + 1;
      console.log(img1, img2, img3, img4);

        //puts the starting # in the html
        $("#targetNum").html(startValue);
        //initializes the wins losses and beginning number to 0
        $("#wins").html(wins);
        $("#loss").html(losses);
        $("#totalNum").html(counter);


        //each time an image is clicked i'm adding that numbers value to var counter.
        $("#img1").click(function() {
            counter += img1;
            //showing the current number as it's tallied
            $("#totalNum").html(counter);
            console.log(counter);

            //if then when the user reaches the starting number or goes over it
            if (counter === startValue) {
                wins++;
                $("#wins").html(wins);
                console.log("wins: " + wins);
                reset();
                $("#totalNum").html(counter);

            } else if (counter >= startValue) {
                losses++;
                $("#loss").html(losses);
                console.log("losses: " + losses);
                reset();
                $("#totalNum").html(counter);
            }
        })

        //below is basically everything the img1 code above is doing for the remaining 3 images
        $("#img2").click(function() {
            counter += img2;
            $("#totalNum").html(counter);
            console.log(counter);
            if (counter === startValue) {
                wins++;
                $("#wins").html(wins);
                console.log("wins: " + wins);
                reset();
                $("#totalNum").html(counter);

            } else if (counter >= startValue) {
                losses++;
                $("#loss").html(losses);
                console.log("losses: " + losses);
                reset();
                $("#totalNum").html(counter);
            }
        })


        $("#img3").click(function() {
            counter += img3;
            $("#totalNum").html(counter);
            console.log(counter);
            if (counter === startValue) {
                wins++;
                $("#wins").html(wins);
                console.log("wins: " + wins);
                reset();
                $("#totalNum").html(counter);

            } else if (counter >= startValue) {
                losses++;
                $("#loss").html(losses);
                console.log("losses: " + losses);
                reset();
                $("#totalNum").html(counter);
            }
        })


        $("#img4").click(function() {
            counter += img4;
            $("#totalNum").html(counter);
            console.log(counter);
            if (counter === startValue) {
                wins++;
                $("#wins").html(wins);
                console.log("wins: " + wins);
                reset();
                $("#totalNum").html(counter);

            } else if (counter >= startValue) {
                losses++;
                $("#loss").html(losses);

                console.log("losses: " + losses);
                reset();
                $("#totalNum").html(counter);
            }
        })


        //reset function that can be called when user wins or losses
        function reset() {
            startValue = Math.floor(Math.random() * 101) + 19;
            console.log("new start value: " + startValue);
            $("#targetNum").html(startValue);
            counter = 0;
            console.log(startValue, wins, losses);
            img1 = Math.floor(Math.random() * 12) + 1;
            img2 = Math.floor(Math.random() * 12) + 1;
            img3 = Math.floor(Math.random() * 12) + 1;
            img4 = Math.floor(Math.random() * 12) + 1;
            console.log(img1, img2, img3, img4);
            //I want to change the "Beginning number to New Number"
        }
    })


});