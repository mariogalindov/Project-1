//This will run the loteria functions once the document is ready
$(document).ready(function () {

    $("#registerPlayers").attr("style", "display: none");

    //local register click - variable that tells us if the local user has already clicked the register button
    var localRegister = false;
    var onGoingGame = false;
    // This is the array that includes the object to iterate and retrieve the img src to insert in the buttons of the board and in the selected image div
    var usedIndexNum = []; //This array is used to control which cards have already been selected when populating the selectedOrder array
    // var selectedOrder = []; //This array will be used to hold the index number of cards in the order that they will be showed to the users, it should be populated by the first user that signs in to the firebase and shared to the other so that every user sees the same carda in the same order 
    var playingOrder = 0; //This variable is used to get a count of the quantity of times the card has changed (it starts in 0), it is used to select the card from the selectedOrderArray
    var images = [
        { url: "assets/images/elGallo.jpg", dataName: "elGallo", audioURL: "assets/audio/elGallo.mp3" },
        { url: "assets/images/elDiablito.jpg", dataName: "elDiablito", audioURL: "assets/audio/elDiablito.mp3" },
        { url: "assets/images/laDama.jpg", dataName: "laDama", audioURL: "assets/audio/laDama.mp3" },
        { url: "assets/images/elCatrin.jpg", dataName: "elCatrin", audioURL: "assets/audio/elCatrin.mp3" },
        { url: "assets/images/elParaguas.jpg", dataName: "elParaguas", audioURL: "assets/audio/elParaguas.mp3" },
        { url: "assets/images/laSirena.jpg", dataName: "laSirena", audioURL: "assets/audio/laSirena.mp3" },
        { url: "assets/images/laEscalera.jpg", dataName: "laEscalera", audioURL: "assets/audio/laEscalera.mp3" },
        { url: "assets/images/laBotella.jpg", dataName: "laBotella", audioURL: "assets/audio/laBotella.mp3" },
        { url: "assets/images/elBarril.jpg", dataName: "elBarril", audioURL: "assets/audio/elBarril.mp3" },
        { url: "assets/images/elArbol.jpg", dataName: "elArbol", audioURL: "assets/audio/elArbol.mp3" },
        { url: "assets/images/elMelon.jpg", dataName: "elMelon", audioURL: "assets/audio/elMelon.mp3" },
        { url: "assets/images/elValiente.jpg", dataName: "elValiente", audioURL: "assets/audio/elValiente.mp3" },
        { url: "assets/images/elGorrito.jpg", dataName: "elGorrito", audioURL: "assets/audio/elGorrito.mp3" },
        { url: "assets/images/laMuerte.jpg", dataName: "laMuerte", audioURL: "assets/audio/laMuerte.mp3" },
        { url: "assets/images/laPera.jpg", dataName: "laPera", audioURL: "assets/audio/laPera.mp3" },
        { url: "assets/images/laBandera.jpg", dataName: "laBandera", audioURL: "assets/audio/laBandera.mp3" },
        { url: "assets/images/elBandolon.jpg", dataName: "elBandolon", audioURL: "assets/audio/elBandolon.mp3" },
        { url: "assets/images/elVioloncello.jpg", dataName: "elVioloncello", audioURL: "assets/audio/elVioloncello.mp3" },
        { url: "assets/images/laGarza.jpg", dataName: "laGarza", audioURL: "assets/audio/laGarza.mp3" },
        { url: "assets/images/elPajaro.jpg", dataName: "elPajaro", audioURL: "assets/audio/elPajaro.mp3" },
        { url: "assets/images/laMano.jpg", dataName: "laMano", audioURL: "assets/audio/laMano.mp3" },
        { url: "assets/images/laBota.jpg", dataName: "laBota", audioURL: "assets/audio/laBota.mp3" },
        { url: "assets/images/laLuna.jpg", dataName: "laLuna", audioURL: "assets/audio/laLuna.mp3" },
        { url: "assets/images/elCotorro.jpg", dataName: "elCotorro", audioURL: "assets/audio/elCotorro.mp3" },
        { url: "assets/images/elBorracho.jpg", dataName: "elBorracho", audioURL: "assets/audio/elBorracho.mp3" },
        { url: "assets/images/elNegrito.jpg", dataName: "elNegrito", audioURL: "assets/audio/elNegrito.mp3" },
        { url: "assets/images/elCorazon.jpg", dataName: "elCorazon", audioURL: "assets/audio/elCorazon.mp3" },
        { url: "assets/images/laSandia.jpg", dataName: "laSandia", audioURL: "assets/audio/laSandia.mp3" },
        { url: "assets/images/elTambor.jpg", dataName: "elTambor", audioURL: "assets/audio/elTambor.mp3" },
        { url: "assets/images/elCamaron.jpg", dataName: "elCamaron", audioURL: "assets/audio/elCamaron.mp3" },
        { url: "assets/images/lasJaras.jpg", dataName: "lasJaras", audioURL: "assets/audio/lasJaras.mp3" },
        { url: "assets/images/elMusico.jpg", dataName: "elMusico", audioURL: "assets/audio/elMusico.mp3" },
        { url: "assets/images/laArana.jpg", dataName: "laArana", audioURL: "assets/audio/laArana.mp3" },
        { url: "assets/images/elSoldado.jpg", dataName: "elSoldado", audioURL: "assets/audio/elSoldado.mp3" },
        { url: "assets/images/laEstrella.jpg", dataName: "laEstrella", audioURL: "assets/audio/laEstrella.mp3" },
        { url: "assets/images/elCazo.jpg", dataName: "elCazo", audioURL: "assets/audio/elCazo.mp3" },
        { url: "assets/images/elMundo.jpg", dataName: "elMundo", audioURL: "assets/audio/elMundo.mp3" },
        { url: "assets/images/elApache.jpg", dataName: "elApache", audioURL: "assets/audio/elApache.mp3" },
        { url: "assets/images/elNopal.jpg", dataName: "elNopal", audioURL: "assets/audio/elNopal.mp3" },
        { url: "assets/images/elAlacran.jpg", dataName: "elAlacran", audioURL: "assets/audio/elAlacran.mp3" },
        { url: "assets/images/laRosa.jpg", dataName: "laRosa", audioURL: "assets/audio/laRosa.mp3" },
        { url: "assets/images/laCalavera.jpg", dataName: "laCalavera", audioURL: "assets/audio/laCalavera.mp3" },
        { url: "assets/images/laCampana.jpg", dataName: "laCampana", audioURL: "assets/audio/laCampana.mp3" },
        { url: "assets/images/elCantarito.jpg", dataName: "elCantarito", audioURL: "assets/audio/elCantarito.mp3" },
        { url: "assets/images/elVenado.jpg", dataName: "elVenado", audioURL: "assets/audio/elVenado.mp3" },
        { url: "assets/images/elSol.jpg", dataName: "elSol", audioURL: "assets/audio/elSol.mp3" },
        { url: "assets/images/laCorona.jpg", dataName: "laCorona", audioURL: "assets/audio/laCorona.mp3" },
        { url: "assets/images/laChalupa.jpg", dataName: "laChalupa", audioURL: "assets/audio/laChalupa.mp3" },
        { url: "assets/images/elPino.jpg", dataName: "elPino", audioURL: "assets/audio/elPino.mp3" },
        { url: "assets/images/elPescado.jpg", dataName: "elPescado", audioURL: "assets/audio/elPescado.mp3" },
        { url: "assets/images/laPalma.jpg", dataName: "laPalma", audioURL: "assets/audio/laPalma.mp3" },
        { url: "assets/images/laMaceta.jpg", dataName: "laMaceta", audioURL: "assets/audio/laMaceta.mp3" },
        { url: "assets/images/elArpa.jpg", dataName: "elArpa", audioURL: "assets/audio/elArpa.mp3" },
        { url: "assets/images/laRana.jpg", dataName: "laRana", audioURL: "assets/audio/laRana.mp3" },
    ]

    // This variable includes all the properties and values of the game, meaning variables to manipulate and functions.
    var loteria = {
        timer: null,
        seconds: 5,
        numOfUsers: 4,
        miliseconds: this.seconds * 10,
        fixedMiliseconds: this.seconds * 10,
        matches: [],
        selectedObj: null,
        winner: null,


        //This function will be triggered when the user clicks the start button
        initialTrigger: function () {
            timer = setInterval(loteria.countdown, 1000);
            timerForStatusBar = setInterval(loteria.statusBar, 100);
            // timerForBean = setInterval(loteria.bean, 100);
            this.miliseconds = this.seconds * 10;
            this.fixedMiliseconds = this.seconds * 10;
            //HUGO: crear un if para validar que no existe ya esta array en el servidor, solo subirla al servidor con el primer usuario que la genere
            // this.createSelectedOrder();

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
                    $("#img" + i).attr({ "src": URLtoPlace, "width": "100%", "height": "100%", "dataname": dataNametoPlace });
                } else (i--)
            }
        },

        // This method is used to create an array with the selected index order of cards so that all of the users see the same selected cards in the same order
        createSelectedOrder: function () {
            console.log("players.length!!!!!!!!!!!!!", players.length)
            console.log("Images length: " + images.length)
            if (players.length == 1) {
                    usedIndexNum = [];
                for (var j = 0; j < images.length; j++) {
                    var randomNumber = Math.floor(Math.random() * images.length);
                    if (!usedIndexNum.includes(randomNumber)) {
                        // selectedOrder.push(randomNumber);
                        usedIndexNum.push(randomNumber);
                    } else (j--);
                    console.log("Si entro a crear el array de usedIndexNum")
                }
                
                database.ref("loteria/usedIndexNum").set(usedIndexNum);
            }
        },

        // This function selects a card
        displaySelectedCard: function () {
            // randomObj = images[selectedOrder[playingOrder]];
            randomObj = images[usedIndexNum[playingOrder]];
            randomObjURL = randomObj.url;
            randomObjDataName = randomObj.dataName;
            randomObjAudio = randomObj.audioURL;
            loteria.selectedObj = randomObj;
            $("#selectedCard").attr({ "src": randomObjURL, height: "100%", width: "100%", "dataName": randomObjDataName });
            var audio = $("<audio>").attr("src", randomObjAudio).attr("id", "audio" + randomObjDataName);
            audio.get(0).play();
            playingOrder++;
            // console.log("playingOrder: " + playingOrder)
            if (playingOrder > (usedIndexNum.length - 1)) {
                playingOrder = 0;
            }
        },

        statusBar: function () {
            loteria.miliseconds--;
            $("#preloader").attr("style", "width: " + loteria.miliseconds * 2.5 + "%")
        },

        bean: function () {
            $("#bean").attr("src", "assets/images/bean.png")
            console.log("bean");
            console.log($(".bean"));
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
                loteria.bean();
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

    // I need to check how to handle multiple element's with multiple events at the same time
    $('#nameInput').keypress(function (e) {
        var nameVal = $("#nameInput").val();
        var numVal = $("#numOfUsersInput").val();
        console.log(nameVal);
        if (e.which == 13 && nameVal === "" && numVal < 2) {
            alert("Please enter a name and a number of players of 2 or more");
        } else if (e.which == 13 && nameVal === "" && numVal >= 2) {
            alert("Please enter a name")
        } else if (e.which == 13 && nameVal !== "" && numVal < 2) {
            alert("Please enter a number of players of 2 or more")
        } else if (e.which == 13 && nameVal !== "" && numVal >= 2) {
            registerPlayer()
        }
    });

    $('#numOfUsersInput').keypress(function (e) {
        var nameVal = $("#nameInput").val();
        var numVal = $("#numOfUsersInput").val();
        console.log(nameVal);
        if (e.which == 13 && nameVal === "" && numVal < 2) {
            alert("Please enter a name and a number of players of 2 or more");
        } else if (e.which == 13 && nameVal === "" && numVal >= 2) {
            alert("Please enter a name")
        } else if (e.which == 13 && nameVal !== "" && numVal < 2) {
            alert("Please enter a number of players of 2 or more")
        } else if (e.which == 13 && nameVal !== "" && numVal >= 2) {
            registerPlayer()
        }
    });

    $('#nameInput').keyup(function () {
        if ($(this).val().length !== 0 && $("#numOfUsersInput").val() >= 2) {
            $("#registerBtn").attr("class", "waves-effect waves-light btn-large");
        }  
        else if ($(this).val().length === 0 || $("#numOfUsersInput").val() < 2 || $("#numOfUsersInput").val() === "") {
            $("#registerBtn").attr("class", "waves-effect waves-light btn-large disable");
        }
        console.log($("#numOfUsersInput").val())
    });

    $('#numOfUsersInput').keyup(function () {
        if ($(this).val().length != 0 && $("#numOfUsersInput").val() >= 2) {
            $("#registerBtn").attr("class", "waves-effect waves-light btn-large");
        }  
        else {
            $("#registerBtn").attr("class", "waves-effect waves-light btn-large disable");
        }
    });

    $("#numOfUsersInput").on("click", function() {
        if ($(this).val().length != 0 && $("#numOfUsersInput").val() >= 2) {
            $("#registerBtn").attr("class", "waves-effect waves-light btn-large");
        }  
    });

    $("#registerBtn").on("click", function () {
        if ($("#nameInput").val() !== "" && $("#numOfUsersInput") >= 2 ) {
            registerPlayer()
        }
    });

    // $("#startBtn").on("click", function () {
    //     startGame()
    // })


    // Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyAIo73sgvgZoEap6atpVgYVBen7IHiG2zw",
        authDomain: "bootcamp-take2-example.firebaseapp.com",
        databaseURL: "https://bootcamp-take2-example.firebaseio.com",
        projectId: "bootcamp-take2-example",
        storageBucket: "bootcamp-take2-example.appspot.com",
        messagingSenderId: "836834539838",
        appId: "1:836834539838:web:51b4c334db163c00d9546f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();


    var players = [];
    var index = 0



    // database.ref("loteria/winner/").set($("#nameInput").val().trim());
    database.ref("loteria/winner").on("value", function (snapshot) {
        if (snapshot.exists()) {
            loteria.winner = snapshot.val();
            clearTimeout(timer);
            clearInterval(timerForStatusBar);
            if (loteria.winner == $("#nameInput").val().trim()) {
                $.ajax({
                    url: "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=congratulations",
                    method: "GET"
                })
                    .then(function (response) {
                        console.log("Response", response);
                        var results = response.data;
                        console.log("Results", results);
                        var gifDiv = $("<div>");
                        var personImage = $("<img>");
                        personImage.attr({
                            "src": results.images.original.url,
                        });
                        gifDiv.prepend(personImage);
                        $("#congratTxt").html("<br><br><br>CONGRATULATIONS " + $("#nameInput").val().trim() + " you're the WINNER!!!")
                        $("#congratGif").prepend(gifDiv);
                    });
                $("#endGameContainer").attr("style", "display: block");
                console.log("WINNER!!!!!!!!!!!!!!!!!!!")
            } else {
                $("#congratTxt").html("<br><br><br>Thanks for playing! " + $("#nameInput").val().trim() + " your opponent: " + loteria.winner + " won, congratulate him :)")
                $("#endGameContainer").attr("style", "display: block");
                console.log("LOSER!!!!!!!!!!!!!!!!!!!")
            }
            console.log("snapshot.val()", snapshot.val());
            $("#gameContainer").attr("style", "display: none");
            $("#endGameContainer").attr("style", "display: block");
        }
    });

    database.ref("loteria/onGoingGame").on("value", function (snapshot) {
        if (snapshot.exists()) {
            onGoingGame = snapshot.val();
        }
    });

    database.ref("loteria/usedIndexNum").on("value", function (snapshot) {
        if (snapshot.exists()) {
            usedIndexNum = snapshot.val();
            // database.ref("loteria/usedIndexNum").onDisconnect().remove();
        }
    });

    database.ref("loteria/numOfUsers").on("value", function(snapshot){
        if(snapshot.exists()){
            loteria.numOfUsers = parseInt(snapshot.val());
            console.log("Num of users inside loteria object: " + loteria.numOfUsers);
        }
    })

    database.ref("loteria/players").on("value", function (snapshot) {
        if (snapshot.exists()) {
            console.log("snapshot.val()", snapshot.val());
            players = snapshot.val();

            if (players.length > 1) {
                $("#currentPlayers").html("Current players:<br>");
                for (let i = 0; i < players.length; i++) {
                    $("#noPlayers").attr("style", "display:none");
                    $("#currentPlayers").attr("style", "display:block");
                    $("#currentPlayers").append(players[i].name + "<br>");
                }
            } else {
                $("#noPlayers").attr("style", "display:block");
                $("#currentPlayers").attr("style", "display:none");
            }

            if(players.length === 0){
                $("#numOfUsersInput").attr("style","display:block");
            }
            else{
                $("#numOfUsersInput").attr("style","display:none");
            }

            if(players.length===loteria.numOfUsers && localRegister === true && onGoingGame === false){
                startGame();
                var avatarQueryURL = "https://avatars.dicebear.com/v2/bottts/" + $("#nameInput").val().trim() + ".svg"
                $("#avatarElement").attr("src", avatarQueryURL);
                // Creamos una variable que indique que ya hay un on-going game para que no permita a gente entrar si hay un juego en curso
                onGoingGame = true;
                database.ref("loteria/onGoingGame").set(onGoingGame);
                $.ajax({
                    url: "https://get.geojs.io/v1/ip/geo.js",
                    method: "GET"
                })
                    .then(function (response) {
                        console.log("Response", response);
                        console.log("Response city: " + response.geoip.region);
                        var country = response.geoip.country;
                        console.log("Country", country);
                        var city = response.geoip.region;
                        console.log("City: " + city);
                        $("#user_region").text(" " + city);
                        $("#user_country").text(" " + country);
                    });
            }
        }
    });

    function registerPlayer() {
        $("#registerPlayers").attr("style", "display: block");
        $("#welcomeContainer").attr("style", "display: none");
        if ($("#nameInput").val().trim() !== "") {
            localRegister = true;
            var newPlayer = {
                name: $("#nameInput").val().trim(),
                matches: loteria.matches,
                avatar: "https://avatars.dicebear.com/v2/bottts/" + $("#nameInput").val().trim() + ".svg"
            }
            players.push(newPlayer);

            console.log("players", players)

            database.ref("loteria/players").set(players);
            index = players.findIndex(x => x.name === $("#nameInput").val().trim());
            var pathToRemove = "loteria/players/" + index;
            console.log("pathToRemove", pathToRemove)
            database.ref(pathToRemove).onDisconnect().remove();
            if($("#numOfUsersInput").val().trim() !== "" && players.length === 1){
                database.ref("loteria/numOfUsers").set($("#numOfUsersInput").val().trim());
            }
        }
        if(players.length === 1){
            loteria.createSelectedOrder();
            onGoingGame = false;
            database.ref("loteria/chat").set("");
            database.ref("loteria/onGoingGame").set(onGoingGame);
        }
    };

    function startGame() {
        loteria.createSelectedOrder();
        if(players.length===loteria.numOfUsers){
            $("#registerPlayers").attr("style", "display: none");
            $("#welcomeContainer").attr("style", "display: none");
            $("#gameContainer").attr("style", "display: block");
            loteria.initialTrigger();
        }
    };

    $("#player-chat").keypress(function (e) {
        if (e.which == 13) {
            chat();
        }
    });

    $("#sendBtn").on("click", function (event) {
        chat();
    });

    function chat() {
        event.preventDefault();
        
        if (($("#nameInput").val().trim() !== "") && ($("#player-chat").val().trim() !== "")) {
            var msg = "<span><img height=\"30px\" weight= \"30px\" src= \"https://avatars.dicebear.com/v2/bottts/" + $("#nameInput").val().trim() + ".svg\">" + "<p> " + $("#nameInput").val().trim() + ": " + $("#player-chat").val().trim() + "</p> </span>";
            $("#player-chat").val("");

            var chatKey = database.ref().child("loteria/chat/").push().key;

            database.ref("loteria/chat/" + chatKey).set(msg);
        }
    };

    database.ref("loteria/chat/").on("child_added", function (snapshot) {
        var chatMsg = snapshot.val();
        var chatEntry = $("<div>").html(chatMsg);

        $("#chat-box").append(chatEntry);
        $("#chat-box").scrollTop($("#chat-box")[0].scrollHeight);
    });



    $('body').on('click', '.clickableCard', function () {
        if ($(this).attr("dataname") === loteria.selectedObj.dataName) {
            $("#" + this.id).parent().append('<span id="' + this.id + 'newElement' + '" class="bean img-responsive"><img src="assets/images/mr_bean.png" width="100%" height="100%" id="bean"></span>');
            $("#" + this.id).attr("class", "notClickableCard")
            $("#" + this.id).attr("style", "opacity: 0.3;")

            loteria.matches.push(this.id)
            database.ref("loteria/players/" + index + "/matches").set(loteria.matches);


            if (loteria.matches.length === 9) {
                database.ref("loteria/winner/").set($("#nameInput").val().trim());
                clearTimeout(timer);
                clearInterval(timerForStatusBar);
                // alert("You win!!!")
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
                database.ref("loteria").remove();

                $("#gameContainer").attr("style", "display: none");
                // $("#welcomeContainer").attr("style", "display: block");
            }
        } else {
            alert("Mal")
        }
    })

})
