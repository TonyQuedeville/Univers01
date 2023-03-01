/*
19/02/2023
@author: 
    Tony Quedeville (tquedevi)
Zone01
Projet Univers 01
*/
/*------------------------------------------------------------------------------------------*/

// Class Espace de jeu

/*------------------------------------------------------------------------------------------*/

// Espace de jeu
class ClsGame {
    constructor(levelsBP, levelsEF) {
        // Joueur
        //this.playerName = playerName
        this.life = 3

        // Levels
        this.levelsBP = levelsBP // Tableau des différents niveau Grille Brique / Placement
        this.levelsEF = [] // Tableau des différents niveau Grille Element / Fleche
        this.levelsEFInit = levelsEF // Tableau des différents niveau Grille Element / Fleche Initial
        this.level = 1 // Niveau en cours
        this.nbEssaiLevel = 0 // Nb de tentative par niveau
        //this.LevelScore // Niveau maximum atteint dans la partie
        //this.score = 0
        this.timer = "" // temps de jeux

        this.nbLevel = levelsBP.length

        // Fleche
        this.Fdirection = "haut"
        this.FLig = 0
        this.FCol = 0
        this.NbP = 0
        //this.Fspeed = 1 // Vitesse de déplacement E et P

        //--------------- Objets HTML ----------------------------
        
        // Espace de jeux
        this.gamespaceHTML = document.getElementById("gamespace")
        this.width = this.gamespaceHTML.getBoundingClientRect().width - 1 // recupere la largeur de la div
        this.height = this.gamespaceHTML.getBoundingClientRect().height - 1 // recupere la hauteur de la div
        this.offsetx = this.gamespaceHTML.getBoundingClientRect().x + 1 // recupere la position X de la div
        this.offsety = this.gamespaceHTML.getBoundingClientRect().y + 1 // recupere la position Y de la div
        this.decalRefGrille = 26
    }

    /* Initialisation d'une partie: redefini les parametres par défault des objets.
        en fonction du niveau de difficulté: Level.
    */
    initPart(level){
        pause = false
        this.level = level
        this.gamespaceHTML.textContent = this.level
        this.levelBP = this.levelsBP[this.level-1] // Niveau actuel Grille Brique / Placement
        this.levelEF = this.levelsEFInit[this.level-1] // Niveau actuel Grille Element / Fleche
        this.NbP = 0
        initLevel()
        
        // Score board
        document.getElementById('nbLife').textContent = this.life
        this.timer = ""
        start(0)

        if(!document.getElementById("resultLevel_" + this.level)){
            this.addResultLevel()
        } else {
            document.getElementById("resultLevel_" + this.level).textContent = "Level " + this.level + " - Essai: " + nbEssai + " - Temps: " + this.timer
        }

        // Grille
        this.nbCol = this.levelBP[0].length
        this.nbLig = this.levelBP.length
        this.sizeCase = this.width / 18
        this.grilleLarg = this.nbCol * this.sizeCase
        this.grilleHaut = this.nbLig * this.sizeCase
        
        if(document.getElementById('grille')){
            document.getElementById('grille').remove()
        }
        
        // Ajout de la div "grille"
        this.grilleHTML = document.createElement('div')
        this.grilleHTML.id = "grille"
        this.grilleHTML.style.width = this.grilleLarg + this.decalRefGrille + 'px'
        this.grilleHTML.style.height = this.grilleHaut + this.decalRefGrille + 'px'
        this.gamespaceHTML.append(this.grilleHTML)

        // Ajout des div "case" 
        let numE = 0
        let nbPlanet = getRandomInt(5)+1

        for(let lig=0; lig<this.nbLig; lig++){
            for(let col=0; col<this.nbCol; col++){ 
                // Reférences cases Colonnes         
                if(lig == 0){
                    const refCaseColHTML = document.createElement('div')
                    refCaseColHTML.id = "refcase_" + lig + "_" + col 
                    refCaseColHTML.textContent = "C" + col
                    refCaseColHTML.classList = "refcase"
                    refCaseColHTML.style.width = this.sizeCase + 'px'
                    refCaseColHTML.style.height = this.decalRefGrille + 'px'
                    refCaseColHTML.style.left = (this.sizeCase * col) + this.decalRefGrille + 'px'
                    refCaseColHTML.style.top = (this.sizeCase * lig) + 'px'
                    this.grilleHTML.append(refCaseColHTML)
                }

                // Reférences cases Lignes           
                if(col == 0){
                    const refCaseLigHTML = document.createElement('div')
                    refCaseLigHTML.id = "refcase_" + lig + "_" + col 
                    refCaseLigHTML.textContent = "L" + lig
                    refCaseLigHTML.classList = "refcase"
                    refCaseLigHTML.style.width = this.decalRefGrille + 'px'
                    refCaseLigHTML.style.height = this.sizeCase + 'px'
                    refCaseLigHTML.style.left = (this.sizeCase * col) + 'px'
                    refCaseLigHTML.style.top = (this.sizeCase * lig) + this.decalRefGrille + 'px'
                    this.grilleHTML.append(refCaseLigHTML)
                }

                // Briques et Placement           
                const typeCase = this.levelBP[lig][col]
                const caseHTML = document.createElement('div')
                caseHTML.id = "case_" + lig + "_" + col 
                caseHTML.classList = "case " + typeCase
                caseHTML.style.width = this.sizeCase + 'px'
                caseHTML.style.height = this.sizeCase + 'px'
                caseHTML.style.left = (this.sizeCase * col) + this.decalRefGrille + 'px'
                caseHTML.style.top = (this.sizeCase * lig) + this.decalRefGrille + 'px'
                this.grilleHTML.append(caseHTML)

                if(typeCase == "P"){
                    this.NbP++                    
                    const galaxieHtml = document.createElement('img')
                    galaxieHtml.src = './static/img/Galaxy01.png'
                    caseHTML.append(galaxieHtml)
                }
                
                // Elements et de la Fleche
                const typeEF = this.levelEF[lig][col]
                this.ElemHTML = document.createElement('div')
                this.ElemHTML.classList = "case " + typeEF.substr(0, 1)
                this.ElemHTML.style.width = this.sizeCase + 'px'
                this.ElemHTML.style.height = this.sizeCase + 'px'
                this.ElemHTML.style.left = (this.sizeCase * col) + this.decalRefGrille + 'px'
                this.ElemHTML.style.top = (this.sizeCase * lig) + this.decalRefGrille + 'px'

                if(typeEF.substr(0, 1) == "E"){
                    numE++
                    this.ElemHTML.id = "E" + numE
                    nbPlanet++
                    if(nbPlanet > 6){nbPlanet = 1}
                    const planetHtml = document.createElement('img')
                    planetHtml.src = "./static/img/planet"+  nbPlanet + ".png"
                    this.ElemHTML.append(planetHtml)
                }
                if(typeEF.substr(0, 1) == "F"){
                    this.ElemHTML.id = "F"
                    this.Fdirection = "haut"
                    this.FLig = lig
                    this.FCol = col
                }                
                this.grilleHTML.append(this.ElemHTML)
            }
        }

        // Ajout du timer
        this.timerHTML = document.createElement('p')
        this.timerHTML.id = "timer"
        //this.timerHTML.style.bottom = this.decalRefGrille + 'px'
        this.grilleHTML.append(this.timerHTML)
    }

    // Affichage du level dans la barre de résultats
    displayLevel(){
        document.getElementById("level").textContent = this.level
    }

    // Affichage du score dans la barre de résultats
    displayScore(){
        document.getElementById("nbEssaiLevel").textContent = this.nbEssaiLevel
    }

    // Affichage du timer dans la barre de résultats
    /*displayTime(){
        const date = new Date(this.timer)
        let hour = date.getHours() - 1
        if(hour < 10) {hour = "0" + hour} 
        let minute = date.getMinutes()
        if(minute < 10) {minute = "0" + minute}
        let second = date.getSeconds()
        if(second < 10) {second = "0" + second}

        document.getElementById("timer").textContent = hour + ":" + minute + ":" + second
    }
    //*/

    /* Déplacement de la fleche */
    moveFleche(moving_left, moving_right, moving_up, moving_down){
        this.grilleLeft = this.grilleHTML.getBoundingClientRect().left
        this.grilleTop = this.grilleHTML.getBoundingClientRect().top 

        // Déplacement Droite
        if(moving_right){
            if (this.levelBP[this.FLig][this.FCol+1] != "B"){ // si la case à droite de la fleche n'est pas une brique
                const element = LevelEF[this.FLig][this.FCol+1] // element de droite
                if (element.substr(0, 1) == "E"){ // si la case à droite de la fleche est un element                        
                    const brique = this.levelBP[this.FLig][this.FCol+2]
                    if (brique != "B" && LevelEF[this.FLig][this.FCol+2].substr(0, 1) != "E"){ // si la case à droite de l'élément n'est pas un autre element ou une brique
                        LevelEF[this.FLig][this.FCol] = ""
                        this.FCol++                                
                        LevelEF[this.FLig][this.FCol] = "FD"
                        LevelEF[this.FLig][this.FCol+1] = element

                        // Test si E = P
                        document.getElementById("case_" + this.FLig + "_" + this.FCol).classList = "case"
                        if (this.levelBP[this.FLig][this.FCol] == "P"){
                            document.getElementById("case_" + this.FLig + "_" + this.FCol).classList = "case P"
                        }
                        if (this.levelBP[this.FLig][this.FCol+1] == "P"){
                            document.getElementById("case_" + this.FLig + "_" + (this.FCol+1)).classList = "case PE"
                        } 

                        // déplacement HTML
                        const caseELeft = document.getElementById("case_" + this.FLig + "_" + (this.FCol+1)).getBoundingClientRect().left
                        document.getElementById(element).style.left = caseELeft  - this.grilleLeft + "px"
                    } 
                } else {
                    LevelEF[this.FLig][this.FCol] = ""
                    this.FCol++                                
                    LevelEF[this.FLig][this.FCol] = "FD"
                }
                // déplacement fleche HTML
                this.Fdirection = "droite"
                this.depFleche()
            }
        }
        // Déplacement Gauche
        if(moving_left){
            if (this.levelBP[this.FLig][this.FCol-1] != "B"){ // si la case à gauche de la fleche n'est pas une brique
                const element = LevelEF[this.FLig][this.FCol-1] // element de gauche
                if (element.substr(0, 1) == "E"){ // si la case à gauche de la fleche est un element                        
                    const brique = this.levelBP[this.FLig][this.FCol-2] 
                    if (brique != "B" && LevelEF[this.FLig][this.FCol-2].substr(0, 1) != "E"){ // si la case à gauche de l'élément n'est pas un autre element ou une brique
                        LevelEF[this.FLig][this.FCol] = ""
                        this.FCol--                               
                        LevelEF[this.FLig][this.FCol] = "FG"
                        LevelEF[this.FLig][this.FCol-1] = element
                        
                        // Test si E = P
                        document.getElementById("case_" + this.FLig + "_" + this.FCol).classList = "case"
                        if (this.levelBP[this.FLig][this.FCol] == "P"){
                            document.getElementById("case_" + this.FLig + "_" + this.FCol).classList = "case P"
                        }
                        if (this.levelBP[this.FLig][this.FCol-1] == "P"){
                            document.getElementById("case_" + this.FLig + "_" + (this.FCol-1)).classList = "case PE"
                        } 

                        // déplacement HTML
                        const caseELeft = document.getElementById("case_" + this.FLig + "_" + (this.FCol-1)).getBoundingClientRect().left
                        document.getElementById(element).style.left = caseELeft - this.grilleLeft + "px"
                    } 
                } else {
                    LevelEF[this.FLig][this.FCol] = ""
                    this.FCol--                                
                    LevelEF[this.FLig][this.FCol] = "FG"
                }
                // déplacement fleche HTML
                this.Fdirection = "gauche"
                this.depFleche()
            }
        }
        // Déplacement Bas
        if(moving_down){
            if (this.levelBP[this.FLig+1][this.FCol] != "B"){ // si la case au dessous de la fleche n'est pas une brique
                const element = LevelEF[this.FLig+1][this.FCol] // element du dessous
                if (element.substr(0, 1) == "E"){ // si la case au dessous de la fleche est un element                        
                    const brique = this.levelBP[this.FLig+2][this.FCol]
                    if (brique != "B" && LevelEF[this.FLig+2][this.FCol].substr(0, 1) != "E"){ // si la case au dessous de l'élément n'est pas un autre element ou une brique
                        LevelEF[this.FLig][this.FCol] = ""
                        this.FLig++                                
                        LevelEF[this.FLig][this.FCol] = "FB"
                        LevelEF[this.FLig+1][this.FCol] = element

                        // Test si E = P
                        document.getElementById("case_" + this.FLig + "_" + this.FCol).classList = "case"
                        if (this.levelBP[this.FLig][this.FCol] == "P"){
                            document.getElementById("case_" + this.FLig + "_" + this.FCol).classList = "case P"
                        }
                        if (this.levelBP[this.FLig+1][this.FCol] == "P"){
                            document.getElementById("case_" + (this.FLig+1) + "_" + this.FCol).classList = "case PE"
                        }

                        // déplacement HTML
                        const caseETop = document.getElementById("case_" + (this.FLig+1) + "_" + this.FCol).getBoundingClientRect().top
                        document.getElementById(element).style.top = caseETop - this.grilleTop + "px"
                    } 
                } else {
                    LevelEF[this.FLig][this.FCol] = ""
                    this.FLig++                                
                    LevelEF[this.FLig][this.FCol] = "FB"
                }
                // déplacement fleche HTML
                this.Fdirection = "bas"
                this.depFleche()
        }
        }
        // Déplacement Haut
        if(moving_up){
            if (this.levelBP[this.FLig-1][this.FCol] != "B"){ // si la case au dessus de la fleche n'est pas une brique
                const element = LevelEF[this.FLig-1][this.FCol] // element du dessus
                if (element.substr(0, 1) == "E"){ // si la case au dessous de la fleche est un element                        
                    const brique = this.levelBP[this.FLig-2][this.FCol]
                    if (brique != "B" && LevelEF[this.FLig-2][this.FCol].substr(0, 1) != "E"){ // si la case au dessus de l'élément n'est pas un autre element ou une brique
                        LevelEF[this.FLig][this.FCol] = ""
                        this.FLig--                               
                        LevelEF[this.FLig][this.FCol] = "FB"
                        LevelEF[this.FLig-1][this.FCol] = element

                        // Test si E = P
                        document.getElementById("case_" + this.FLig + "_" + this.FCol).classList = "case"
                        if (this.levelBP[this.FLig][this.FCol] == "P"){
                            document.getElementById("case_" + this.FLig + "_" + this.FCol).classList = "case P"
                        }
                        if (this.levelBP[this.FLig-1][this.FCol] == "P"){
                            document.getElementById("case_" + (this.FLig-1) + "_" + this.FCol).classList = "case PE"
                        } 

                        // déplacement HTML
                        const caseETop = document.getElementById("case_" + (this.FLig-1) + "_" + this.FCol).getBoundingClientRect().top
                        document.getElementById(element).style.top = caseETop - this.grilleTop + "px"
                    } 
                } else {
                    LevelEF[this.FLig][this.FCol] = ""
                    this.FLig--                                
                    LevelEF[this.FLig][this.FCol] = "FB"
                }

                // déplacement fleche HTML
                this.Fdirection = "haut"
                this.depFleche()
            }
        }
    }

    // déplacement fleche HTML
    depFleche(){
        const caseFLeft = document.getElementById("case_" + this.FLig + "_" + this.FCol).getBoundingClientRect().left - this.grilleLeft
        const caseFTop = document.getElementById("case_" + this.FLig + "_" + this.FCol).getBoundingClientRect().top - this.grilleTop

        switch(this.Fdirection){
            case "droite":
                document.getElementById("F").style.rotate = 210 + "deg"
                document.getElementById("F").style.left = caseFLeft + "px"
            break
            
            case "gauche":
                document.getElementById("F").style.rotate = 30 + "deg"
                document.getElementById("F").style.left = caseFLeft + "px"
            break

            case "bas":  
                document.getElementById("F").style.rotate = 300 + "deg"
                document.getElementById("F").style.top = caseFTop + "px"
            break

            case "haut":
                document.getElementById("F").style.rotate = 120 + "deg"
                document.getElementById("F").style.top = caseFTop + "px"
            break
        }
    }

    // Test si E = P
    TestEP(demo = false){
        let i = 0
        for(let lig=0; lig<this.nbLig; lig++){
            for(let col=0; col<this.nbCol; col++){
                if(LevelEF[lig][col].substr(0, 1) == "E" && this.levelBP[lig][col] == "P"){ // Test si E = P
                    i++
                    document.getElementById("case_" + lig + "_" + col).classList = "case PE"
                }
            }
        }
        
        if(i == this.NbP) { // Si tous les Elements sont sur les Placements
            level++
            this.timer = document.getElementById("timer").textContent
            document.getElementById("resultLevel_" + this.level).textContent = "Level " + this.level + " - Essai: " + nbEssai + " - Temps: " + this.timer
            clrTimer(true)

            if(!demo){
                this.life++
                document.getElementById('nbLife').textContent = this.life
                document.getElementById('gamespace').textContent = "Bravo !"
                pause = true
                nbEssai = 1

                setTimeout(()=>{
                    spaceGame.initPart(level)
                }, 1500)
            } else {
                spaceGame.initPart(level)
            }

            if(level > this.nbLevel){
                displayFinPartie(false)
            }
        }
    }

    // Get/Set position de fleche
    static get FLig() {
        return !this._FLig
    }
    static set FLig(lig) {
        this._FLig = lig
    }

    addResultLevel(){
        const resultLevel = document.getElementById("resultLevel")
        const parafLevelHtml = document.createElement('p')
        parafLevelHtml.id = "resultLevel_" + this.level
        parafLevelHtml.textContent = "Level " + this.level + " - Essai: " + nbEssai  + " - Temps: " + this.timer
        resultLevel.append(parafLevelHtml)
    }
}

/*------------------------------------------------------------------------------------------*/