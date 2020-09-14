$(document).ready(function() {
    // Starting variables for timer= total time user has, interval id to stop the timer, numberRight is the number of right answers, numberWrong is the number of wrong answers, unanswered is the number of unanswered.
    var timer = 30;
    var intervalId;
    var numberRight = 0;
    var numberWrong = 0;
    var unanswered = 5;

    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    $(window).on("load", hide);
    // Hides the start button and starts the other functions to begin the quiz
    $('#start').on('click', function(){
        $(this).hide();
        show();
        run();
    });

    $('#done').on('click', function(){
        $('#start').hide();
        hide();
        results();
        stop();
    });

    // Added the function to display results
    function results(){
        var finish = $('<h2>').html('You Finished!');
        var correct = $('<p>').html('Correct: ' + numberRight);
        var incorrect = $('<p>').html('Incorrect: ' + numberWrong);
        var noAnswer = $('<p>').html('Unanswered: ' + unanswered);
        var newDiv = $('<div class="timer text-center" id="summary">');
        newDiv.append(finish);
        newDiv.append(correct);
        newDiv.append(incorrect);
        newDiv.append(noAnswer);
        $('.top:nth(2)').append(newDiv);
    }

    // Fuction for the timer dispaly and ticking away each second
    function decrement(){
        timer--;

        $("#timer").html(" " + timer + " seconds");

        if (timer === 1) {
            $("#timer").html(" " + timer + " seconds");
        }
        else if (timer === 0) {
            $('#start').hide();
            hide();
            results();
            stop();
        }
    }

    function stop(){
        clearInterval(intervalId);
    }

    function hide(){
        $('.form-group').hide();
        $('#time').hide();
        $('#done').hide();
    }

    function show(){
        $('.q1').show();
        $('#time').show();
        $('#done').show();
    }

    $('input[type=radio]').on("change", function(){
        numberRight = $('input[value=right]:checked').length;
        numberWrong = $('input[value=wrong]:checked').length;
        console.log(numberRight)
        console.log(numberWrong)
        unanswered = (5-(numberRight + numberWrong));
    });
})