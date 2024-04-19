function setup () {
    createCanvas(1600, 900, WEBGL)
    angleMode(DEGREES)
}

function draw() {
    background(30)

    rotateX(60)

    noFill()
    stroke(255)

    for (var i = 0; i < 50; i++) {

        var r = map(sin(frameCount / 2), -1, 1, 100, 200)
        var g = map (i, 0, 50, 100, 200)
        var b = map(cos(frameCount), -1, 1, 200, 100)

        stroke(r, g, b)

        beginShape()
        for (var j = 0; j < 360; j += 90) {
            var rad = i * 30
            var x = rad * cos(j)
            var y = rad * sin(j)
            var z = sin(frameCount * 2 + i * 10) * 50

            vertex(x, y, z)
        }
        endShape(CLOSE)
    }
}