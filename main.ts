basic.forever(function () {
    for (let I = 0; I <= 3; I++) {
        for (let j = 0; j <= I; j++) {
            led.plot(j * 2 + (2 - I), 2)
            led.plot(2, j * 2 + (2 - I))
        }
        basic.pause(200)
    }
    basic.clearScreen()
})
