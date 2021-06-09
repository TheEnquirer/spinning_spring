import React from "react";
import Sketch from "react-p5";

let x = 0
let y = 0

export default (props) => {
    const setup = (p5, canvasParentRef) => {
	// use parent to render the canvas in this ref
	// (without that p5 will render the canvas outside of your component)
	p5.createCanvas(850, 850).parent(canvasParentRef);
    };

    const cart = (r, theta) => {
	return ([r * Math.cos(theta), r* Math.sin(theta)])
    };

    const draw = (p5) => {
	p5.ellipseMode(p5.CENTER);
	p5.background("#231c14");
	p5.fill("#CEC9BD");
	p5.noStroke();
	p5.ellipse(x, y, 25, 25);
	//console.log(cart(5, 5))
	// NOTE: Do not use setState in the draw function or in functions that are executed
	// in the draw function...
	// please use normal variables or class properties for these purposes
	//x++;
	};

    return <Sketch setup={setup} draw={draw} />;
};
