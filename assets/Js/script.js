particlesJS("particles-js", {
    particles: {
        number: { value: 600, density: { enable: true, value_area: 500 } },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
            polygon: { nb_sides: 5 },
            image: { src: "img/github.svg", width: 100, height: 100 }
        },
        opacity: {
            value: 1,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 600 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "bubble" },
            onclick: { enable: false, mode: "repulse" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: {
                distance: 73.08694910712106,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3
            },
            repulse: { distance: 400, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});

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
