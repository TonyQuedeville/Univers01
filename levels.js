/*
19/02/2023
@author: 
    Tony Quedeville (tquedevi)
Zone01
Projet Think-Idea

lien utile : https://tech.mozfr.org/post/2015/08/12/ES6-en-details-:-les-sous-classes-et-l-heritage
*/
/*------------------------------------------------------------------------------------------*/

// Levels
let Levels = {
    // 26 Levels Brique & Placement
    levelsBP : [
        [ // 1
            ["B","B","B","B","B","B","B"],
            ["B","P","","","","P","B"],
            ["B","","","","","","B"],
            ["B","P","","","","P","B"],
            ["B","B","B","B","B","B","B"],
        ],
        [ // 2
            ["B","B","B","B","B","B","B","B"],
            ["B","","","P","P","","","B"],
            ["B","","","","","","","B"],
            ["B","","","P","P","","","B"],
            ["B","B","B","B","B","B","B","B"],
        ],
        [ // 3
            ["","B","B","B","B","B","B","B"],
            ["","B","","","","","","B"],
            ["B","B","","P","","P","","B"],
            ["B","","","","","","","B"],
            ["B","","","P","","P","","B"],
            ["B","B","","","","","","B"],
            ["","B","B","B","B","B","B","B"],
        ],
        [ // 4
            ["B","B","B","B","B","B","B","B"],
            ["B","","","P","","","P","B"],
            ["B","","P","","","","P","B"],
            ["B","","","P","","","P","B"],
            ["B","","P","","","","P","B"],
            ["B","B","B","B","B","B","B","B"],
        ],
        [ // 5
            ["","B","B","B","B","B","",""],
            ["B","B","","","","B","B","B"],
            ["B","","","B","","","","B"],
            ["B","","B","","","B","","B"],
            ["B","","","","","B","","B"],
            ["B","P","B","","","","","B"],
            ["B","P","","","B","B","B","B"],
            ["B","B","B","B","B","","",""],
        ],
        [ // 5 bis
            ["B","B","B","B","B","B","B","B"],
            ["B","","","","B","","","B"],
            ["B","","B","","B","","P","B"],
            ["B","","","","","","P","B"],
            ["B","","B","","B","","P","B"],
            ["B","","","","B","","","B"],
            ["B","B","B","B","B","","","B"],
            ["","","","","B","B","B","B"],
        ],
        [ // 6
            ["B","B","B","B","B","B","B","B","B"],
            ["B","","","","P","","","","B"],
            ["B","","","P","B","P","","","B"],
            ["B","","","","P","","","","B"],
            ["B","B","B","P","","P","B","B","B"],
            ["","","B","B","FH","B","B","",""],
            ["","","","B","B","B","","",""],
        ],
        [ // 7
            ["","B","B","B","B","B","B"],
            ["B","B","","P","","","B"],
            ["B","","","","","","B"],
            ["B","P","","P","","P","B"],
            ["B","","","","","","B"],
            ["B","B","","P","","B","B"],
            ["","B","B","B","B","B",""],
        ],
        [ // 8
            ["B","B","B","B","B","B","B","B",""],
            ["B","","","","","","","B",""],
            ["B","","","P","P","","","B","B"],
            ["B","B","B","P","P","B","","","B"],
            ["","","B","B","","","","","B"],
            ["","","","B","","","","","B"],
            ["","","","B","B","B","B","B","B"],
        ],
        [ // 9
            ["","B","B","B","B","B","B",""],
            ["","B","P","","P","P","B",""],
            ["","B","P","","","P","B",""],
            ["B","B","B","","","","B","B"],
            ["B","","","","","","","B"],
            ["B","","B","","B","B","","B"],
            ["B","","","","","","","B"],
            ["B","B","B","B","B","B","B","B"],
        ],
        [ // 10
            ["","","B","B","B","B","B","B"],
            ["","","B","","","","","B"],
            ["B","B","B","","","","","B"],
            ["B","","","","P","P","","B"],
            ["B","","","P","P","P","B","B"],
            ["B","B","B","B","","","B",""],
            ["","","","B","B","B","B",""],
        ],
        [ // 11
            ["","B","B","B","B","B","B","B","B","B"],
            ["B","B","","","","","","","","B"],
            ["B","","","","B","","B","","","B"],
            ["B","","","","","","P","","P","B"],
            ["B","","","B","B","B","P","P","P","B"],
            ["B","B","B","B","B","B","B","B","B","B"],
        ],
        [ // 12
            ["B","B","B","B","B","B","B","B"],
            ["B","","","B","","","","B"],
            ["B","","","P","P","","","B"],
            ["B","","","P","P","","B","B"],
            ["B","","","P","P","","","B"],
            ["B","","","B","","","","B"],
            ["B","B","B","B","B","B","B","B"],
        ],
        [ // 13
            ["","","B","B","B","B","","","",""],
            ["","","B","","","B","","","",""],
            ["B","B","B","","","B","B","B","B","B"],
            ["B","","","P","P","","","","","B"],
            ["B","","","P","P","","","","","B"],
            ["B","B","B","","","B","B","B","B","B"],
            ["","","B","","","B","","","",""],
            ["","","B","B","B","B","","","",""],
        ],
        [ // 14
            ["B","B","B","B","B","B","B","B"],
            ["B","","","","","","","B"],
            ["B","","","","B","","","B"],
            ["B","B","","","","","B","B"],
            ["","B","P","","","","B",""],
            ["","B","B","P","","B","B",""],
            ["","","B","P","P","B","",""],
            ["","","B","B","B","B","",""],
        ],
        [ // 15
            ["","B","B","B","B","B","B","",""],
            ["","B","","","","","B","B","B"],
            ["B","B","","B","","","","P","B"],
            ["B","","","","","B","B","P","B"],
            ["B","","B","","","","","P","B"],
            ["B","","","","","","","P","B"],
            ["B","B","B","B","B","B","B","B","B"],
        ],
        [ // 16
            ["","B","B","B","B","B","B","B","","",""],
            ["B","B","","","B","","","B","B","B",""],
            ["B","P","","","P","","","","","B","B"],
            ["B","","","B","B","","B","","","","B"],
            ["B","","","B","","","","","B","P","B"],
            ["B","","","B","","B","","","","P","B"],
            ["B","","P","B","","","","","","","B"],
            ["B","B","B","B","B","B","B","B","B","B","B"],
        ],
        [ // 17
            ["","B","B","B","B","B","B",""],
            ["B","B","","","","","B","B"],
            ["B","","","","","","","B"],
            ["B","P","P","P","P","P","P","B"],
            ["B","","","","","","","B"],
            ["B","B","B","","","B","B","B"],
            ["","","B","B","B","B","",""],
        ],
        [ // 18
            ["","B","B","B","B","B","",""],
            ["","B","","","","B","B","B"],
            ["B","B","","B","","","P","B"],
            ["B","","","","","B","P","B"],
            ["B","","B","","","","P","B"],
            ["B","","","","","","P","B"],
            ["B","B","B","B","B","B","B","B"],
        ],
        [ // 19
            ["","B","B","B","B","B","B","B",""],
            ["","B","","","P","","","B",""],
            ["B","B","","","P","","","B","B"],
            ["B","","P","P","P","P","P","","B"],
            ["B","","","","P","","","","B"],
            ["B","","","","P","","","","B"],
            ["B","B","B","B","B","B","B","B","B"],
        ],
        [ // 20
            ["B","B","B","B","B","B","B","B","B","B","B","B","B","B"],
            ["B","","B","","","","B","","","","B","","","B"],
            ["B","","P","","","","B","","","","P","","","B"],
            ["B","","P","","","","B","","B","","P","","P","B"],
            ["B","","B","","B","B","B","","","","B","B","B","B"],
            ["B","","B","","","","","","","","B","","","B"],
            ["B","","B","P","","","B","","","","B","","","B"],
            ["B","","B","B","","B","B","B","B","B","","","","B"],
            ["B","","P","","","","","","","","","","P","B"],
            ["B","B","B","B","B","B","B","B","B","B","B","B","B","B"],
        ],
        [ // 21
            ["B","B","B","B","B","B","B","B","B"],
            ["B","","P","","","","P","","B"],
            ["B","","","","P","","","","B"],
            ["B","P","","P","P","P","","P","B"],
            ["B","","","","P","","","","B"],
            ["B","","P","","","","P","","B"],
            ["B","B","B","B","B","B","B","B","B"],
        ],
        [ // 22
            ["B","B","B","B","B","B","B"],
            ["B","P","","P","","P","B"],
            ["B","","","","","","B"],
            ["B","P","","","","P","B"],
            ["B","","","","","","B"],
            ["B","P","","P","","P","B"],
            ["B","B","B","B","B","B","B"],
        ],
        [ // 23
            ["","B","B","B","B","B","B","B","B","B","B"],
            ["B","B","","","P","","","","","","B"],
            ["B","","","","P","","","","","P","B"],
            ["B","","P","P","","P","P","P","P","","B"],
            ["B","","","","P","","","","","P","B"],
            ["B","B","","","P","","","","","","B"],
            ["","B","B","B","B","B","B","B","B","B","B"],
        ],
        [ // 24
            ["B","B","B","B","B","B",""],
            ["B","","","","","B","B"],
            ["B","","","P","","","B"],
            ["B","P","P","","P","P","B"],
            ["B","","","P","","","B"],
            ["B","B","","","","","B"],
            ["","B","B","B","B","B","B"],
        ],
        [ // 25
            ["B","B","B","B","B","B","B","",""],
            ["B","","","P","","","B","B","B"],
            ["B","","P","","P","","","","B"],
            ["B","P","","P","","P","","","B"],
            ["B","","P","","P","","","B","B"],
            ["B","","","P","","","","B",""],
            ["B","B","B","B","B","B","B","B",""],
        ],
        [ // 26
            ["","B","B","B","B","B","B","B","B","B","B"],
            ["","B","","","P","","","","","","B"],
            ["B","B","","","P","","","P","","P","B"],
            ["B","","P","P","","P","P","","P","","B"],
            ["B","","","","P","","","P","","P","B"],
            ["B","","","","P","","","","","","B"],
            ["B","B","B","B","B","B","B","B","B","B","B"],
        ],
    ],

    // 26 Levels Element & Fleche
    levelsEF : [
        [ // 1
            ["","","","","","",""],
            ["","","","E1","","",""],
            ["","","E2","FH","E3","",""],
            ["","","","E4","","",""],
            ["","","","","","",""],
        ],
        [ // 2
            ["","","","","","","",""],
            ["","","","","","E1","",""],
            ["","","E2","FH","","E3","",""],
            ["","","E4","","","","",""],
            ["","","","","","","",""],
        ],
        [ // 3
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","E1","","",""],
            ["","FH","","E2","","E3","",""],
            ["","","","","E4","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
        ],
        [ // 4
            ["","","","","","","",""],
            ["","","E1","","","E2","",""],
            ["","","","E3","","E4","",""],
            ["","FH","E5","","","E6","",""],
            ["","","","E7","","E8","",""],
            ["","","","","","","",""],
        ],
        [ // 5
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","E1","","E2","","",""],
            ["","","","","","","",""],
            ["","","","FH","","","",""],
            ["","","","","","","",""],
        ],
        [ // 5 Bis
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","E1","",""],
            ["","","","","","E2","",""],
            ["","","","","","E3","",""],
            ["","","","","","","",""],
            ["","","","","","FH","","r"],
            ["","","","","","","","r"],
        ],
        [ // 6
            ["","","","","","","","",""],
            ["","","","","E1","","","",""],
            ["","","E2","","","","E3","",""],
            ["","","","E4","","E5","","",""],
            ["","","","","E6","","","",""],
            ["","","","","FH","","","",""],
            ["","","","","","","","",""],
        ],
        [ // 7
            ["","","","","","",""],
            ["","","","","","FH",""],
            ["","","E1","","E2","",""],
            ["","","","E3","","",""],
            ["","","E4","","E5","",""],
            ["","","","","","",""],
            ["","","","","","",""],
        ],
        [ // 8
            ["","","","","","","","",""],
            ["","","","","","FH","","",""],
            ["","","E1","","","","","",""],
            ["","","","","","","","",""],
            ["","","","","E2","E3","E4","",""],
            ["","","","","","","","",""],
            ["","","","","","","","",""],
        ],
        [ // 9
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","E1","","",""],
            ["","","","","","E2","",""],
            ["","","E3","","","E4","",""],
            ["","","","E5","","","",""],
            ["","","","","FH","","",""],
            ["","","","","","","",""],
        ],
        [ // 10
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","E1","E2","E3","",""],
            ["","FH","","E4","","","",""],
            ["","","E5","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
        ],
        [ // 11
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","E1","","E2","",""],
            ["","","E3","E4","","","","E5","",""],
            ["","","FH","","","","","","",""],
            ["","","","","","","","","",""],
        ],
        [ // 12
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","E1","","","E2","",""],
            ["","FH","E3","","E4","","",""],
            ["","","E5","","","E6","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
        ],
        [ // 13
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","E1","","","",""],
            ["","FH","E2","","","","E3","","",""],
            ["","","","","E4","","","","",""],
            ["","","","","","","","","",""],
            ["","","","","","","","","",""],
        ],
        [ // 14
            ["","","","","","","",""],
            ["","","","","FH","","",""],
            ["","","E1","E2","","","",""],
            ["","","","","E3","","",""],
            ["","","","E4","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
        ],
        [ // 15
            ["","","","","","","","",""],
            ["","","","","","","","",""],
            ["","","E1","","FH","","","",""],
            ["","","","E2","E3","","","",""],
            ["","","","E4","","","","",""],
            ["","","","","","","","",""],
            ["","","","","","","","",""],
        ],
        [ // 16
            ["","","","","","","","","","",""],
            ["","","","","","","","","","",""],
            ["","","","","E1","E2","","","","",""],
            ["","","","","","","","FH","","",""],
            ["","","","","","","E3","E4","","",""],
            ["","E5","","","","","","","","",""],
            ["","","","","","","","","","",""],
            ["","","","","","","","","","",""],
        ],
        [ // 17
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","E1","","E2","E3","",""],
            ["","","","","","","",""],
            ["","","E4","E5","","E6","",""],
            ["","","","","FH","","",""],
            ["","","","","","","",""],
        ],
        [ // 18
            ["","","","","","","",""],
            ["","","","","","","",""],
            ["","","E1","","FH","","",""],
            ["","","","E2","E3","","",""],
            ["","","","E4","","","",""],
            ["","","","","","","",""],
            ["","","","","","","",""],
        ],
        [ // 19
            ["","","","","","","","",""],
            ["","","","","","","FH","",""],
            ["","","E1","E2","","E3","E4","",""],
            ["","","","","E5","","","",""],
            ["","","E6","E7","","E8","E9","",""],
            ["","","","","","","","",""],
            ["","","","","","","","",""],
        ],
        [ // 20
            ["","","","","","","","","","","","","",""],
            ["","","","","","","","","","","","","",""],
            ["","","","","E1","","","","","","E2","","",""],
            ["","","","","","","","","","E3","","","",""],
            ["","","","","","","","","E4","","","","",""],
            ["","","","","E5","FH","E6","","","","","","",""],
            ["","","","","E7","","","","","","","E8","",""],
            ["","","","","","","","","","","","","",""],
            ["","","","","","","","","","","","","",""],
            ["","","","","","","","","","","","","",""],
        ],
        [ // 21
            ["","","","","","","","",""],
            ["","FH","","","E1","","","",""],
            ["","","E2","E3","","E4","E5","",""],
            ["","","","","E6","","","",""],
            ["","","E7","E8","","E9","E10","",""],
            ["","","","","E11","","","",""],
            ["","","","","","","","",""],
        ],
        [ // 22
            ["","","","","","",""],
            ["","","","","","",""],
            ["","","E1","E2","E3","",""],
            ["","","E4","FH","E5","",""],
            ["","","E6","E7","E8","",""],
            ["","","","","","",""],
            ["","","","","","",""],
        ],
        [ // 23
            ["","","","","","","","","","",""],
            ["","","","","","E1","","","","",""],
            ["","","","E2","","E3","","","E4","",""],
            ["","FH","E5","","E6","","E7","","","E8",""],
            ["","","","E9","","E10","","","E11","",""],
            ["","","","","","E12","","","","",""],
            ["","","","","","","","","","",""],
        ],
        [ // 24
            ["","","","","","",""],
            ["","","","","","",""],
            ["","E1","E2","E3","","",""],
            ["","","","FH","","",""],
            ["","","","E4","E5","E6",""],
            ["","","","","","",""],
            ["","","","","","",""],
        ],
        [ // 25
            ["","","","","","","","",""],
            ["","","","","E1","","","",""],
            ["","","","E2","","E3","","",""],
            ["","E4","E5","","E6","","FH","",""],
            ["","","","E7","","E8","","",""],
            ["","","","","E9","","","",""],
            ["","","","","","","","",""],
            
        ],
        [ // 26
            ["","","","","","","","","","",""],
            ["","","","","","E1","","","","",""],
            ["","","","E2","","E3","","","E4","",""],
            ["","","E5","","E6","","E7","E8","","E9",""],
            ["","","","E10","","E11","","","E12","",""],
            ["","","","","","E13","","FH","","",""],
            ["","","","","","","","","","",""],
        ],
    ]
}

// 26 Sequences de solution
seqSolutions = [
    "DHDBGGGBGHDHDDBBGG",
    "HGGBBDHGHDBDDBDDHHGBDBG",
    "DHHDDDBGDDBBGHBBGGHDHGDHHGGBBGBD",
    "HDDHDDGGBBDDGBDGGHHHDBDGGGGHDGBBDHDDDBBGHDHGG",
    "HHGDBBGGHHDDHDBHHDDBBBGGHGGGBBDDHDHGDHHHGGBGBBBHHHDHDDBBBGGDDHHHGGBGBB",
    "DHHHGBHGGBBGGHHDGBBDDHHDDDHHGBDBGGGBBGGHHDDDDBDHBBBGHHDHGGGDDHHDBBBGHGGBBGGHHDDDDBDHGBBBDHGHHGGGGHHDDBHGGBBDDDD",
    "HGHGGHHDDDDBBDDHGDHGGGGBBGGHDGHDD",
    "BBGHGHGBGBBDHGHDBBBDDHHGGDBGHHHDBGBBDDDHHHGDBBBGGGHHDDHDB",
    "BDBDBBGHBGGHHGHDHDDBBDBBGHGBGHHGHHDBHDDBGGHGBHGGBDHDDDDBBDBGBGGHHBBDDHGBGH",
    "DDHHGHHBGGHHDBDBBDBBGGGHHHBBBDDDHHGHHGHGGBDBBBBDDDHHGGDDBBGGGHHHHDHGBBBBBGGHHDGBBDDHHHBDHHG",
    "BDDDHDDHHGGBBGBGGHDDDHHGBBDHHDDBGHGB",
    "HGHDHDDDDDDBBBGGHGGGDDDBDDHGDHHGBBDBGHHHGGGGGBGBBDHDDDDDHDBHHGGGBHGGGBGBBDHDDDDDHHGGGGGBGBDDDDDGHHDDBBGGGGGHHDBGBDDD",
    "HDGBBDHDDBGDBDDHGGHHHDDBGBGBBDDHGHGGGGHHDBGBDDGGBBDHGHD",
    "HDDBDDDHGBGHGBBBDHHGHGGBDHDBDDHGGHHDBGBBGGHDBDDBBGHDHDHDDDBGGG",
    "DBBGGBBDHDHHHGGBHGGBDHDDDBBBGGGHDBDDHHHGGBBGBDHHHGBBHHDDDBBGBBHDHHHGGBBB",
    "BHDDDBBBGGGGGGHHDDBDDBDDHHHGGGBGGGBBDDDGHHDHHGGBHDDBBGBBGGHHDHHDDBDDDBBBGGHDBDHHBGGBGGHDDDBDHBGGGHHHHGGBBDGHHDDBBGBDDDGGHGGGBBDDDDD",
    "BHDDBBBGGGGGHHDDBDBDDHHHGGBHHGHGBBHDDBBGBBGGHHDHHGGHGBGBBDHGHDDDDGGGBBBBGHHHDHDDDBBGBBDDDDDHHHGHGGGGGHGBBBBHHHDDDBBGBBDDDHHHDHGGGBBDBDDBDHGGGHGHHDDBBGBDD",
    "HHGHHGBHDDDBGBBBGHDHHHGGBGBBDDGGHHDDGGBBDDHGHHDBGBBDBDHGGHHHDDDBDBBGGDDHHGGDDBBGGHDHHGGGBBDDBBGHGHHHDDBGHGB",
    "BHDDBBBGGGGGHHDDBDBGDDDHHHGGBGGGBBDDHHDHHGGBHDDBBGBBGGHHDHHDDBDDBBBGGGDHBDDHGGDDHHGGBHHGGBBDGGBBDDHDDBDHHBGGGBGGHHDHHDDBBHHGGBBGBBDDHDDBDHGGHHHGGBBDGHHDDBBGBDDGGBDD",
    "BHGGBBDHBGGGGBBDDDDHHBBDDHHGDBBGGGGHDGBGGHHDBDDHHHGGBBHDHDBGGBGBBDHDDBDDDHHGHGDHGBDBDBBGHBGGGDDDHGBGGHGGBDD",
    "DDHHHDDDBDDHHGBDBGHGGGGBBBBDDHHHBBBGGHHHHDDDDHDBGGGGGBBDGBBDDHHHBGGHHDDBBGGBGGGBBHGHHHDDHHGGBHDDBBGGHGGBBBBBBDDDDDDDDDHDDBGGDDHHHGBBGBDGGGGGGGGDHHHDDDBDDHGGGGGBGHHHDDHHGGBBBBHHDDHGG",
    "DDDBBDDDBBGGHBDDHHHHGGGBBDDHBBHGGHHDBGBGGGHHDDBDDDBBGBGGDHDDHHGGGHGGBBBBDHDGGHHHDDBDDDBBGBGGHGGHHDDGGBBDDBDDHDHHGHGGBGGBBDDHGBDBDDHDHHGHGGB",
    "DHBGGBGBDDDGGHHDDHDHGGGDDBBGGBBDDHDHHGHGGBBBHHHDDBDBBGBGGHHDHBDGB",
    "BDBDDDHDDHHHDDBBGGBBDHGHHDGBBGGBGGGHGHHDHDDBDDHDBGGGHGBDDDHGBGGGGBBDBDDHHBBGGHDBDDHDDBGG",
    "DHHGBHGGBDBBBDDHBGGHDGHHHDDBGBGBBDHBDDHGHGHHGGBDHDDB",
    "GGHDBDBBGHGGBDHHHDBHGGBDBBGGGHHDDGGBBDDDHHGHHGGBHDDBBDBBGHDHDHHGBBDDDHGGDBBBGGDH",
    "GHGHGHHGGBBGBBDDDDHDDHGHHDDDBBGGBBDHGGHHHDBDGGBBGBDGGGGGHHDDGHHDDDDBBBDDBGHGHHHGGBDHDBGGHGGBBGBBDDDDHHBBGGGGHHDDDGGGBBDDHBDDHGDDDBGHGGBGGGHHDDGHHDBHDDDBGGDDDDHGGDBBHGGGHGGBDDDDHGBGGGBGBBDDDHHBBGGHBDDHGDDDBGHGGBGGHDD",

]

// Initialisation level
LevelEF = []

function initLevel(){
    LevelEF = []

    if(level<=27){
        Levels.levelsEF[level-1].forEach(el => {
            let ef = []
            el.forEach(e => {
                ef.push(e)
            })
            LevelEF.push(ef)
        })
    }
}