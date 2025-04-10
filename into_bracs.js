let listofids;
let enterfield;
let game_in_progress=false;
//^once there is input in the bracket it will not allow you to exit the page without a confirmation
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

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random()*(max-min+1)+min)
}

function sortintobracket(input,randomize){
    let count=0;
    if(randomize===0){
        for(let x of listofids){
            if(input[count]!=null){
                document.getElementById(x).getElementsByClassName('namefield')[0].innerHTML=input[count];
                count++;
            }
        }
    }else{
        for(let x of listofids){
            let i=randomIntFromInterval(0,input.length-1);
            document.getElementById(x).getElementsByClassName('namefield')[0].innerHTML=input[i];
            input.splice(i,1);
        }
    }
}

function convert(thing,randomize){
    let result=[];
    let temp='';
    for(let i=0;i<thing.length;i++){
        if(thing[i]!==','){
            temp+=thing[i];
        }else{
            result.push(temp);
            temp='';
        }
    }
    result.push(temp);
    if(result.length!==8&&result.length!==16&&result.length!==32&&result.length!==64){
        alert('Number of inputs does not match bracket size');
    }
    return sortintobracket(result,randomize);
}

//start game
function enterinput(randomize){
    let names=document.getElementById(enterfield).value;
    names=names.trim();
    convert(names,randomize);
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