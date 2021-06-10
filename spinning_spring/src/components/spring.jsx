import React from "react";
import Sketch from "react-p5";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../App.css';


//let x = 0
//let y = 0
let cnv;



let theta = 0;
//let w = 0.04;
let w = 1.0

let size = 1000;


let path = []

let r, prev_r, rp, prev_rp, th, prev_th;

r = rp = prev_rp = th = 0;

prev_r = 0.01
prev_th = 1

let k = 2
let m = 1
let dt = 0.01



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
	    w += 0.1
	}
	if (e.key == "ArrowDown" || e.key == "s") {
	    w -= 0.1
	}

	if (e.key == "r") {
	    w = 1.4
	}
    }

    const gen = () => {
	let f = Math.pow(calcW(), 2) - k/m
	r = prev_r + prev_rp * dt
	rp = prev_rp + f * prev_r*dt
	th = prev_th + calcW() *dt

	prev_r = r
	prev_rp = rp
	prev_th = th
	//console.log(r, th)
	return [r*18000, th*7]

	//theta += w;
	//return theta
    }

    const calcW = () => {
	//let mod = Math.cos(w)
	//let mod = Math.sqrt(w)
	//w -= 0.1
	//w -= 0.01
	//let mod = Math.sin(w)
	//let mod = Math.cos(w)
	//console.log(mod)
	//w += 0.1
	let mod = w
	return mod
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
	    p5.fill(`rgba(206, 201, 189, ${10/i})`);
	    p5.ellipse(path[i][0], path[i][1], 5, 5);
	}
	//console.log(path.length)


	//p5.fill('rgba(0,255,0, 0.5)');
	//p5.ellipse(0, 0, size, size);

	p5.fill("#CEC9BD");
	let data = gen()

	let x = cart(data[0], data[1])[0]
	let y = cart(data[0], data[1])[1]
	p5.ellipse(x, y, 25, 25);


	path.unshift([x, y])
	path = path.slice(0, 500)
	//console.log(path)
	//console.log(cart(5, 5))
	// NOTE: Do not use setState in the draw function or in functions that are executed
	// in the draw function...
	// please use normal variables or class properties for these purposes
	//x++;
    };

    return (
	<div className="wrapper">
	    <Sketch setup={setup} draw={draw} keyPressed={keyPressed}/>
	    <div style={{maxWidth: 500, minWidth: 500}}>
		<Slider min={-100} max={300}
		    className={"slider"}
		    railStyle={{
			//padding: 10, border: "red", background: "red"
		    }}
		    trackStyle={[ {background: "#cec9bd"} ]}
		    defaultValue = {w*100}
		    onChange={(e) => { w = e / 100}}
		    marks={{0: {style: "", label: "0"}}}
		/>
	    </div>
	</div>
    )
};
