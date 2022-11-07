import React, { useEffect, useRef, useState } from "react";
import './CanvasHeader.css'
//import {gsap} from 'gsap';




function CanvasHeader(){
   

//CANVAS WORK   
    const canvasref = useRef(null);
    //initail value is minus to avoid balls runaway when mouse is out of window's focus
    let mouseX = -100;
    let mouseY = -100;  
    //storing mouse cordinates
    window.addEventListener('mousemove', event => {
        mouseX = event.x;
        mouseY = event.y;
        //console.log(mouseX + " " + mouseY);
    });

    useEffect(()=>{
    let width = window.innerWidth;
    let height = window.innerHeight;    
    console.log("useeffect is rendered");
        let c= canvasref.current;
        c.width = width;
        c.height = height;
        const ctx = c.getContext("2d");
    

        //creating class for balls
        class Ball{
            constructor(x, y, velX, velY, r, c, id){
                this.id = id;
                this.x = x;
                this.y = y;
                this.velX = velX;
                this.velY = velY;
                this.r = r;
                this.c = c;
            }
           
            draw(){
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
                ctx.fillStyle = this.c;
                ctx.fill();
            }
            update(){
                
                //reversing when ball hits the wall
                if(this.x -this.r < 0 || this.x + this.r > width)
                {
                    this.velX = -this.velX;
                }
                if(this.y -this.r < 0 || this.y + this.r > height)
                {
                    this.velY = -this.velY;
                }
               /* let distanceX = Math.abs(mouseX - this.x);
                let distanceY = Math.abs(mouseY - this.y) ;
                if(distanceX < 100 && distanceY< 150){
                    alert("collision");

                }
                */
                
                

                //collision with mouse
                
                  //  alert(Math.abs(this.x - k.x));
                  let windowBoundry = 5; 
                  let mouseBoundry = 90;
                  let mRunAway = 2;
                    if( getDistancce(this.x, this.y, mouseX,  mouseY) < mouseBoundry){
                        //alert("distance 0");
                       if( this.x < mouseX && this.y < mouseY)
                       {
                        if( (this.x - this.r >windowBoundry && this.x+this.r <width-windowBoundry) && (this.y - this.r >windowBoundry && this.y + this.r <height-windowBoundry) ){
                            this.x -= mRunAway;
                            this.y -= mRunAway;
                            this.velX = -this.velX;
                            this.velY = -this.velY;
                        }
                        
                       }
                       else if(this.x > mouseX && this.y < mouseY)
                       {
                        if( (this.x - this.r >windowBoundry && this.x+this.r <width-windowBoundry) && (this.y - this.r >windowBoundry && this.y + this.r <height-windowBoundry) ){
                            this.x += mRunAway;
                            this.y -= mRunAway;
                            this.velX = +this.velX;
                            this.velY = -this.velY;
                         }
                       }
                       else if( this.x < mouseX && this.y > mouseY)
                       {
                        if( (this.x - this.r >windowBoundry && this.x+this.r <width-windowBoundry) && (this.y - this.r >windowBoundry && this.y + this.r <height-windowBoundry) ){
                            this.x -= mRunAway;
                            this.y += mRunAway;
                            this.velX = -this.velX;
                            this.velY = +this.velY;
                        }
                        }
                        else if( this.x > mouseX && this.y > mouseY)
                       {
                        if( (this.x - this.r >windowBoundry && this.x+this.r <width-windowBoundry) && (this.y - this.r >windowBoundry && this.y + this.r <height-windowBoundry) ){
                            this.x += mRunAway;
                            this.y += mRunAway;
                            this.velX = +this.velX;
                            this.velY = +this.velY;
                        }
                            
                        }
                        
                    }
                
                //changing color on collision    
                for(let c of ballsArray)
                {
                    //blue will turn yellow, yellow will turn blue
                    if(c.c === "yellow"){
                        if(this.id !== c.id){
                            if(getDistancce(this.x, this.y, c.x, c.y)< this.r+c.r){
                                this.c = "white";
                            }
                            
                        }
                    }
                    else{
                        if(this.id !== c.id){
                            if(getDistancce(this.x, this.y, c.x, c.y)< this.r+c.r){
                                this.c = "yellow";
                            }
                            
                        }

                    }
                
                    
                }

                //DRAWING LINES BETWEEN BALLS
                const lineWidth = 0.5;
                const lineLength = 30;
                for(let l of ballsArray){
                    if(getDistancce(this.x, this.y, l.x, l.y)< lineLength){
                        ctx.beginPath();
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(l.x, l.y);
                        ctx.lineWidth = lineWidth;
                        this.c === "yellow" ? ctx.strokeStyle = "white":ctx.strokeStyle = "yellow";
                        ctx.stroke();
                    }
                }                 

              
                this.x +=this.velX;
                this.y += this.velY;
                
                this.draw();
                

            }

        }
        //get distance functions
        function getDistancce(x1, y1, x2, y2){
            let xDistance = x2 -x1;
            let yDistance = y2-y1;
            let result;
            result = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
            return result;

        }
        //creating abc balls
        let ballsArray = [];
        function inIt(){
           
            for(let i=0; i<150; i++)
            {
                let radius =2;
                //i know some balls are not on screen thats bcz i have to set max and min random
                let randomX = (Math.random() * width) + radius;
                let randomY = (Math.random() * height) + radius;
                let randomVelX = (Math.random() * 0.40) - 0.20;
                let randomVelY = (Math.random() * 0.40) - 0.20;
                //   let randomC = `rgb(${Math.floor(Math.random() * 255 + 1) }, ${Math.floor(Math.random() * 255 + 1) }, ${Math.floor(Math.random() * 255 + 1) })`; 
                //let randomC = `hsl(${60}, ${Math.floor(Math.random() * 100 + 1)}%, ${Math.floor(Math.random() * 50 + 1)}%)`; 
                let randomC="yellow";
                ballsArray.push(new Ball(randomX, randomY, randomVelX, randomVelY, radius, randomC, i));
            }
        }
        //balls animation
        function animate(){
            requestAnimationFrame(animate);
            ctx.clearRect(0,0,width, height);
            //calling update on all balls
            for(let b of ballsArray){
               
                b.update();
            }
        }
        
        
        inIt();
        //console.log(window.innerWidth + "and height  = " + window.innerHeight);
        //console.log(ballsArray);
        animate();
       
 


        /*window.addEventListener('resize', ()=>{
            c.width = window.innerWidth;
            c.height = window.innerWidth;   
        })*/
    // eslint-disable-next-line    
    },[]);

    
   
  

    

    return(
        <>
            <div id="outerDiv">
                <canvas id="canvas1" ref={canvasref}>
                    
                </canvas>
                <div className="intro">
                    <p className="testName">Hii, I am </p>
                    <span
                    className="h1-name">S
                    </span>
                    <span
                    className="h1-name">H
                    </span>
                    <span
                    className="h1-name">A
                    </span>
                    <span
                    className="h1-name">H
                    </span>
                    <span
                    className="h1-name">i
                    </span>
                    <span
                    className="h1-name">D
                    </span>
                    <pre> </pre>
                    <span
                    className="h1-name">B
                    </span>
                    <span
                    className="h1-name">U
                    </span>
                    <span
                    className="h1-name">t
                    </span>
                    <span
                    className="h1-name">T
                    </span>
                    <span
                    className="h1-name face">:|
                    </span>
                    <p className="testName">And I am a JS Developer (Level: B) </p>
                    <a href="#contactMe"><button className="btn">Contact Me.. </button></a>
                </div>
            </div>
            
        </>
    );
}
export default CanvasHeader