basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    . # # . .
    . . . . .
    `)
robobit.select_model(RBModel.Mk3)
basic.forever(function () {
    robobit.go(RBDirection.Forward, 100)
    if (robobit.readLine(RBLineSensor.Left) == 1) {
        robobit.rotate(RBRobotDirection.Left, 30)
    } else if (robobit.readLine(RBLineSensor.Right) == 1) {
        robobit.rotate(RBRobotDirection.Right, 30)
    } else {
        robobit.go(RBDirection.Forward, 30)
    }
})
