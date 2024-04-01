radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showArrow(ArrowNames.West)
    } else if (receivedNumber == 2) {
        basic.showArrow(ArrowNames.East)
    } else if (receivedNumber == 3) {
        basic.showArrow(ArrowNames.North)
    } else if (receivedNumber == 4) {
        basic.showArrow(ArrowNames.South)
    } else if (receivedNumber == 5) {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendNumber(5)
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(4)
    basic.showString("D")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(1)
    basic.showString("L")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(2)
    basic.showString("R")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(3)
    basic.showString("U")
})
radio.setGroup(1)
basic.forever(function () {
	
})
