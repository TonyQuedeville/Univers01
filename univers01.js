/*
19/02/2023
@author: 
    Tony Quedeville (tquedevi)
Zone01
Projet Univers 01
*/
/*------------------------------------------------------------------------------------------*/

// Espace de jeu
const spaceGame = new ClsGame(Levels.levelsBP, Levels.levelsEF)
const levelMax = Levels.levelsBP.length
//spaceGame.displayTime()

// Fleche
let moving_left = false
let moving_right = false
let moving_up = false
let moving_down = false

/*-----------------------------------------------------------------------------------------------------------------------*/

// Initialisation de l'espace de jeu en fonction du level
let pause = false
let demo = false
let seq = []
let level = 1
let Life = 5
let nbEssai = 1

/*-----------------------------------------------------------------------------------------------------------------------*/

// Ecoutes
const a = () =>{
    console.log("orientationchange !")
    if (window.orientation === 0 || window.orientation === 180) {
        location.reload()
    } else {
        location.reload()
    }
}
window.addEventListener('orientationchange', a)

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

function jouer(){
    spaceGame.initPart(level)
    spaceGame.TestEP()

    document.getElementById("cmdGauche").addEventListener('click', () => {
        moving_left = true
        moving_right = false
        moving_up = false
        moving_down = false
        seq.push("G")
        spaceGame.moveFleche(moving_left, moving_right, moving_up, moving_down)
        spaceGame.TestEP()
    })

    document.getElementById("cmdDroite").addEventListener('click', () => {
        moving_left = false
        moving_right = true
        moving_up = false
        moving_down = false
        seq.push("D")
        spaceGame.moveFleche(moving_left, moving_right, moving_up, moving_down)
        spaceGame.TestEP()
    })

    document.getElementById("cmdHaut").addEventListener('click', () => {
        moving_left = false
        moving_right = false
        moving_up = true
        moving_down = false
        seq.push("H")
        spaceGame.moveFleche(moving_left, moving_right, moving_up, moving_down)
        spaceGame.TestEP()
    })

    document.getElementById("cmdBas").addEventListener('click', () => {
        moving_left = false
        moving_right = false
        moving_up = false
        moving_down = true
        seq.push("B")
        spaceGame.moveFleche(moving_left, moving_right, moving_up, moving_down)
        spaceGame.TestEP()
    })

    document.addEventListener('keydown', (e) => {
        if(!pause){
            switch (e.key){
                case "ArrowLeft" : 
                    moving_left = true
                    moving_right = false
                    moving_up = false
                    moving_down = false
                    seq.push("G")
                    document.getElementById("cmdGauche").style.scale = 1.1
                    break;

                case "ArrowRight" : 
                    moving_right = true
                    moving_left = false
                    moving_up = false
                    moving_down = false
                    seq.push("D")
                    document.getElementById("cmdDroite").style.scale = 1.1
                    break;

                case "ArrowUp" : 
                    moving_left = false
                    moving_right = false
                    moving_up = true
                    moving_down = false
                    seq.push("H")
                    document.getElementById("cmdHaut").style.scale = 1.1
                    break;

                case "ArrowDown" : 
                    moving_right = false
                    moving_left = false
                    moving_up = false
                    moving_down = true
                    seq.push("B")
                    document.getElementById("cmdBas").style.scale = 1.1
                    break;

                case "r": // reset level
                    nbEssai++
                    spaceGame.initPart(level)
                    spaceGame.life--
                    document.getElementById('nbLife').textContent = spaceGame.life

                    if(spaceGame.life <= 0){ // fin de partie quand nb de vie = 0
                        displayFinPartie()
                    }
                    break;

                case "n": // new part
                    location.reload()
                    break;

                case "s": // play solution
                    spaceGame.initPart(level) 
                    playSequence(level) 
                    nbEssai+=3 // 3 essai supplémentaire
                    spaceGame.life-- // 1 vies en moins
                    document.getElementById('nbLife').textContent = spaceGame.life
                    seq = []
                    break;

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

    // Restart level
    document.getElementById('cmdRestart').addEventListener('click', () => {
        nbEssai++
        spaceGame.initPart(level)
        spaceGame.life--
        document.getElementById('nbLife').textContent = spaceGame.life

        if(spaceGame.life <= 0){ // fin de partie quand nb de vie = 0
            displayFinPartie()
        }
    })

    // Nouvelle Partie
    /*document.getElementById('newPart').addEventListener('click', () => {
        location.reload()
    })
    //*/

    document.addEventListener('keyup', (e) => {
        if(!pause){
            switch (e.key){
                case "ArrowLeft" :
                    moving_left = false
                    document.getElementById("cmdGauche").style.scale = 1
                    break;

                case "ArrowRight" :
                    moving_right = false
                    document.getElementById("cmdDroite").style.scale = 1
                    break;

                case "ArrowUp" :
                    moving_up = false
                    document.getElementById("cmdHaut").style.scale = 1
                    break;

                case "ArrowDown" :
                    moving_down = false
                    document.getElementById("cmdBas").style.scale = 1
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
        nbEssai+=3 // 3 essais supplémentaire
        spaceGame.life-- // 1 vies en moins
        document.getElementById('nbLife').textContent = spaceGame.life
        seq = []
    })
}

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
                    if(level < levelMax){
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

// Play demo
let playDemo = false
document.getElementById('cmdDemo').addEventListener('click', () => {
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
//*/

/*-----------------------------------------------------------------------------------------------------------------------*/

function displayFinPartie(perdu = true){
    const gameSpaceHtml = document.getElementById('gamespace')

    if (perdu){
        gameSpaceHtml.textContent = "Perdu !"
    } else {
        gameSpaceHtml.textContent = "Jeux terminé Bravo !"
    }

    const commencerHtml = document.createElement('div')
    commencerHtml.id = "commencer"
    commencerHtml.classList = "vertical center"
    gameSpaceHtml.append(commencerHtml)

    const imgQuitterHtml = document.createElement('img')
    imgQuitterHtml.id = "quitter"
    imgQuitterHtml.src = "./static/icn/icn-play.png"
    commencerHtml.append(imgQuitterHtml)

    document.getElementById('quitter').addEventListener('click', () => {
        location.reload()
    })
    document.addEventListener('keydown', (e) => {
        if (e.key == "Enter"){
            location.reload()
        }
    })
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