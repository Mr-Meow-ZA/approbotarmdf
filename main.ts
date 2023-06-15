function slowServo3 (deg3: number) {
    if (deg3 > servoPos3) {
        servoPos3 += 1
        motor.servo(motor.Servos.S3, servoPos3)
        basic.pause(5)
    } else if (deg3 < servoPos3) {
        servoPos3 += -1
        motor.servo(motor.Servos.S3, servoPos3)
        basic.pause(5)
    } else {
    	
    }
}
function slowServo1 (deg1: number) {
    if (deg1 > servoPos1) {
        servoPos1 += 1
        motor.servo(motor.Servos.S1, servoPos1)
        basic.pause(1)
    } else if (deg1 < servoPos1) {
        servoPos1 += -1
        motor.servo(motor.Servos.S1, servoPos1)
        basic.pause(1)
    } else {
    	
    }
}
input.onButtonPressed(Button.A, function () {
	
})
function slowServo4 (deg4: number) {
    if (deg4 > servoPos4) {
        servoPos4 += 1
        motor.servo(motor.Servos.S4, servoPos4)
        basic.pause(1)
    } else if (deg4 < servoPos4) {
        servoPos4 += -1
        motor.servo(motor.Servos.S4, servoPos4)
        basic.pause(1)
    } else {
    	
    }
}
microbitApp.onButtonUpOption(ButtonOption.Up, function () {
    motor.servo(motor.Servos.S4, 80)
})
microbitApp.onButtonOption(ButtonOption.Up, function () {
    motor.servo(motor.Servos.S4, 165)
})
input.onButtonPressed(Button.B, function () {
	
})
function slowServo2 (deg2: number) {
    if (deg2 > servoPos2) {
        servoPos2 += 1
        motor.servo(motor.Servos.S2, servoPos2)
        basic.pause(5)
    } else if (deg2 < servoPos2) {
        servoPos2 += -1
        motor.servo(motor.Servos.S2, servoPos2)
        basic.pause(5)
    } else {
    	
    }
}
let servoPos4 = 0
let servoPos3 = 0
let servoPos2 = 0
let servoPos1 = 0
slowServo1(0)
slowServo2(0)
slowServo3(0)
slowServo4(0)
servoPos1 = 0
servoPos2 = 0
servoPos3 = 0
servoPos4 = 0
basic.forever(function () {
    slowServo2(microbitApp.getSliderY())
    slowServo3(microbitApp.getSliderZ())
    slowServo1(microbitApp.getSliderX())
})
