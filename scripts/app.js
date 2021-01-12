// JavaScript source code

    totalcards = 52;
    cardsused = 0;
    p1hand = "";
    p2hand = "";
    p1power = 0;
    p1suit = "";
    p2power = 0;
    p2suit = "";
    p1wins = 0;
    p2wins = 0;
    state1 = "";
    state2 = "";
    ties = 0;
    p121 = 0;
    p122 = 0;
    p221 = 0;
    p222 = 0;
    autoshuff = false;
    gamesplayed = 0;
    p1w = 0;
    p2w = 0;
    allties = 0;
    var playerscore = 0;
    var computerscore = 0;
    var rnum = 3;
    var tnum = 1;
    var suittype;
    var playerindex = p1power - 1;
    var computerindex = p2power - 1;
    var powercheck;
    var power2check;
    var suit = ['spades', 'hearts', 'diamonds', 'clubs'];



    var clubs = [
        './images/ClubsAce.jpg',
        './images/ClubsTwo.jpg',
        './images/ClubsThree.jpg',
        './images/ClubsFour.jpg',
        './images/ClubsFive.jpg',
        './images/ClubsSix.jpg',
        './images/ClubsSeven.jpg',
        './images/ClubsEight.jpg',
        './images/ClubsNine.jpg',
        './images/ClubsTen.jpg'
    ];

    var spades = [
        './images/SpadesAce.jpg',
        './images/SpadesTwo.jpg',
        './images/SpadesThree.jpg',
        './images/SpadesFour.jpg',
        './images/SpadesFive.jpg',
        './images/SpadesSix.jpg',
        './images/SpadesSeven.jpg',
        './images/SpadesEight.jpg',
        './images/SpadesNine.jpg',
        './images/SpadesTen.jpg'
    ];

    var hearts = [
        './images/HeartsAce.jpg',
        './images/HeartsTwo.jpg',
        './images/HeartsThree.jpg',
        './images/HeartsFour.jpg',
        './images/HeartsFive.jpg',
        './images/HeartsSix.jpg',
        './images/HeartsSeven.jpg',
        './images/HeartsEight.jpg',
        './images/HeartsNine.jpg',
        './images/HeartsTen.jpg'
    ];

    var diamonds = [
        './images/DiamondsAce.jpg',
        './images/DiamondsTwo.jpg',
        './images/DiamondsThree.jpg',
        './images/DiamondsFour.jpg',
        './images/DiamondsFive.jpg',
        './images/DiamondsSix.jpg',
        './images/DiamondsSeven.jpg',
        './images/DiamondsEight.jpg',
        './images/DiamondsNine.jpg',
        './images/DiamondsTen.jpg'
    ];



    jQuery(function () {
        jQuery('#getcards').on('click', function () {
            getcards();
            $("div#cardCountparent").children().hide();
            $('#cardCountparent').append('<p>' + (totalcards - cardsused) / 2 + '</p>');;

        });
    });

    function getcards() {
        if (cardsused == 52 && autoshuff == false)
            if (computerscore > playerscore) {
                alert("You Lose!");
            } else {
                alert("You Win!!");
            }

        if (cardsused == 52 && autoshuff == true) {
            cardsused = 0;
            getcards();
        }
        if (cardsused < 52) {
            getp1card();

            getp2card();

            printcards();
            winner(p1power, p2power);

        }


    }
    function getp1card() {
        p121 = Math.round(Math.random() * 1000);
        if (p121 > 10) { p121 = Math.round(Math.random() * 1000) }
        p122 = Math.round(p121 / 10);
        if (p122 >= 0 && p122 <= 8) { p1power = 2 }
        if (p122 >= 9 && p122 <= 16) { p1power = 3 }
        if (p122 >= 17 && p122 <= 24) { p1power = 4 }
        if (p122 >= 25 && p122 <= 32) { p1power = 5 }
        if (p122 >= 33 && p122 <= 40) { p1power = 6 }
        if (p122 >= 41 && p122 <= 48) { p1power = 7 }
        if (p122 >= 49 && p122 <= 56) { p1power = 8 }
        if (p122 >= 57 && p122 <= 64) { p1power = 9 }
        if (p122 >= 65 && p122 <= 72) { p1power = 10 }
        cardsused++;
        if (p1power == powercheck) {
            p1power--;
        } else {
            powercheck = p1power;
        }
    }
    function getp2card() {
        p221 = Math.round(Math.random() * 1000);
        if (p221 > 10) { p221 = Math.round(Math.random() * 1000) }
        p222 = Math.round(p221 / 10);
        if (p222 >= 0 && p222 <= 8) { p2power = 2 }
        if (p222 >= 9 && p222 <= 16) { p2power = 3 }
        if (p222 >= 17 && p222 <= 24) { p2power = 4 }
        if (p222 >= 25 && p222 <= 32) { p2power = 5 }
        if (p222 >= 33 && p222 <= 40) { p2power = 6 }
        if (p222 >= 41 && p222 <= 48) { p2power = 7 }
        if (p222 >= 49 && p222 <= 56) { p2power = 8 }
        if (p222 >= 57 && p222 <= 64) { p2power = 9 }
        if (p222 >= 65 && p222 <= 72) { p2power = 10 }
        cardsused++;
        if (p2power == power2check) {
            p2power--;
        } else {
            powercheck = p2power;
        }
    }

    function turnon() {
        autoshuff = true;
    }

    function turnoff() {
        autoshuff = false;
    }



    function winner() {
        p1w = p1wins;
        p2w = p2wins;
        allties = ties;
        if (p1power > p2power) {

            playerscore = playerscore + (p1power + p2power);
            $("div#pScoreparent").children().hide();
            $('#pScoreparent').append('<p>' + playerscore + '</p>');
            p1wins++;
        }
        else if (p2power > p1power) {
            p2wins++;

            computerscore = computerscore + (p1power + p2power);
            $("div#cScoreparent").children().hide();

            $('#cScoreparent').append('<p>' + computerscore + '</p>');
        }
        if (cardsused == 52 && ties > 1) {
            state2 = "p one won " + p1wins + " times, p two won " + p2wins + " times and there have been " + ties + " ties.";
            gamesplayed++;
            p1wins = p2wins = ties = 0;
        }
        if (cardsused == 52 && ties == 1) {
            state2 = "p one won " + p1wins + " times, p two won " + p2wins + " times and there have been " + ties + " tie.";
            gamesplayed++;
            p1wins = p2wins = ties = 0;
        }
        $("div#result").children().hide();
        $('#result').append('<p>' + state1 + '</p>');
        if (cardsused == 52) {
            $('#result').append('<p>' + state2 + '</p>');
        }

    }

    function tellit() {
        alert("there are " + (totalcards - cardsused) + " cards left.");
    }

    function shuffle() {
        cardsused = 0;
        p1wins = 0;
        p2wins = 0;
        ties = 0;
        $("div#playercard").children().hide();
        $("div#computercard").children().hide();
        location.reload();
    }

    function inspect() {
        alert("player 1 wins so far, " + p1w);
        alert("player 2 wins so far, " + p2w);
        alert("ties so far, " + allties);
        alert("auto shuffle is " + autoshuff);
        alert("the number of games played is " + gamesplayed);
    }

    function printcards() {



        if ((p1power == 8 || p1power == 11) && (p2power != 8 && p2power != 11)) {
            pdeclaration = "Player one drew an " + p1power;
            cdeclaration = "Player two drew a " + p2power;
        }

        else if ((p1power != 8 && p1power != 11) && (p2power == 8 || p2power == 11)) {
            pdeclaration = "Player one drew a " + p1power;
            cdeclaration = "Player two drew an " + p2power;
        }
        else if ((p1power == 8 || p1power != 11) && (p2power == 8 || p2power == 11)) {
            pdeclaration = "Player one drew an " + p1power;
            cdeclaration = "Player two drew an " + p2power;
        }
        else {
            pdeclaration = "Player one drew a " + p1power;
            cdeclaration = "Player two drew a " + p2power;
        }

        var suittype = suit[rnum];


        playerindex = p1power - 1;

        switch (rnum) {
            case rnum = 3:
                $('#pbike').attr('src', clubs[playerindex]);
                clubs.splice(playerindex, 1);
                rnum--;
                break;
            case rnum = 2:
                $('#pbike').attr('src', diamonds[playerindex]);
                diamonds.splice(playerindex, 1);
                rnum--;
                break;
            case rnum = 1:
                $('#pbike').attr('src', hearts[playerindex]);
                hearts.splice(playerindex, 1);
                break;
                rnum--;
            default:
                $('#pbike').attr('src', spades[playerindex]);
                spades.splice(playerindex, 1);
                rnum = 3;
                break;
        }
        computerindex = p2power - 1;

        switch (tnum) {
            case tnum = 1:
                $('#cbike').attr('src', clubs[computerindex]);
                clubs.splice(computerindex, 1);
                tnum++;
                break;
            case tnum = 2:
                $('#cbike').attr('src', diamonds[computerindex]);
                diamonds.splice(computerindex, 1);
                tnum++;
                break;
            case tnum = 3:
                $('#cbike').attr('src', hearts[computerindex]);
                hearts.splice(computerindex, 1);
                tnum++;
                break;
            default:
                $('#cbike').attr('src', spades[computerindex]);
                spades.splice(computerindex, 1);
                tnum = 1;
                break;
        }



        $("div#playercard").children().hide();
        $("div#computercard").children().hide();

    }


$(document).ready(function () {
    $('div#pHandParent').children().hide();
    var txt;
    var person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + person + "! How are you today?";
    }


    $('#pHandParent').append('<h2>' + person + '</h2>');
});

jQuery(function (){
    jQuery('#btnpName').on('click', function changeyourname() {

        $('div#pHandParent').children().hide();
        var txt;
        var person = "Human with no name";
        person = prompt("Please enter your name:", "Harry Potter");
        if (person == null || person == "") {
            person = "Human with no name";
        } else {
            person = "Human with no name";
        }


        $('#pHandParent').append('<h2>' + person + '</h2>');
    });
});

