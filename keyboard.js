var audioOne =  document.getElementById('audioOne')
var audioOne =  document.getElementById('audioTwo')
var audioOne =  document.getElementById('audioThree')
var audioOne =  document.getElementById('audioFour')
var audioOne =  document.getElementById('audioFive')
var audioOne =  document.getElementById('audioSix')
var audioOne =  document.getElementById('audioSeven')
var audioOne =  document.getElementById('audioEight')
var audioOne =  document.getElementById('audioNine')

var key = document.getElementsByClassName("key");

//array

var keys = [];
var sound = [];

sound[0]=new Howl({
   src:['audio/1.mp3']
});


sound[1]=new Howl({
    src:['audio/2.mp3']
});

sound[2]=new Howl({
    src:['audio/3.mp3']
});

sound[3]=new Howl({
    src:['audio/4.mp3']
});

sound[4]=new Howl({
    src:['audio/5.mp3']
 });
 
 
 sound[5]=new Howl({
     src:['audio/6.mp3']
 });
 
 sound[6]=new Howl({
     src:['audio/7.mp3']
 });
 
 sound[7]=new Howl({
     src:['audio/8.mp3']
 });

 sound[8]=new Howl({
    src:['audio/9.mp3']
});
 




//document.addEventListener("keydown",keyPressed);
//document.addEventListener("keyup",keyReleased);

document.addEventListener("keydown",keyDown);
document.addEventListener("keyup",keyUp);

// function keyPressed(evt){

//     console.log(evt.keyCode);

//     //A=65

//     if(evt.keyCode ==65) {

//         //document.getElementById('audioOne').play();
        
//         audioOne.play();
//         key[0].style.backgroundColor = "red";
//         console.log("key....",key);
        
//     }

//     //S=83

//     if(evt.keyCode ==83) {

//         //document.getElementById('audioOne').play();
//         audioTwo.play();
//         key[1].style.backgroundColor = "red";
//     }

//     //D==68

//     if(evt.keyCode ==68) {

//         //document.getElementById('audioOne').play();
//         audioThree.play();
//         key[2].style.backgroundColor = "red";
//     }


//     //D==70

//     if(evt.keyCode ==70) {

//         //document.getElementById('audioOne').play();
//         audioFour.play();
//         key[3].style.backgroundColor = "red";
//     }

// }


// function keyReleased(evt){
//         //A keyup

        
//         if(evt.keyCode ==65) {
//             key[0].style.backgroundColor = "white";
//         }

//         if(evt.keyCode ==83) {
//             key[1].style.backgroundColor = "white";
//         }
    
//         if(evt.keyCode ==68) {
//             key[2].style.backgroundColor = "white";
//         }
    
//         if(evt.keyCode ==70) {
//             key[3].style.backgroundColor = "white";
//         }
// }



function keyDown(evt) {
    keys[evt.keyCode] =  true;

    if (keys[65]){

        sound[0].play();
        key[0].style.backgroundColor="red";
    }

    if (keys[83]){

        sound[1].play();
        key[1].style.backgroundColor="red";
    }

    if (keys[68]){

        sound[2].play();
        key[2].style.backgroundColor="red";
    }

    if (keys[70]){

        sound[3].play();
        key[3].style.backgroundColor="red";
    }

    if (keys[71]){

        sound[4].play();
        key[4].style.backgroundColor="red";
    }

    if (keys[72]){

        sound[5].play();
        key[5].style.backgroundColor="red";
    }

    if (keys[74]){

        sound[6].play();
        key[6].style.backgroundColor="red";
    }

    if (keys[75]){

        sound[7].play();
        key[7].style.backgroundColor="red";
    }

    if (keys[76]){

        sound[8].play();
        key[8].style.backgroundColor="red";
    }
     

        
}

function keyUp(evt) {
    delete keys[evt.keyCode];

    keys[evt.keyCode];


    if (evt.keyCode==65){
      
        key[0].style.backgroundColor="white";
    }

    if (evt.keyCode==83){
      
        key[1].style.backgroundColor="white";
    }

    if (evt.keyCode==68){
      
        key[2].style.backgroundColor="white";
    }

    if (evt.keyCode==70){
      
        key[3].style.backgroundColor="white";
    }


    if (evt.keyCode==71){
      
        key[4].style.backgroundColor="white";
    }

    if (evt.keyCode==72){
      
        key[5].style.backgroundColor="white";
    }

    if (evt.keyCode==74){
      
        key[6].style.backgroundColor="white";
    }

    if (evt.keyCode==75){
      
        key[7].style.backgroundColor="white";
    }

    if (evt.keyCode==76){
      
        key[8].style.backgroundColor="white";
    }


}




