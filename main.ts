let Potiwert = 0
let SensorWert = 0
basic.forever(function () {
    Potiwert = pins.analogReadPin(AnalogPin.C16) / 250
    SensorWert = pins.analogReadPin(AnalogPin.P2) / 200
    // Wenn beide Sensoren eingesteckt --> Grün
    // Falls nur LIcht eingesteckt --> Gelb
    // Falls nur PIR eingesteckt --> Blau
    if (input.pinIsPressed(TouchPin.P1) && input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        basic.setLedColor(basic.rgb(0, 25, 0))
        led.plot(1, Potiwert)
        led.plot(2, Potiwert)
        for (let Index = 0; Index <= SensorWert; Index++) {
            led.plot(0, Index)
        }
        // Falls Licht unter Grnezwert
        // Falls PIR Aktiviert
        // Falls Nur PIR Aktiviert
        if (SensorWert < Potiwert && !(input.pinIsPressed(TouchPin.P3))) {
            basic.setLedColor(basic.rgb(0, 255, 0))
            for (let Index = 0; Index <= 4; Index++) {
                led.plot(4, Index)
            }
        } else if (!(input.pinIsPressed(TouchPin.P3))) {
            for (let Index = 0; Index <= 4; Index++) {
                led.plot(4, Index)
            }
        } else {
        	
        }
    } else if (input.pinIsPressed(TouchPin.P1) && !(input.buttonIsPressed(Button.B))) {
        // Falls LIcht unter den Grenzwert
        if (SensorWert < Potiwert) {
            basic.clearScreen()
            basic.setLedColor(basic.rgb(255, 255, 0))
            led.plot(1, Potiwert)
            led.plot(2, Potiwert)
            for (let Index = 0; Index <= SensorWert; Index++) {
                led.plot(0, Index)
            }
        } else {
            basic.clearScreen()
            basic.setLedColor(basic.rgb(25, 25, 0))
            led.plot(1, Potiwert)
            led.plot(2, Potiwert)
            for (let Index = 0; Index <= SensorWert; Index++) {
                led.plot(0, Index)
            }
        }
    } else if (!(input.pinIsPressed(TouchPin.P1)) && input.buttonIsPressed(Button.B)) {
        // Falls PIR Aktiviert
        if (!(input.pinIsPressed(TouchPin.P3))) {
            basic.clearScreen()
            basic.setLedColor(basic.rgb(0, 0, 255))
            for (let Index = 0; Index <= 4; Index++) {
                led.plot(4, Index)
            }
        } else {
            basic.clearScreen()
            basic.setLedColor(basic.rgb(0, 0, 25))
            for (let Index = 0; Index <= 4; Index++) {
                led.unplot(4, Index)
            }
        }
    } else {
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    }
    control.waitMicros(100000)
})
