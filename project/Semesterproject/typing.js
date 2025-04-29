
document.getElementById("tth").addEventListener('click', function() {
    var typed = new Typed('#textHe', {
        strings: ["You...", "I can't talk much. ^1000", "But.. please, run.^1000", "Run for your life.\nSo they won't get you ^1000", "Ignore the weight of your clothes. ^1000 \nJust don't stand still.", "You don't wanna end up like me...^1000", "..."],
        typeSpeed: 45
    })
    typed.options.onComplete = function() {
        document.getElementById('continue').style.display = 'block'
    }
})

  
