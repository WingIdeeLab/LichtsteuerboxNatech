let Potiwert = 0
let SensorWert = 0
basic.forever(function () {
    Potiwert = pins.analogReadPin(AnalogPin.P1) / 204
    SensorWert = pins.analogReadPin(AnalogPin.P2) / 204
    serial.writeLine("" + (Potiwert))
    serial.writeLine("" + (SensorWert))
    serial.writeLine("" + (pins.digitalReadPin(DigitalPin.P0)))
    if (SensorWert > Potiwert) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.setLedColor(0xff0000)
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        for (let Index = 0; Index <= 4; Index++) {
            led.plot(4, Index)
        }
    } else {
        for (let Index = 0; Index <= 4; Index++) {
            led.unplot(4, Index)
        }
    }
    for (let Index = 0; Index <= 4; Index++) {
        led.unplot(0, Index)
    }
    for (let Index = 0; Index <= 4; Index++) {
        led.unplot(1, Index)
    }
    for (let Index = 0; Index <= 4; Index++) {
        led.unplot(2, Index)
    }
    for (let Index = 0; Index <= SensorWert; Index++) {
        led.plot(0, Index)
    }
    led.plot(1, Potiwert)
    led.plot(2, Potiwert)
    control.waitMicros(100000)
})
