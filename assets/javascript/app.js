var config = {
    apiKey: "AIzaSyBJDTKweVvTv90v0JVuxzb8kcOad-KbHww",
    authDomain: "intro-presence-123.firebaseapp.com",
    databaseURL: "https://intro-presence-123.firebaseio.com",
    projectId: "intro-presence-123",
    storageBucket: "intro-presence-123.appspot.com",
    messagingSenderId: "377126185238"
};

firebase.initializeApp(config);
var database = firebase.database();
var p1Status;
var p2Status;

initializeStartScreen();

function initializeStartScreen() {
    $(".playerScreen").html("");    // This blanks out the screen. Takes everything out
    $(".playerScreen").append("<input type='text' name='userName' id='p1Input' > <br>")
}

$('input').on('click', function () {
    console.log($(this).attr('id'))
})
database.ref().on('value', function (snap) {
    p1Status = snap.child('player1').val();
    p2Status = snap.child('player2').val();
    if (p1Status === false) {
        $("#p1").append("<button class='startButton' playerButton='p1'>Join Game</button>")
    }
    else {
        $("#" + player).html("<button class ='playerChoice' id='rock'>Rock</button> <button class ='playerChoice' id='paper'>Paper</button> <button class ='playerChoice' id='scissor'>Scissor</button>")
    }
    if (p2Status === false) {
        $("#p2").append("<button class='startButton' playerButton='p2'>Join Game</button>")
    }
    else {
        $("#" + player).html("<button class ='playerChoice' id='rock'>Rock</button> <button class ='playerChoice' id='paper'>Paper</button> <button class ='playerChoice' id='scissor'>Scissor</button>")
    }
})
database.ref().set({        //Initializing the player status
    player1: false,
    player2: false
})

$(".startButton").click(function () {
    var player = $(this).attr('playerButton');
    console.log(player);
    if ($(this).attr('playerButton') === 'p1') {
        database.ref().set({
            player1: true,
            player2: null
        })
    }
    else {
        database.ref().set({
            player1: null,
            player2: true
        })
    }
})

// $(".playerButton").click(function(){
//     var player = $(this).attr('buttonID');


//     $("#" + player).html("<button class ='playerChoice' id='rock'>Rock</button> <button class ='playerChoice' id='paper'>Paper</button> <button class ='playerChoice' id='scissor'>Scissor</button>");

//     $(".playerChoice").on('click', function(){
//         var playerMove = $(this).attr('id');
//         console.log(playerMove);
//         database.ref(player).on('', function(snap){

//         })
//     })
// })
