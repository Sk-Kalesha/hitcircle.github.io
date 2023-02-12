const canvas1 = document.getElementById("canvas1");
const canvas2 = document.getElementById("canvas2");
const canvas3 = document.getElementById("canvas3");
const canvas4 = document.getElementById("canvas4");

let x = 900;

function drawCanvas(canvas, color, x) {
    canvas.height = 150;
    canvas.width = 1000;

    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 1;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(75, 75, 40, 0, 2 * Math.PI);
    ctx.fill();

    const cta = canvas.getContext("2d");
    cta.lineWidth = 1;
    cta.beginPath();
    cta.fillStyle = "white";
    cta.moveTo(x, 78);
    cta.lineTo(x + 30, 66);
    cta.lineTo(x + 30, 75);
    cta.lineTo(x + 80, 75);
    cta.lineTo(x + 80, 82);
    cta.lineTo(x + 30, 82);
    cta.lineTo(x + 30, 90);
    cta.lineTo(x, 78);
    cta.fill();
    cta.stroke();
}

drawCanvas(canvas1, "yellow", x);
drawCanvas(canvas2, "blue", x);
drawCanvas(canvas3, "red", x);
drawCanvas(canvas4, "green", x);

function onClickCircle1() {
    x -= 5;
    let uniqueId1 = setTimeout(onClickCircle1, 5);
    if (x >= 115) {
        drawCanvas(canvas1, "yellow", x);
        if (x === 115) {
            drawCanvas(canvas1, "grey", 115);
            clearTimeout(uniqueId1);
            x = 900;
        }
    }
}

function onClickCircle2() {
    x -= 5;
    let uniqueId2 = setTimeout(onClickCircle2, 5);
    if (x >= 115) {
        drawCanvas(canvas2, "blue", x);
        if (x === 115) {
            x = 900;
            drawCanvas(canvas2, "grey", 115);
            clearTimeout(uniqueId2);
            x = 900;
        }
    }
}

function onClickCircle3() {
    x -= 5;
    let uniqueId3 = setTimeout(onClickCircle3, 5);
    if (x >= 115) {
        drawCanvas(canvas3, "red", x);
        if (x === 115) {
            x = 900;
            drawCanvas(canvas3, "grey", 115);
            clearTimeout(uniqueId3);
            x = 900;
        }
    }
}

function onClickCircle4() {
    x -= 5;
    let uniqueId4 = setTimeout(onClickCircle4, 5);
    if (x >= 115) {
        drawCanvas(canvas4, "green", x);
        if (x === 115) {
            x = 900;
            drawCanvas(canvas4, "grey", 115);
            clearTimeout(uniqueId4);
            x = 900;
        }
    }
}

function onClickReset() {
    drawCanvas(canvas1, "yellow", 900);
    drawCanvas(canvas2, "blue", 900);
    drawCanvas(canvas3, "red", 900);
    drawCanvas(canvas4, "green", 900);
}