let listofids;
let enterfield;

function winner(me,you){
  me.style.background='yellow';
  let finale=me.getElementsByClassName('namefield')[0].innerHTML;
  you.innerHTML='Winner is '+finale+'!';
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
    if(thing[i]!==' '){
      temp+=thing[i];
    }else{
      result.push(temp);
      temp='';
    }
  }
  result.push(temp);
  return sortintobracket(result,randomize);
}
function enterinput(randomize){
  let names=document.getElementById(enterfield).value;
  names=names.trim();
  convert(names,randomize);
}
