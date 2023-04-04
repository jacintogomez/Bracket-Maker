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
function sortintobracket(input){
  var listofids=['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth','thirteenth','fourteenth','fifteenth','sixteenth','seventeenth','eighteenth','nineteenth','twentieth','twenty1','twenty2','twenty3','twenty4','twenty5','twenty6','twenty7','twenty8','twenty9','thirty0','thirty1','thirty2'];
  var count=0;
  for(var x of listofids){
    if(input[count]!=null){
      document.getElementById(x).getElementsByClassName('namefield')[0].innerHTML=input[count];
      count++;
    }
  }
}
function convert(thing){
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
  return sortintobracket(result);
}
function enterinput(){
  var names;
  names=document.getElementById('enternames').value;
  convert(names);
}
function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
for(var x=0;x<100;x++){
  console.log(randomIntFromInterval(0,63));
}
