class CompNum {
    constructor(a = 1, b = 0) {
        this.a = a;
        this.b = b;
        // console.log("constructing!");
    }
}
function printCompNum(num) {
    if (num.b < 0) {
        console.log(num.a + "" + num.b + "i");
    }
    else {
        console.log(num.a + " + " + num.b + "i");
    }
}
function multCompNum(num1, num2) {
    // (a+bi)*(x+yi) = ax - by + (ay+bx)i
    let a = (num1.a * num2.a) - (num1.b * num2.b);
    let b = (num1.a * num2.b) + (num1.b * num2.a);
    return new CompNum(a,b);
}
function addCompNum(num1, num2) {
    // (a+bi)+(x+yi) = (a+x) + (b+y)i
    let a = (num1.a + num2.a);
    let b = (num1.b + num2.b);
    return new CompNum(a,b);
}
function negCompNum(num) {
    // -(a+bi) = -a + -bi
    let a = num.a * -1;
    let b = num.b * -1;
    return new CompNum(a,b);
}
function invCompNum(num) {
    // a/(a^2+b^2) – (b /(a^2+b^2))i
    let sqr = num.a**2 + num.b**2;
    let a = (num.a/sqr);
    let b = -1*(num.b/sqr);
    return new CompNum(a,b);
}
// make slider functionality
var realSlider = document.getElementById("realPart");
var realOutput = document.getElementById("realValue");
var compSlider = document.getElementById("compPart");
var compOutput = document.getElementById("compValue");

realOutput.innerHTML = realSlider.value;
compOutput.innerHTML = compSlider.value;

realSlider.oninput = function() {
    realOutput.innerHTML = this.value;
}
compSlider.oninput = function() {
    compOutput.innerHTML = this.value;
}

// make canvas
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// add x-y axes
ctx.moveTo(100, 100);
ctx.lineTo(100, 200);
ctx.lineTo(100, 0);
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.moveTo(100, 100);
ctx.lineTo(0, 100);
ctx.stroke();


// add the point correspoding to the complex number on the slider
function makePoint() {

}