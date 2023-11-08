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
function sortintobracket(input,randomize){
  var listofids=['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth','thirteenth','fourteenth','fifteenth','sixteenth','seventeenth','eighteenth','nineteenth','twentieth','twenty1','twenty2','twenty3','twenty4','twenty5','twenty6','twenty7','twenty8','twenty9','thirty0','thirty1','thirty2'];
  var count=0;
  if(randomize===0){
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
function convert(thing,randomize){
  var result=[];
  var temp='';
  for(var i=0;i<thing.length;i++){
    if(thing[i]!=' '){
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
  var names;
  names=document.getElementById('enternames').value;
  convert(names,randomize);
}
