// This is the array that includes the object to iterate and retrieve the img src to insert in the buttons of the board and in the selected image div
var images = [
    {
        url: "https://i.pinimg.com/originals/77/67/37/776737eab9c2d070a2d30abcb1ef8a60.jpg",
        dataName: "elGallo"
    },
    {
        url: "https://i.pinimg.com/originals/24/d8/10/24d81000f6900fd28330aa618bd51a28.jpg",
        dataName: "elDiablito"
    },
    {
        url: "http://www.tucameo.com/wp-content/uploads/2018/09/la-dama-loteria-mexicana-para-sublimar.jpg",
        dataName: "laDama"
    },
    {
        url: "https://dam.tbg.com.mx/content/dam/tbg/mexico/natgeo/mx/traveler/agenda/17/11/01/historia-del-catrin-2.jpg.imgo.jpg",
        dataName: "elCatrin"
    },
    {
        url: "https://i.pinimg.com/originals/e7/10/9a/e7109ab6052b09ce81a3f806037ea4e4.jpg",
        dataName: "elParaguas"
    },
    {
        url: "https://i.pinimg.com/originals/fa/fd/0e/fafd0ed0c9b52ad0c1d5778f7cbf3609.jpg",
        dataName: "laSirena"
    },
    {
        url: "https://www.welovecmyk.com/wp-content/uploads/2016/10/loteria-la-escalera-mexican-retro-illustration-art-print-vintage-giclee-on-cotton-canvas-and-paper-canvas-poster-wall-decor-5817af684.jpg",
        dataName: "laEscalera"
    },
    {
        url: "https://www.welovecmyk.com/wp-content/uploads/2016/10/loteria-la-botella-mexican-retro-illustration-art-sticker-5817b20d2.jpg",
        dataName: "laBotella"
    },
    {
        url: "https://i.pinimg.com/originals/9a/c7/1e/9ac71e85797657e8b0625e0f521482d0.jpg",
        dataName: "elBarril"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/51MP0Mk3jZL._SY679_.jpg",
        dataName: "elArbol"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/61YprM6oZ3L._SY679_.jpg",
        dataName: "elMelon"
    },
    {
        url: "https://i.pinimg.com/originals/2e/24/f7/2e24f755bcf84c5126bab39d43b3f8cd.jpg",
        dataName: "elValiente"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/7182n7btmdL._SY500_.jpg",
        dataName: "elGorrito"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/51%2Brlz76SIL._SY679_.jpg",
        dataName: "laMuerte"
    },
    {
        url: "https://i.pinimg.com/originals/ed/de/2b/edde2b5ee1e5a43e1177a549e49e96e6.jpg",
        dataName: "laPera"
    },
    {
        url: "https://i.pinimg.com/originals/eb/58/b5/eb58b5919c27b28699b14e6babc8901f.jpg",
        dataName: "laBandera"
    },
    {
        url: "https://i.etsystatic.com/5752197/r/il/7ec773/378683974/il_570xN.378683974_kn52.jpg",
        dataName: "elBandolon"
    },
    {
        url: "https://i.pinimg.com/originals/26/db/32/26db3285d5873141a03cbe4580850ee1.jpg",
        dataName: "elVioloncello"
    },
    {
        url: "https://i.etsystatic.com/11828687/r/il/118131/902896502/il_570xN.902896502_ob5x.jpg",
        dataName: "laGarza"
    },
    {
        url: "https://ih0.redbubble.net/image.576453897.1822/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg",
        dataName: "elPajaro"
    },
    {
        url: "https://i.pinimg.com/originals/3e/10/97/3e10975118d80ab7be19ca5cf7d76f74.jpg",
        dataName: "laMano"
    },
    {
        url: "https://www.welovecmyk.com/wp-content/uploads/2016/10/loteria-la-bota-mexican-retro-illustration-art-print-vintage-giclee-on-cotton-canvas-and-paper-canvas-poster-wall-decor-5817b5492.jpg",
        dataName: "laBota"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/51kLooJAD-L._SY550_.jpg",
        dataName: "laLuna"
    },
    {
        url: "https://i.pinimg.com/originals/2d/29/0b/2d290b44d8da54cbfe533f6e203f0006.jpg",
        dataName: "elCotorro"
    },
    {
        url: "https://s3.amazonaws.com/image-products/133834/133834-1024.jpg",
        dataName: "elBorracho"
    },
    {
        url: "https://i.pinimg.com/originals/b9/7a/43/b97a4367a1c2f9cd7025add3970607d9.jpg",
        dataName: "elNegrito"
    },
    {
        url: "https://i.pinimg.com/originals/c4/d5/09/c4d50974b1c5eee992d33609bd5badb8.jpg",
        dataName: "elCorazon"
    },
    {
        url: "https://i.pinimg.com/originals/e4/19/1c/e4191c1f9f6f475b52c490d678f981de.jpg",
        dataName: "laSandia"
    },
    {
        url: "https://s3.amazonaws.com/image-products/131863/131863-1024.jpg",
        dataName: "elTambor"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/71xu%2BdWnHSL._SY500_.jpg",
        dataName: "elCamaron"
    },
    {
        url: "https://i.pinimg.com/originals/37/49/63/374963de93226fb8b8d8d6da8872fe57.jpg",
        dataName: "lasJaras"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/61hhiygL%2BEL._SY550_.jpg",
        dataName: "elMusico"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/71nOQ1c2hkL._SY679_.jpg",
        dataName: "laAraña"
    },
    {
        url: "https://i.pinimg.com/originals/d4/3e/7a/d43e7abda3364a861113b1003492787e.jpg",
        dataName: "elSoldado"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/61v3nm1%2BP1L._SY679_.jpg",
        dataName: "laEstrella"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/51fHp3Y93KL._SY679_.jpg",
        dataName: "elCazo"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/61SOgcsNu5L._SY679_.jpg",
        dataName: "elMundo"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/61Mb1ZEOtvL._SY679_.jpg",
        dataName: "elApache"
    },
    {
        url: "https://i.pinimg.com/474x/02/b5/be/02b5be4c2658ce3adbadfa9cd09e4ee3.jpg",
        dataName: "elNopal"
    },
    {
        url: "https://i.pinimg.com/236x/b7/03/2c/b7032cffb3c571e4b97d3800f5b535ec.jpg?nii=t",
        dataName: "elAlacran"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/51Hh2ysSTSL._SY679_.jpg",
        dataName: "laRosa"
    },
    {
        url: "https://i.etsystatic.com/11828687/r/il/c00c2e/1063464513/il_570xN.1063464513_r8li.jpg",
        dataName: "laCalavera"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/51uVmDoTavL._SY679_.jpg",
        dataName: "laCampana"
    },
    {
        url: "https://i.etsystatic.com/11828687/r/il/70c371/870933256/il_794xN.870933256_4536.jpg",
        dataName: "elCantarito"
    },
    {
        url: "https://i.etsystatic.com/11828687/r/il/fed52c/892314426/il_570xN.892314426_tevd.jpg",
        dataName: "elVenado"
    },
    {
        url: "https://ih1.redbubble.net/image.662786184.7043/flat,750x,075,f-pad,750x1000,f8f8f8.u7.jpg",
        dataName: "elSol"
    },
    {
        url: "https://i.pinimg.com/originals/13/80/24/13802479bfad7792215c6ad57500293b.jpg",
        dataName: "laCorona"
    },
    {
        url: "https://i.pinimg.com/originals/89/80/4d/89804d6a2b94a6cae77a2ca940d44702.jpg",
        dataName: "laChalupa"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/51bnvf4C1mL._SY679_.jpg",
        dataName: "elPino"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/61qRjKQ7ocL._SY679_.jpg",
        dataName: "elPescado"
    },
    {
        url: "https://i.pinimg.com/originals/6a/d1/2e/6ad12edd2c5ba8bb7b1f7c361d4a717b.jpg",
        dataName: "laPalma"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/61U%2BzGybzrL._SY679_.jpg",
        dataName: "laMaceta"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/61xa-vzyoML._SY679_.jpg",
        dataName: "elArpa"
    },
    {
        url: "https://images-na.ssl-images-amazon.com/images/I/61NdaRPgkmL._SY679_.jpg",
        dataName: "laRana"
    },
]

// This variable includes all the properties and values of the game, meaning variables to manipulate and functions.
var loteria = {
    timer: null,
    seconds: 5,
    matches: [],
    selectedObj: null,

    //This function will be triggered when the user clicks the start button
    initialTrigger: function () {
        timer = setInterval(loteria.countdown, 1000);


        //Here we'll have the random images placed in the board and in the selectedCard Div

        //Here we create the variables for the random object from the array along with its properties/values
        // randomObj = images[Math.floor(Math.random() * images.length)];
        // randomObjURL = randomObj.url;
        // randomObjDN = randomObj.dataName;

        //Here we assign the url value to the src of the selectedCard img
        // $("#selectedCard").attr({ "src": randomObjURL, height: "200px", width: "150px" });
        this.displaySelectedCard();


        var usedURLs = []

        for (var i = 1; i < 17; i++) {
            var URLtoPlace = images[Math.floor(Math.random() * images.length) + 1].url;
            console.log(URLtoPlace);
            if (!usedURLs.includes(URLtoPlace)) {
                usedURLs.push(URLtoPlace);
                $("#img" + i).attr({ "src": URLtoPlace, height: "200px", width: "150px" });
            } else (i--)
        }
    },

    // This function selects a card
    displaySelectedCard: function () {
        randomObj = images[Math.floor(Math.random() * images.length) + 1];
        randomObjURL = randomObj.url;
        loteria.selectedObj = randomObj;
        $("#selectedCard").attr({ "src": randomObjURL, height: "200px", width: "150px" });
    },

    //This is the function that runs the countdown on the timer
    countdown: function () {

        loteria.seconds--;
        var converted = timeConverter(loteria.seconds);
        // $("#time").html(converted);
        $("#preloader").attr("style", "width: " + loteria.seconds * 25 + "%")
        console.log(converted);
        if (loteria.seconds <= 0) {
            console.log("Se acabó el tiempo");
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
        loteria.displaySelectedCard();
    },

}

//This will run the loteria functions once the document is ready
$(document).ready(function () {

    $('#nameInput').keyup(function () {
        if ($(this).val().length != 0) {
            $("#startBtn").attr("class", "waves-effect waves-light btn-large");
        } else {
            $("#startBtn").attr("class", "waves-effect waves-light btn-large disable");
        }
    });


    $("#startBtn").on("click", function () {
        $("#welcomeContainer").attr("style", "display: none");
        $("#gameContainer").attr("style", "display: block");
        if ($("#nameInput").val().trim() !== "") {
            loteria.initialTrigger();
        }


    })

    //  Click handler for all elements with "clickable" class
    $('body').on('click', '.clickableCard', function () {
        if (this.src === loteria.selectedObj.url) {
            console.log(this.id)
            $("#" + this.id).parent().append('<span id="' + this.id + 'newElement' + '" class="bean"><h1>Bean</h1></span>');
            $("#" + this.id).attr("class", "notClickableCard")
            $("#" + this.id).attr("style", "opacity: 0.3;")

            loteria.matches.push(this.id)

            if (loteria.matches.length === 16) {
                alert("You win!!!")
                clearTimeout(timer);
                for (let i = 0; i < loteria.matches.length; i++) {
                    $("#" + loteria.matches[i] + "newElement").html('');
                    $("#" + loteria.matches[i]).attr("class", "clickableCard")
                    $("#" + loteria.matches[i]).attr("style", "opacity: 1;")
                }
                loteria.matches = [];
                $("#gameContainer").attr("style", "display: none");
                $("#welcomeContainer").attr("style", "display: block");
            }
        } else {
            alert("Mal")
        }
    })
















})
