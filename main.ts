basic.showIcon(IconNames.Heart)
basic.forever(function () {
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 100)
    basic.pause(1000)
})
