/*** Perform Sequence Functions ***/
function getSequence(seq) {
    seq.push(Math.floor(Math.random() * 4) + 1);
    return(seq);
}

function highlightTile(tileNum) {
    switch(tileNum) {
        case 1:
            $(".one").addClass("action");
            setTimeout(function() {$(".one").removeClass("action");}, 250);
            break;
        case 2:
            $(".two").addClass("action");
            setTimeout(function() {$(".two").removeClass("action");}, 250);
            break;
        case 3:
            $(".three").addClass("action");
            setTimeout(function() {$(".three").removeClass("action");}, 250);
            break;
        case 4:
            $(".four").addClass("action");
            setTimeout(function() {$(".four").removeClass("action");}, 250);
            break;
    }
}

function showSequence(seq){ //this is not my function
    for (var i = 0; i < seq.length; i++) {
      (function (i) {
        setTimeout(function () {
          highlightTile(seq[i]);
        }, 500*i);
      })(i);
    };
}

/*** Set Dressing Functions ***/
function cpuTurn() {
    $("h1").text("Round " + cnt + ": Watch me!");
    $("button").hide();
}

function userTurn() {
    $("h1").text("Your turn!");
}

function cont() {
    $("h1").text("Good job! Click to move on.");
    $("button").show();
}

function gameOver() {
    $("h1").text("GAME OVER");
    $("button").fadeOut();
    $(".tile").fadeOut();
}


/*** User Sequence Functions ***/
$(".one").click(function() {
    user.push(1);
    clicks += 1;
    $(".one").addClass("action");
    setTimeout(function() {$(".one").removeClass("action");}, 250);
});

$(".two").click(function() {
    user.push(2);
    clicks += 1;
    $(".two").addClass("action");
    setTimeout(function() {$(".two").removeClass("action");}, 250);
});

$(".three").click(function() {
    user.push(3);
    clicks += 1;
    $(".three").addClass("action");
    setTimeout(function() {$(".three").removeClass("action");}, 250);
});

$(".four").click(function() {
    user.push(4);
    clicks += 1;
    $(".four").addClass("action");
    setTimeout(function() {$(".four").removeClass("action");}, 250);
});

function compare() {
    if (user[clicks-1] != seq[clicks-1]) {
        gameOver();
    }
}


/***** Game Actions *****/
var cnt = 0; //this is the counter for number of rounds
var seq = []; //empty global sequence so the sequence is not fully random
var user = []; //will be reset every turn and will take in user clicks
var clicks = 0; //tracks user clicks for indexing in seq comparison

$("button").click(function() {
    if (clicks == cnt){
        cnt += 1;
        clicks = 0;
        user = [];

        cpuTurn();

        setTimeout(function() {
            showSequence(getSequence(seq));
        }, 1000);

        setTimeout(function() {
            userTurn();
        }, 1500 + 500 * cnt);

        $(".tile").click(function() {
            if (clicks < cnt){
                compare();
            } else if (clicks == cnt) {
                compare();
                cont();
            }
        });
    } else {
        gameOver();
    }
});
