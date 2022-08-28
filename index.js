var numberOfDrum = document.querySelectorAll('.drum').length;
console.log(numberOfDrum);
for(var i = 0; i < numberOfDrum; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',clicked);
}
function clicked(){
    var soundOf = this.innerHTML;
    console.log(soundOf);
    music(soundOf);
    buttonAnimation(soundOf);
}
document.addEventListener('keydown',function(event){
    let key = event.key;
    //console.log(key);
    music(key);
    buttonAnimation(key);
})
function music(i){
    var m1 = new Audio('sounds/crash.mp3');
    var m2 = new Audio('sounds/kick-bass.mp3');
    var m3 = new Audio('sounds/snare.mp3');
    var m4 = new Audio('sounds/tom_1.mp3');
    var m5 = new Audio('sounds/tom_2.mp3');
    var m6 = new Audio('sounds/tom_3.mp3');
    var m7 = new Audio('sounds/tom_4.mp3');
    switch(i){
        case 'w':
            m1.play();
            break;
        case 'a':
            m2.play();
            break;
        case 's':
            m3.play();
            break;
        case 'd':
            m4.play();
            break;
        case 'j':
            m5.play();
            break;
        case 'k':
            m6.play();
            break;
        case 'l':
            m7.play();
            break;
    }
}
function buttonAnimation(i){
    document.querySelector('.'+i).classList.add('pressed');
    setTimeout(function(){
        document.querySelector('.'+i).classList.remove('pressed');
    },100)
}