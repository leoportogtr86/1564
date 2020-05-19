const positionRed = { x: 0, y: 0 }
const positionBlue = { x: 0, y: 0 }
const positionBlack = { x: 0, y: 0 }
const positionOrange = { x: 0, y: 0 }

interact('#red').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      positionRed.x += event.dx
      positionRed.y += event.dy

      event.target.style.transform =
        `translate(${positionRed.x}px, ${positionRed.y}px)`
    },
  }
})


interact('#blue').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      positionBlue.x += event.dx
      positionBlue.y += event.dy

      event.target.style.transform =
        `translate(${positionBlue.x}px, ${positionBlue.y}px)`
    },
  }
})


interact('#black').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      positionBlack.x += event.dx
      positionBlack.y += event.dy

      event.target.style.transform =
        `translate(${positionBlack.x}px, ${positionBlack.y}px)`
    },
  }
})


interact('#orange').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      positionOrange.x += event.dx
      positionOrange.y += event.dy

      event.target.style.transform =
        `translate(${positionOrange.x}px, ${positionOrange.y}px)`
    },
  }
})

let red = document.querySelector('#red')
let blue = document.querySelector('#blue')
let black = document.querySelector('#black')
let orange = document.querySelector('#orange')


var sampler = new Tone.Sampler({
	"C3" : "c.wav",
	"D3" : "d.wav",
	"G3" : "g.wav",
	"E3" : "em.wav"
}, function(){
  
    red.onclick = function () {

      sampler.triggerAttack('C3')
      
    }

    blue.onclick = function () {

      sampler.triggerAttack('G3')
      
    }

    orange.onclick = function () {

      sampler.triggerAttack('D3')
      
    }

    black.onclick = function () {

      sampler.triggerAttack('E3')
      
    }




    
  
	
}).toDestination()