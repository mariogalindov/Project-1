//This will run the loteria functions once the document is ready
$(document).ready(function () {

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
            if (players.length === 1) {
                for (var j = 0; j < images.length; j++) {
                    var randomNumber = Math.floor(Math.random() * images.length);
                    if (!usedIndexNum.includes(randomNumber)) {
                        // selectedOrder.push(randomNumber);
                        usedIndexNum.push(randomNumber);
                    } else (j--);
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
            $("#selectedCard").attr({ "src": randomObjURL, height: "200px", width: "150px", "dataName": randomObjDataName });
            var audio = $("<audio>").attr("src", randomObjAudio).attr("id", "audio"+randomObjDataName);
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

        bean: function (){
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

    $('#nameInput').keyup(function () {
        if ($(this).val().length != 0) {
            $("#registerBtn").attr("class", "waves-effect waves-light btn-large");
        } else {
            $("#registerBtn").attr("class", "waves-effect waves-light btn-large disable");
        }
    });

    $('#nameInput').keypress(function (e) {
        if (e.which == 13) {
            registerPlayer()
        }
    });

    $("#registerBtn").on("click", function () {
        registerPlayer()
    })

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


    var players = [];
    var index = 0



    // database.ref("loteria/winner/").set($("#nameInput").val().trim());
    database.ref("loteria/winner").on("value", function (snapshot) {
        if (snapshot.exists()) {
            loteria.winner = snapshot.val();
            clearTimeout(timer);
            clearInterval(timerForStatusBar);
            if (loteria.winner == $("#nameInput").val().trim()) {
                $.ajax({
                    url: "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=congratulations",
                    method: "GET"
                })
                    .then(function (response) {
                        console.log("Response", response);
                        var results = response.data;
                        console.log("Results", results);
                        var gifDiv = $("<div>");
                        var personImage = $("<img>");
                        personImage.attr({
                            "src": results.images.original.url,
                        });
                        gifDiv.prepend(personImage);
                        $("#congratTxt").html("<br><br><br>CONGRATULATIONS " + $("#nameInput").val().trim() + " you're the WINNER!!!")
                        $("#congratGif").prepend(gifDiv);
                    });
                 $("#endGameContainer").attr("style", "display: block");
                console.log("WINNER!!!!!!!!!!!!!!!!!!!")
            } else {
                $("#congratTxt").html("<br><br><br>Thanks for playing! " + $("#nameInput").val().trim() + " your opponent: " + loteria.winner + " won, congratulate him :)")
                 $("#endGameContainer").attr("style", "display: block");
                console.log("LOSER!!!!!!!!!!!!!!!!!!!")
            }
            console.log("snapshot.val()", snapshot.val());
            $("#gameContainer").attr("style", "display: none");
            $("#endGameContainer").attr("style", "display: block");
        }
    });











    database.ref("loteria/usedIndexNum").on("value", function (snapshot) {
        if (snapshot.exists()) {
            usedIndexNum = snapshot.val();
            // database.ref("loteria/usedIndexNum").onDisconnect().remove();
        }
    });


    database.ref("loteria/players").on("value", function (snapshot) {
        if (snapshot.exists()) {
            console.log("snapshot.val()", snapshot.val());
            players = snapshot.val();
        }
    });


    function registerPlayer() {
        $('#loadMe').modal({
            backdrop: "static", //remove ability to close modal with click
            keyboard: false, //remove option to close with keyboard
            show: true //Display loader!
        })
    
    }

    function startGame() {

        $('#loadMe').modal('hide');




        $("#welcomeContainer").attr("style", "display: none");
        $("#gameContainer").attr("style", "display: block");
        // if ($("#nameInput").val().trim() !== "") {
        //     loteria.initialTrigger();
        // }

        if (($("#nameInput").val().trim() !== "")) {
            var newPlayer = {
                name: $("#nameInput").val().trim(),
                matches: loteria.matches
            }
            players.push(newPlayer);

            console.log("players", players)

            database.ref("loteria/players").set(players);
            index = players.findIndex(x => x.name === $("#nameInput").val().trim());
            var pathToRemove = "loteria/players/" + index;
            console.log("pathToRemove", pathToRemove)
            database.ref(pathToRemove).onDisconnect().remove();

            

            console.log("index", index);

            loteria.initialTrigger();
        }
    };

    $('#exampleFormControlTextarea1').keypress(function (e) {
        if (e.which == 13) {
            chat();
        }
    });

    $("#sendBtn").on("click", function (event) {
        chat();
    })


    $('body').on('click', '.clickableCard', function () {
        if ($(this).attr("dataname") === loteria.selectedObj.dataName) {
            $("#" + this.id).parent().append('<span id="' + this.id + 'newElement' + '" class="bean"><img src="assets/images/mr_bean.png" width="150px" height="200px" id="bean"></span>');
            $("#" + this.id).attr("class", "notClickableCard")
            $("#" + this.id).attr("style", "opacity: 0.3;")

            loteria.matches.push(this.id)
            database.ref("loteria/players/" + index + "/matches").set(loteria.matches);


            if (loteria.matches.length === 1) {
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
