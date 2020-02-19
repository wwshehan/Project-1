$("#yoda-speaker").on("click", function () {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://150000-quotes.p.rapidapi.com/random",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "150000-quotes.p.rapidapi.com",
            "x-rapidapi-key": "36df5e673amshd8002ebab572686p15a9edjsn8da90a1c31ea"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response)

        var quote = response.message
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://yodish.p.rapidapi.com/yoda.json?text=" + quote,
            "method": "POST",
            "headers": {
                "x-rapidapi-host": "yodish.p.rapidapi.com",
                "x-rapidapi-key": "36df5e673amshd8002ebab572686p15a9edjsn8da90a1c31ea",
                "content-type": "application/x-www-form-urlencoded"
            },
            "data": {}
        }

        $.ajax(settings).done(function (response) {
            // $("#before").text((response.contents.text));
            $("#random-quote").text((response.contents.translated));
            var synth = window.speechSynthesis
            var sayThis = new SpeechSynthesisUtterance(response.contents.translated)
            synth.speak(sayThis)
        });
    });

})
