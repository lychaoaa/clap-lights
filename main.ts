let lightOn = false
input.onSound(DetectedSound.Loud, function () {
    lightOn = !(lightOn)
    if (true) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
