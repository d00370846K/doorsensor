input.onButtonPressed(Button.A, function () {
    I2C_LCD1602.ShowNumber(input.magneticForce(Dimension.Strength), 0, 0)
})
I2C_LCD1602.LcdInit(39)
radio.setGroup(17)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        radio.sendString("doorClosed")
        basic.clearScreen()
    } else {
        basic.showIcon(IconNames.SmallDiamond)
        radio.sendString("doorOpen")
    }
    basic.pause(2000)
})
