input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    motor.motorStop(motor.Motors.M1)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 197)
})
basic.forever(function () {
	
})
