let listofids;
let game_in_progress=false;
//^once there is input in the bracket it will not allow you to exit the page without a confirmation
let enterfield=document.getElementById('enternames');
let loadbutton=document.getElementById('load');
let savebutton=document.getElementById('save');

//end game
function winner(me,you){
    me.style.background='yellow';
    let finale=me.getElementsByClassName('namefield')[0].innerHTML;
    you.innerHTML='Winner is '+finale+'!';
    document.title=me.getElementsByClassName('namefield')[0].innerHTML+' Wins!!';
    game_in_progress=false;
}

function colc(element,sister,next){
    next.innerHTML=element.innerHTML;
    sister.style.background='#F2B8B8';
    element.style.background='#B8F2B8';
}

function inOrderPlacement(input){
    let count=0;
    for(let x of listofids){
        if(input[count]!=null){
            document.getElementById(x).getElementsByClassName('namefield')[0].innerHTML=input[count];
            count++;
        }
    }
}

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random()*(max-min+1)+min)
}

function randomPlacement(input){
    for(let x of listofids){
        let i=randomIntFromInterval(0,input.length-1);
        document.getElementById(x).getElementsByClassName('namefield')[0].innerHTML=input[i];
        input.splice(i,1);
    }
}

function seededPlacement(input){
    let smo;
    if(input.length===8){smo=[1,8,4,5,3,6,2,7];}
    else if(input.length===16){smo=[1,16,8,9,5,12,4,13,3,14,6,11,7,10,2,15];}
    else if(input.length===32){smo=[1,32,16,17,8,25,9,24,5,28,12,21,4,29,13,20,3,30,14,19,6,27,11,22,7,26,10,23,2,31,15,18];}
    else if(input.length===64){smo=[1,64,32,33,16,49,17,48,8,57,25,40,9,56,24,41,5,60,28,37,12,53,21,44,4,61,29,36,13,52,20,45,3,62,30,35,14,51,19,46,6,59,27,38,11,54,22,43,7,58,26,39,10,55,23,42,2,63,31,34,15,50,18,47];}
    for(let i=0;i<input.length;i++){
        document.getElementById(listofids[i]).getElementsByClassName('namefield')[0].innerHTML=input[smo[i]-1];
    }
}

function sortintobracket(input,type){
    let count=0;
    if(type===0){
        inOrderPlacement(input);
    }else if(type===1){
        randomPlacement(input);
    }else if(type===2){
        seededPlacement(input);
    }
}

function validate_count(names,size){
    const inputs=names.length;
    if(inputs!==size){
        let error_msg='Number of inputs '+inputs+' does not match bracket size '+team_count
        alert(error_msg);
        return false;
    }
    return true;
}

//start game
function enterinput(randomize){
    const content=enterfield.value;
    const names=content.trim().split(',');
    if(!validate_count(names,team_count)){return;} //invalid input count
    sortintobracket(names,randomize);
    game_in_progress=true;
    loadbutton.style.display='none';
    savebutton.style.display='block';
}

window.addEventListener('beforeunload',function(event){
    if(game_in_progress){
        event.preventDefault();
        event.returnValue='';
        return 'Warning: tournament is not finished yet. Are you sure you want to exit?';
    }
});