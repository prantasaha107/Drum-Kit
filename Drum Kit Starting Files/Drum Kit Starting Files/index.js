
for (let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick)

}

function handleClick(){
    if (this.value=='w'){
        let sound= new Audio('sounds/tom-1.mp3')
        sound.play();

    }
    else if (this.value=='a'){
        let sound= new Audio('sounds/tom-2.mp3')
        sound.play();

    }
    else if (this.value=='s'){
        let sound= new Audio('sounds/tom-3.mp3')
        sound.play();

    }
    else if (this.value=='d'){
        let sound= new Audio('sounds/tom-4.mp3')
        sound.play();

    }
    else if (this.value=='j'){
        let sound= new Audio('sounds/crash.mp3')
        sound.play();

    }
    else if (this.value=='k'){
        let sound= new Audio('sounds/kick-bass.mp3')
        sound.play();

    }
    else if (this.value=='l'){
        let sound= new Audio('sounds/snare.mp3')
        sound.play();

    }
     

   

}



// let sound= new Audio('sounds/crash.mp3')
// sound.play()