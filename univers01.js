/*
19/02/2023
@author: 
    Tony Quedeville (tquedevi)
Zone01
Projet Think-idea

lien utile : https://learntutorials.net/fr/javascript/topic/1808/requestanimationframe

/*-----------------------------------------------------------------------------------------------------------------------*/

// Espace de jeu
const spaceGame = new ClsGame(Levels.levelsBP, Levels.levelsEF)
levelMax = Levels.levelsBP.length
//spaceGame.displayTime()

// Fleche
let moving_left = false
let moving_right = false
let moving_up = false
let moving_down = false
let seq = []
let nbEssai = 1
let pause = false
let demo = false

/*-----------------------------------------------------------------------------------------------------------------------*/

// Initialisation de l'espace de jeu en fonction du level
let level = 1

/*-----------------------------------------------------------------------------------------------------------------------*/

// Ecoutes

// Commencer à jouer
document.getElementById('start').addEventListener('click', () => {
    level = 1
    document.getElementById('narration').style.display = "none"
    jouer()
})
document.addEventListener('keydown', (e) => {
    if (e.key == "Enter"){
        level = 1
        document.getElementById('narration').style.display = "none"
        jouer()
    }
})

// Restart level
document.getElementById('restartLevel').addEventListener('click', () => {
    spaceGame.initPart(level)
    nbEssai++
})

// Nouvelle Partie
document.getElementById('newPart').addEventListener('click', () => {
    location.reload()
})


function jouer(){
    spaceGame.initPart(level) 
    spaceGame.TestEP()

    // Selection level
    /*document.getElementById('selectLevel').addEventListener('change', (e) => {
        level = e.target.value
        spaceGame.initPart(level) 
        spaceGame.TestEP()
    })
    //*/

    document.addEventListener('keydown', (e) => {
        if(!pause){
            switch (e.key){
                case "ArrowLeft" : 
                    moving_left = true
                    moving_right = false
                    moving_up = false
                    moving_down = false
                    seq.push("G")
                    break;

                case "ArrowRight" : 
                    moving_right = true
                    moving_left = false
                    moving_up = false
                    moving_down = false
                    seq.push("D")
                    break;

                case "ArrowUp" : 
                    moving_left = false
                    moving_right = false
                    moving_up = true
                    moving_down = false
                    seq.push("H")
                    break;

                case "ArrowDown" : 
                    moving_right = false
                    moving_left = false
                    moving_up = false
                    moving_down = true
                    seq.push("B")
                    break;

                case "r": // reset level
                    spaceGame.initPart(level)
                    nbEssai++
                    break;

                case "n": // new part
                    location.reload()
                    break;

                case "s": // play solution
                    spaceGame.initPart(level) 
                    playSequence(level) 
                    nbEssai+=3
                    seq = []
                    //spaceGame.initPart(level)
                    break;

                /*case "f": // simulation de fin de jeu pour debuguage
                    document.getElementById('gamespace').textContent = "Jeux terminé Bravo !"
                    setTimeout(()=>{location.reload()}, 2000)
                    break;
                    //*/

                case "PageUp":
                    level++
                    if(level > levelMax){level = 1}
                    spaceGame.initPart(level) 
                    spaceGame.TestEP()
                    break

                case "PageDown":
                    level--
                    if(level < 1){level = levelMax}
                    spaceGame.initPart(level) 
                    spaceGame.TestEP()
                    break

                default:
                    break
            }
            spaceGame.moveFleche(moving_left, moving_right, moving_up, moving_down)
        }
    })

    

    document.addEventListener('keyup', (e) => {
        if(!pause){
            switch (e.key){
                case "ArrowLeft" :
                    moving_left = false
                    break;

                case "ArrowRight" :
                    moving_right = false
                    break;

                case "ArrowUp" :
                    moving_up = false
                    break;

                case "ArrowDown" :
                    moving_down = false
                    break;

                default:
                    break
            } 
            spaceGame.TestEP()
        }
    })

    // Play sequence solution
    document.getElementById('playSeq').addEventListener('click', () => {
        spaceGame.initPart(level) 
        playSequence(level) 
        seq = []
    })

    // Play demo
    let playDemo = false
    document.getElementById('playDemo').addEventListener('click', () => {
        if(!playDemo){
            playDemo = true
            level = 1
            spaceGame.initPart(level) 
            playSequence(level, true) 
            seq = []
        } else {
            location.reload()
        }
    })

    // Sequences
    function playSequence(level, demo=false){
        spaceGame.TestEP()
        if(level <= levelMax){
            const seq = seqSolutions[level-1]
            let iSeq = 0
            let direction = seq[iSeq]
            let intervalTime = 0

            function playLoop(){
                if(intervalTime == 5){
                    direction = seq[iSeq]

                    switch (direction){
                        case "G" :
                            moving_left = true
                            break;
                            
                        case "D" :
                            moving_right = true
                            break;
                                
                        case "H" :
                            moving_up = true
                            break;

                        case "B" :
                            moving_down = true
                            break;
                            
                        } 

                    spaceGame.moveFleche(moving_left, moving_right, moving_up, moving_down) 
                    moving_left = false
                    moving_right = false
                    moving_up = false
                    moving_down = false

                    iSeq++
                    intervalTime = 0
                } else {
                    intervalTime++
                }
                
                if(iSeq <= seq.length){
                    requestAnimationFrame(playLoop)
                } else {
                    if(demo){
                        spaceGame.TestEP(true)
                        if(level <= levelMax){
                            level++
                            playSequence(level, true)
                        }
                    } else {
                        spaceGame.initPart(level) 
                    }
                }
            }
            playLoop()
        }
    }
}

/*-----------------------------------------------------------------------------------------------------------------------*/


// Temps
const delay = (ms) => {
    return new Promise(x => setTimeout(x, ms));
}
//*/

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}