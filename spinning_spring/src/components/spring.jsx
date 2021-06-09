import React from "react";
import Sketch from "react-p5";

let x = 0
let y = 0
let theta = 0;
let w = 0.04;

let cnv;
let size = 850;


let path = []


export default (props) => {
    const setup = (p5, canvasParentRef) => {
	cnv = p5.createCanvas(size, size).parent(canvasParentRef)
	//console.log(cnv)
	//cnv.keyPressed((event) => {
	//    console.log("Clicked on the canvas. Event:", event)
	//})
    }

    const cart = (r, theta) => {
	return ([r * Math.cos(theta), r* Math.sin(theta)])
    };

    const keyPressed = (_p5, e) => {
	if (e.key == "ArrowUp" || e.key == "w") {
	    console.log("up")
	    w += 0.01
	}
	if (e.key == "ArrowDown" | e.key == "s") {
	    console.log("jjd")
	    w -= 0.01
	}
    }

    const gen = () => {
	theta += w;
	return theta
    }

    const draw = (p5) => {
	//p5.clear()
	p5.ellipseMode(p5.CENTER);
	p5.translate(size / 2, size / 2);
	p5.background("#231c14");
	p5.fill("#CEC9BD");
	p5.noStroke();


	let i;
	for (i in path) {
	    p5.fill(`rgba(206, 201, 189, ${3/i})`);
	    p5.ellipse(path[i][0], path[i][1], 5, 5);
	}
	//console.log(path.length)


	//p5.fill('rgba(0,255,0, 0.5)');
	//p5.ellipse(0, 0, size, size);

	p5.fill("#CEC9BD");

	let x = cart(200, gen())[0]
	let y = cart(200, gen())[1]
	p5.ellipse(x, y, 25, 25);


	path.unshift([x, y])
	path = path.slice(0, 100)
	//console.log(path)
	//console.log(cart(5, 5))
	// NOTE: Do not use setState in the draw function or in functions that are executed
	// in the draw function...
	// please use normal variables or class properties for these purposes
	//x++;
	};

    return <Sketch setup={setup} draw={draw} keyPressed={keyPressed}/>;
};
