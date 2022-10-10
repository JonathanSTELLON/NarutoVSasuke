let liChoice = document.querySelectorAll('.player-choice li');
let lenChoice = liChoice.length;
let cptChoice = 0;
let curChoice = null;

for (cptChoice = 0; cptChoice < lenChoice; cptChoice++){
    curChoice = liChoice[cptChoice];
    curChoice.addEventListener('click', updatePlayer)
};

function updatePlayer(){
    //console.log(this);

    let target = 'playerOne';

    if(this.parentNode.className.indexOf('playerOne')== -1){
        target = 'playerTwo';
    }
    document.getElementById(target).value = this.className;
}

let liMap = document.querySelectorAll('.map-choice li');
let lenMap = liMap.length;
let cptMap = 0;
let curMap = null;

for (cptMap= 0; cptMap < lenMap; cptMap++){
    curMap = liMap[cptMap];
    curMap.addEventListener('click', updateMap);
};

function updateMap(){
    let target = 'map';
    document.getElementById(target).value = this.className;

    //console.log(this.className);
}