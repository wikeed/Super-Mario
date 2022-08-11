const mario = document.querySelector(".mario")
const duct = document.querySelector(".duct")
const gameOver = document.querySelector(".gameOver")

const jump = () => {

  mario.classList.add("jump")

  setTimeout(() => {

    mario.classList.remove("jump")
  }, 500)
}

const loop = setInterval(() => {

  const ductPosition = duct.offsetLeft

  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "")
  
  if(ductPosition <= 120 && ductPosition > 0 && marioPosition < 80) {

    duct.style.animation = "none"
    duct.style.left = `${ductPosition}px`

    mario.style.animation = "none"
    mario.style.bottom = `${marioPosition}px`
    
    mario.src = "./assets/game-over.png"
    mario.style.width = "75px"
    mario.style.marginLeft = "50px"
    
    gameOver.hidden = false
    clearInterval(loop)
  }
  
}, 10) 

document.addEventListener("keydown", jump)