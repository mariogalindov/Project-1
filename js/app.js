//This will run the loteria functions once the document is ready
$(document).ready(function () {

    // This is the array that includes the object to iterate and retrieve the img src to insert in the buttons of the board and in the selected image div
    var usedIndexNum = []; //This array is used to control which cards have already been selected when populating the selectedOrder array
    // var selectedOrder = []; //This array will be used to hold the index number of cards in the order that they will be showed to the users, it should be populated by the first user that signs in to the firebase and shared to the other so that every user sees the same carda in the same order 
    var playingOrder = 0; //This variable is used to get a count of the quantity of times the card has changed (it starts in 0), it is used to select the card from the selectedOrderArray
    var images = [
        { url: "assets/images/elGallo.jpg", dataName: "elGallo" },
        { url: "assets/images/elDiablito.jpg", dataName: "elDiablito" },
        { url: "assets/images/laDama.jpg", dataName: "laDama" },
        { url: "assets/images/elCatrin.jpg", dataName: "elCatrin" },
        { url: "assets/images/elParaguas.jpg", dataName: "elParaguas" },
        { url: "assets/images/laSirena.jpg", dataName: "laSirena" },
        { url: "assets/images/laEscalera.jpg", dataName: "laEscalera" },
        { url: "assets/images/laBotella.jpg", dataName: "laBotella" },
        { url: "assets/images/elBarril.jpg", dataName: "elBarril" },
        { url: "assets/images/elArbol.jpg", dataName: "elArbol" },
        { url: "assets/images/elMelon.jpg", dataName: "elMelon" },
        { url: "assets/images/elValiente.jpg", dataName: "elValiente" },
        { url: "assets/images/elGorrito.jpg", dataName: "elGorrito" },
        { url: "assets/images/laMuerte.jpg", dataName: "laMuerte" },
        { url: "assets/images/laPera.jpg", dataName: "laPera" },
        { url: "assets/images/laBandera.jpg", dataName: "laBandera" },
        { url: "assets/images/elBandolon.jpg", dataName: "elBandolon" },
        { url: "assets/images/elVioloncello.jpg", dataName: "elVioloncello" },
        { url: "assets/images/laGarza.jpg", dataName: "laGarza" },
        { url: "assets/images/elPajaro.jpg", dataName: "elPajaro" },
        { url: "assets/images/laMano.jpg", dataName: "laMano" },
        { url: "assets/images/laBota.jpg", dataName: "laBota" },
        { url: "assets/images/laLuna.jpg", dataName: "laLuna" },
        { url: "assets/images/elCotorro.jpg", dataName: "elCotorro" },
        { url: "assets/images/elBorracho.jpg", dataName: "elBorracho" },
        { url: "assets/images/elNegrito.jpg", dataName: "elNegrito" },
        { url: "assets/images/elCorazon.jpg", dataName: "elCorazon" },
        { url: "assets/images/laSandia.jpg", dataName: "laSandia" },
        { url: "assets/images/elTambor.jpg", dataName: "elTambor" },
        { url: "assets/images/elCamaron.jpg", dataName: "elCamaron" },
        { url: "assets/images/lasJaras.jpg", dataName: "lasJaras" },
        { url: "assets/images/elMusico.jpg", dataName: "elMusico" },
        { url: "assets/images/laArana.jpg", dataName: "laArana" },
        { url: "assets/images/elSoldado.jpg", dataName: "elSoldado" },
        { url: "assets/images/laEstrella.jpg", dataName: "laEstrella" },
        { url: "assets/images/elCazo.jpg", dataName: "elCazo" },
        { url: "assets/images/elMundo.jpg", dataName: "elMundo" },
        { url: "assets/images/elApache.jpg", dataName: "elApache" },
        { url: "assets/images/elNopal.jpg", dataName: "elNopal" },
        { url: "assets/images/elAlacran.jpg", dataName: "elAlacran" },
        { url: "assets/images/laRosa.jpg", dataName: "laRosa" },
        { url: "assets/images/laCalavera.jpg", dataName: "laCalavera" },
        { url: "assets/images/laCampana.jpg", dataName: "laCampana" },
        { url: "assets/images/elCantarito.jpg", dataName: "elCantarito" },
        { url: "assets/images/elVenado.jpg", dataName: "elVenado" },
        { url: "assets/images/elSol.jpg", dataName: "elSol" },
        { url: "assets/images/laCorona.jpg", dataName: "laCorona" },
        { url: "assets/images/laChalupa.jpg", dataName: "laChalupa" },
        { url: "assets/images/elPino.jpg", dataName: "elPino" },
        { url: "assets/images/elPescado.jpg", dataName: "elPescado" },
        { url: "assets/images/laPalma.jpg", dataName: "laPalma" },
        { url: "assets/images/laMaceta.jpg", dataName: "laMaceta" },
        { url: "assets/images/elArpa.jpg", dataName: "elArpa" },
        { url: "assets/images/laRana.jpg", dataName: "laRana" },
    ]

    // This variable includes all the properties and values of the game, meaning variables to manipulate and functions.
    var loteria = {
        timer: null,
        seconds: 5,
        miliseconds: this.seconds * 10,
        fixedMiliseconds: this.seconds * 10,
        matches: [],
        selectedObj: null,

        //This function will be triggered when the user clicks the start button
        initialTrigger: function () {
            timer = setInterval(loteria.countdown, 1000);
            timerForStatusBar = setInterval(loteria.statusBar, 100);
            this.miliseconds = this.seconds * 10;
            this.fixedMiliseconds = this.seconds * 10;
            //HUGO: crear un if para validar que no existe ya esta array en el servidor, solo subirla al servidor con el primer usuario que la genere
            this.createSelectedOrder();

            //Here we'll have the random images placed in the board and in the selectedCard Div

            //Here we create the variables for the random object from the array along with its properties/values
            // randomObj = images[Math.floor(Math.random() * images.length)];
            // randomObjURL = randomObj.url;
            // randomObjDN = randomObj.dataName;

            //Here we assign the url value to the src of the selectedCard img
            // $("#selectedCard").attr({ "src": randomObjURL, height: "200px", width: "150px" });
            this.displaySelectedCard();


            var usedURLs = []

            for (var i = 1; i < 10; i++) {
                var randNum = Math.floor(Math.random() * images.length);
                var URLtoPlace = images[randNum].url;
                var dataNametoPlace = images[randNum].dataName;
                if (!usedURLs.includes(URLtoPlace)) {
                    usedURLs.push(URLtoPlace);
                    $("#img" + i).attr({ "src": URLtoPlace, height: "200px", width: "150px", "dataname": dataNametoPlace });
                } else (i--)
            }
        },

        // This method is used to create an array with the selected index order of cards so that all of the users see the same selected cards in the same order
        createSelectedOrder: function () {
            for (var j = 0; j < images.length; j++) {
                var randomNumber = Math.floor(Math.random() * images.length);
                if (!usedIndexNum.includes(randomNumber)) {
                    // selectedOrder.push(randomNumber);
                    usedIndexNum.push(randomNumber);
                } else (j--);
            }
            // console.log("usedIndexNum", usedIndexNum);
        },

        // This function selects a card
        displaySelectedCard: function () {
            // randomObj = images[selectedOrder[playingOrder]];
            randomObj = images[usedIndexNum[playingOrder]];
            randomObjURL = randomObj.url;
            randomObjDataName = randomObj.dataName;
            loteria.selectedObj = randomObj;
            $("#selectedCard").attr({ "src": randomObjURL, height: "200px", width: "150px", "dataName": randomObjDataName });
            playingOrder++
            // console.log("playingOrder: " + playingOrder)
            if (playingOrder > (usedIndexNum.length - 1)) {
                playingOrder = 0;
            }
        },

        statusBar: function () {
            loteria.miliseconds--;
            $("#preloader").attr("style", "width: " + loteria.miliseconds * 2.5 + "%")
        },
        //This is the function that runs the countdown on the timer
        countdown: function () {

            loteria.seconds--;
            var converted = timeConverter(loteria.seconds);
            // $("#time").html(converted);
            // console.log(converted);
            if (loteria.seconds <= 0) {
                // console.log("Se acabó el tiempo");
                loteria.timeUp();
            }

            //This function gives format to the countdown
            function timeConverter(t) {

                var minutes = Math.floor(t / 60);
                var seconds = t - (minutes * 60);

                if (seconds < 10) {
                    seconds = "0" + seconds;
                }

                if (minutes === 0) {
                    minutes = "00";
                }
                else if (minutes < 10) {
                    minutes = "0" + minutes;
                }

                return minutes + ":" + seconds;
            }
        },

        timeUp: function () {
            loteria.seconds = 5;
            loteria.miliseconds = 50;
            loteria.displaySelectedCard();
        },

    }

    $('#nameInput').keyup(function () {
        if ($(this).val().length != 0) {
            $("#startBtn").attr("class", "waves-effect waves-light btn-large");
        } else {
            $("#startBtn").attr("class", "waves-effect waves-light btn-large disable");
        }
    });

    $('#nameInput').keypress(function (e) {
        if (e.which == 13) {
            startGame()
        }
    });

    $("#startBtn").on("click", function () {
        startGame()
    })

    // function startGame() {
    //     $("#welcomeContainer").attr("style", "display: none");
    //     $("#gameContainer").attr("style", "display: block");
    //     if ($("#nameInput").val().trim() !== "") {
    //         loteria.initialTrigger();
    //     }
    // }

    // $('body').on('click', '.clickableCard', function () {
    //     if ($(this).attr("dataname") === loteria.selectedObj.dataName) {
    //         $("#" + this.id).parent().append('<span id="' + this.id + 'newElement' + '" class="bean"><h1>Bean</h1></span>');
    //         $("#" + this.id).attr("class", "notClickableCard")
    //         $("#" + this.id).attr("style", "opacity: 0.3;")

    //         loteria.matches.push(this.id)

    //         if (loteria.matches.length === 1) {
    //             clearTimeout(timer);
    //             clearInterval(timerForStatusBar);
    //             alert("You win!!!")
    //             for (let i = 0; i < loteria.matches.length; i++) {
    //                 $("#" + loteria.matches[i] + "newElement").html('');
    //                 $("#" + loteria.matches[i]).attr("class", "clickableCard")
    //                 $("#" + loteria.matches[i]).attr("style", "opacity: 1;")
    //             }
    //             loteria.matches = [];
    //             usedIndexNum = [];
    //             selectedOrder = [];
    //             playingOrder = 0;
    //             loteria.miliseconds = 0;
    //             loteria.fixedMiliseconds = 0;

    //             $("#gameContainer").attr("style", "display: none");
    //             $("#welcomeContainer").attr("style", "display: block");
    //         }
    //     } else {
    //         alert("Mal")
    //     }
    // })











    // Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyDphnl3y_pEJm9Lo3tGLqfW4vJGVFVTKq0",
        authDomain: "bootcamp-15178.firebaseapp.com",
        databaseURL: "https://bootcamp-15178.firebaseio.com",
        projectId: "bootcamp-15178",
        storageBucket: "bootcamp-15178.appspot.com",
        messagingSenderId: "967695164094",
        appId: "1:967695164094:web:e8633a18dea8efe8bfb4ef"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    var database = firebase.database();

    var player1 = null;
    var player2 = null;
    var yourPlayerName = "";
    // var turn = 0;






    database.ref("loteria/players/").on("value", function (snapshot) {
        if (snapshot.child("player1").exists()) {
            console.log("Player 1 exists");

            player1 = snapshot.val().player1;
            player1Name = player1.name;

            // $("#player-1").text(player1Name);
            // $("#player-1-name").text(player1Name);
            // if (player1 && player2 && (yourPlayerName === player1.name)) {
            //     $("#player-1-stats").html('Wins:<span class="badge badge-pill badge-success">' + player1.win + '</span>Ties:  <span class="badge badge-pill badge-light">' + player1.tie + '</span>Losses:  <span class="badge badge-pill badge-danger">' + player1.loss + '</span>');
            // }
        } else {
            console.log("Player 1 does NOT exist");

            player1 = null;
            player1Name = "";

            // $("#player-1-name").text("Waiting for Player 1...");
            database.ref("loteria/outcome/").remove();
        }

        if (snapshot.child("player2").exists()) {
            // $('#loadMe').modal('hide')
            console.log("Player 2 exists");

            player2 = snapshot.val().player2;
            player2Name = player2.name;

            // $("#player-2").text(player2Name);
            // $("#player-2-name").text(player2Name);
            // if (player1 && player2 && (yourPlayerName === player1.name)) {
            //     $("#player-1-stats").html('Wins: <span class="badge badge-pill badge-success">' + player1.win + '</span>Ties: <span class="badge badge-pill badge-light">' + player1.tie + '</span>Losses: <span class="badge badge-pill badge-danger">' + player1.loss + '</span>');
            // }
            // if (player1 && player2 && (yourPlayerName === player2.name)) {
            //     $("#player-2-stats").html('Wins: <span class="badge badge-pill badge-success">' + player2.win + '</span>Ties: <span class="badge badge-pill badge-light">' + player2.tie + '</span>Losses: <span class="badge badge-pill badge-danger">' + player2.loss + '</span>');
            // }
        } else {
            console.log("Player 2 does NOT exist");

            player2 = null;
            player2Name = "";

            // $("#player-2-name").text("Waiting for Player 2...");
            database.ref("loteria/outcome/").remove();
        }

        if (player1 && player2) {

            // $("#player-1-div").css("border-color", "red")
            // $("#make-choice").html("<h4>" + player1Name + ", make your choice!</h4>");
            // $("#enter-name").css("display", "none");
        }

        if (!player1 && !player2) {
            database.ref("loteria/chat/").remove();
            database.ref("loteria/turn/").remove();
            database.ref("loteria/outcome/").remove();

            // $("#chat-box").empty();
            // $("#player-1-stats").empty();
            // $("#player-2-stats").empty();
        }

    });











    function startGame() {
        event.preventDefault();

        
        
        
        $("#welcomeContainer").attr("style", "display: none");
        $("#gameContainer").attr("style", "display: block");
        if ($("#nameInput").val().trim() !== "") {
            loteria.initialTrigger();
        }





        if (($("#nameInput").val().trim() !== "") && !(player1 && player2)) {
            if (player1 === null) {
                console.log("Adding Player 1");
                yourPlayerName = $("#nameInput").val().trim();
                // $("#user").text(yourPlayerName);
                player1 = {
                    name: yourPlayerName,
                    matches: loteria.matches
                    // loss: 0,
                    // tie: 0,
                    // choice: ""
                };
                // $("#player-1").text(player1.name);
                // $("#player-1-greeting").css("display", "block");
                // $("#enter-name").css("display", "none");
                console.log(player1);
                console.log(yourPlayerName);
                database.ref().child("loteria/players/player1").set(player1);

                // database.ref().child("loteria/turn").set(1);

                database.ref("loteria/players/player1").onDisconnect().remove();

                database.ref("loteria/chat/").onDisconnect().remove();
                // database.ref("loteria/turn/").onDisconnect().remove();
                database.ref("loteria/outcome/").onDisconnect().remove();


                // $('#loadMe').modal({
                //     backdrop: "static", //remove ability to close modal with click
                //     keyboard: false, //remove option to close with keyboard
                //     show: true //Display loader!
                // })




            } else if ((player1 !== null) && (player2 === null)) {
                console.log("Adding Player 2");

                yourPlayerName = $("#nameInput").val().trim();
                player2 = {
                    name: yourPlayerName,
                    matches: matches
                    // loss: 0,
                    // tie: 0,
                    // choice: ""
                };
                // $("#player-2").text(player2.name);
                // $("#player-2-greeting").css("display", "block");
                // $("#enter-name").css("display", "none");
                database.ref().child("loteria/players/player2").set(player2);



                // if (turn === 1) {
                //     if (yourPlayerName == player2.name) {
                //         $("#waiting-div").css("display", "block");
                //     }
                // }





                database.ref("loteria/players/player2").onDisconnect().remove();

                database.ref("loteria/chat/").onDisconnect().remove();
                // database.ref("loteria/turn/").onDisconnect().remove();
                database.ref("loteria/outcome/").onDisconnect().remove();

            }

            var msg = yourPlayerName + " has joined!";
            console.log(msg);

            var chatKey = database.ref().child("loteria/chat/").push().key;

            database.ref("loteria/chat/" + chatKey).set(msg);

            $("#player-name").val("");
        }
    };






    // database.ref("loteria/turn/").on("value", function (snapshot) {
        // if (snapshot.val() === 1) {
        //     if (yourPlayerName == player1.name) {
        //         $("#player-1-div").css("display", "block");
        //         $("#player-1-buttons").css("display", "block");
        //         $("#waiting-div").css("display", "none");
        //     } else {
        //         $("#player-2-buttons").css("display", "none");
        //         if (player2 !== null) {
        //             $("#waiting-div").css("display", "block");
        //         }

        //     }



        //     console.log("TURN 1");
        //     turn = 1;
        //     $("#opponent").text(player1Name)

        //     if (player1 && player2) {
        //         $("#player-2-div").css("border-color", "black");
        //         $("#player-1-div").css("border-color", "red");
        //         $("#make-choice").html("<h4>" + player1Name + ", make your choice!</h4>");
        //     }
        //     if (snapshot.child("/outcome/").exists()) {
        //         // $("body").append("<h4>" + outcome + "!</h4>");
        //     }

        // } else if (snapshot.val() === 2) {
        //     if (yourPlayerName == player2.name) {
        //         $("#player-2-div").css("display", "block");
        //         $("#player-2-buttons").css("display", "block");
        //         $("#waiting-div").css("display", "none");
        //     } else {
        //         $("#player-1-buttons").css("display", "none");
        //         $("#waiting-div").css("display", "block");
        //     }

        //     console.log("TURN 2");
        //     turn = 2;
        //     $("#opponent").text(player2Name)

        //     if (player1 && player2) {
        //         $("#player-1-div").css("border-color", "black");
        //         $("#player-2-div").css("border-color", "red");
        //         $("#make-choice").html("<h4>" + player2Name + ", make your choice!</h4>");
        //     }
        //     if (snapshot.child("rockPaperScissors/outcome/").exists()) {
        //         $("chat-box").append("<h4>" + outcome + "!</h4>");
        //     }
        // }
    // });






    // database.ref("loteria/chat/").on("child_added", function (snapshot) {
    //     var chatMsg = snapshot.val();
    //     var chatEntry = $("<div>").html(chatMsg);

    //     $("#chat-box").append(chatEntry);
    //     $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight);
    // });





    $('#exampleFormControlTextarea1').keypress(function (e) {
        if (e.which == 13) {
            chat();
        }
    });






    $("#sendBtn").on("click", function (event) {
        chat();
    })




    function chat() {
        event.preventDefault();

        if ((yourPlayerName !== "") && ($("#exampleFormControlTextarea1").val().trim() !== "")) {
            var msg = yourPlayerName + ": " + $("#exampleFormControlTextarea1").val().trim();
            $("#exampleFormControlTextarea1").val("");

            var chatKey = database.ref().child("loteria/chat/").push().key;

            database.ref("loteria/chat/" + chatKey).set(msg);
        }
    };







    // database.ref("loteria/outcome/").on("value", function (snapshot) {
    //     var outcome = snapshot.val();
    //     // $("#round-outcome").html(snapshot.val());

    //     if (player1 && player2) {
    //         myFunction(snapshot.val());
    //     }
    // });













    $('body').on('click', '.clickableCard', function () {
        if ($(this).attr("dataname") === loteria.selectedObj.dataName) {
            $("#" + this.id).parent().append('<span id="' + this.id + 'newElement' + '" class="bean"><h1>Bean</h1></span>');
            $("#" + this.id).attr("class", "notClickableCard")
            $("#" + this.id).attr("style", "opacity: 0.3;")

            loteria.matches.push(this.id)
            database.ref().child("loteria/players/player1/matches").set(loteria.matches);


            if (loteria.matches.length === 3) {
                clearTimeout(timer);
                clearInterval(timerForStatusBar);
                alert("You win!!!")
                for (let i = 0; i < loteria.matches.length; i++) {
                    $("#" + loteria.matches[i] + "newElement").html('');
                    $("#" + loteria.matches[i]).attr("class", "clickableCard")
                    $("#" + loteria.matches[i]).attr("style", "opacity: 1;")
                }
                loteria.matches = [];
                usedIndexNum = [];
                selectedOrder = [];
                playingOrder = 0;
                loteria.miliseconds = 0;
                loteria.fixedMiliseconds = 0;

                $("#gameContainer").attr("style", "display: none");
                $("#welcomeContainer").attr("style", "display: block");
            }
        } else {
            alert("Mal")
        }
    })


    // $("#player-1-div").on("click", ".btn", function (event) {
        // event.preventDefault();
        // if (player1 && player2 && (yourPlayerName === player1.name) && (turn === 1)) {
        //     var choice = $(this).val().trim();

        //     player1.choice = choice;
        //     database.ref().child("rockPaperScissors/players/player1/choice").set(choice);

        //     turn = 2;
        //     database.ref().child("rockPaperScissors/turn").set(2);
        //     $("#round-outcome").html("");

        // }
    // });






    // $("#player-2-div").on("click", ".btn", function (event) {
        // event.preventDefault();
        // if (player1 && player2 && (yourPlayerName === player2.name) && (turn === 2)) {
        //     var choice = $(this).val().trim();
        //     player2.choice = choice;
        //     database.ref().child("rockPaperScissors/players/player2/choice").set(choice);
        //     rpsCompare();
        // }
    // });





    // function rpsCompare() {
        // if (player1.choice === "rock") {
        //     if (player2.choice === "rock") {
        //         console.log("tie");
        //         // $('.toast').toast('show');
        //         // myFunction() 

        //         // $('.alert').alert()

        //         database.ref().child("loteria/outcome/").set("Tie game!");
        //         database.ref().child("loteria/players/player1/tie").set(player1.tie + 1);
        //         database.ref().child("loteria/players/player2/tie").set(player2.tie + 1);
        //     } else if (player2.choice === "paper") {
        //         console.log("paper wins");

        //         database.ref().child("loteria/outcome/").set(player2.name + " wins! Paper beats Rock!");
        //         database.ref().child("loteria/players/player1/loss").set(player1.loss + 1);
        //         database.ref().child("loteria/players/player2/win").set(player2.win + 1);
        //     } else {
        //         console.log("rock wins");

        //         database.ref().child("loteria/outcome/").set(player1.name + " wins! Rock beats Scissors!");
        //         database.ref().child("loteria/players/player1/win").set(player1.win + 1);
        //         database.ref().child("loteria/players/player2/loss").set(player2.loss + 1);
        //     }

        // } else if (player1.choice === "paper") {
        //     if (player2.choice === "rock") {
        //         console.log("paper wins");

        //         database.ref().child("loteria/outcome/").set(player1.name + " wins!  Paper beats Rock!");
        //         database.ref().child("loteria/players/player1/win").set(player1.win + 1);
        //         database.ref().child("loteria/players/player2/loss").set(player2.loss + 1);
        //     } else if (player2.choice === "paper") {
        //         console.log("tie");

        //         database.ref().child("loteria/outcome/").set("Tie game!");
        //         database.ref().child("loteria/players/player1/tie").set(player1.tie + 1);
        //         database.ref().child("loteria/players/player2/tie").set(player2.tie + 1);
        //     } else {
        //         console.log("scissors win");

        //         database.ref().child("loteria/outcome/").set(player2.name + " wins!  Scissors beats Paper!");
        //         database.ref().child("loteria/players/player1/loss").set(player1.loss + 1);
        //         database.ref().child("loteria/players/player2/win").set(player2.win + 1);
        //     }

        // } else if (player1.choice === "scissors") {
        //     if (player2.choice === "rock") {
        //         console.log("rock wins");

        //         database.ref().child("loteria/outcome/").set(player2.name + " wins!  Rock beats Scissors!");
        //         database.ref().child("loteria/players/player1/loss").set(player1.loss + 1);
        //         database.ref().child("loteria/players/player2/win").set(player2.win + 1);
        //     } else if (player2.choice === "paper") {
        //         console.log("scissors win");

        //         database.ref().child("loteria/outcome/").set(player1.name + " wins!  Scissors beats Paper!");
        //         database.ref().child("loteria/players/player1/win").set(player1.win + 1);
        //         database.ref().child("loteria/players/player2/loss").set(player2.loss + 1);
        //     } else {
        //         console.log("tie");

        //         database.ref().child("loteria/outcome/").set("Tie game!");
        //         database.ref().child("loteria/players/player1/tie").set(player1.tie + 1);
        //         database.ref().child("loteria/players/player2/tie").set(player2.tie + 1);
        //     }
        // }

        // turn = 1;
        // database.ref().child("loteria/turn").set(1);

    // }







    // function myFunction(texto) {
        // var x = document.getElementById("snackbar");
        // x.className = "show";
        // $("#snackbar").text(texto);
        // setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    // }




























})
