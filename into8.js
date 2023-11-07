function winner(me,you){
  me.style.background='yellow';
  var finale=me.getElementsByClassName('namefield')[0].innerHTML;
  you.innerHTML='Winner is '+finale+'!';
}
function colc(element,sister,next){
  next.innerHTML=element.innerHTML;
  sister.style.background='#F2B8B8';
  element.style.background='#B8F2B8';
  // if(next.id=='final'){
  //   winner(next,document.getElementById('winnermessage'));
  // }
}
function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
function sortintobracket(input,v){
  var listofids=['round2first','round2second','round2third','round2fourth','round2fifth','round2sixth','round2seventh','round2eighth'];
  var count=0;
  if(v===0){
    for(var x of listofids){
      if(input[count]!=null){
        document.getElementById(x).getElementsByClassName('namefield')[0].innerHTML=input[count];
        count++;
      }
    }
  }else{
    for(var x of listofids){
      var i=randomIntFromInterval(0,input.length-1);
      document.getElementById(x).getElementsByClassName('namefield')[0].innerHTML=input[i];
      input.splice(i,1);
    }
  }
}
function convert(thing,v){
  var result=[];
  var temp='';
  for(var i=0;i<thing.length;i++){
    if(thing[i]!==' '){
      temp+=thing[i];
    }else{
      result.push(temp);
      temp='';
    }
  }
  result.push(temp);
  return sortintobracket(result,v);
}
function enterinput(v){
  var names;
  names=document.getElementById('enternames').value;
  convert(names,v);
}
