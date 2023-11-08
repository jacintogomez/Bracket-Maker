const screenselect=document.getElementById("screenselector");
const screenstyles=document.getElementById("styles");
const screen1=document.getElementById("screen1"); //8 teams
const screen2=document.getElementById("screen2"); //16 teams
const screen3=document.getElementById("screen3"); //32 teams
const screen4=document.getElementById("screen4"); //64 teams

screenselect.addEventListener("change",function(){
    if (screenselect.value==="screen1") {
        listofids=['round2first','round2second','round2third','round2fourth','round2fifth','round2sixth','round2seventh','round2eighth'];
        enterfield='enternames8';
        screenstyles.href="team8.css";
        screen1.style.display="block";
        screen2.style.display="none";
        screen3.style.display="none";
        screen4.style.display="none";
    }else if(screenselect.value==="screen2"){
        listofids=['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth','thirteenth','fourteenth','fifteenth','sixteenth'];
        enterfield='enternames16';
        screenstyles.href="team16.css";
        screen1.style.display="none"
        screen2.style.display="block";
        screen3.style.display="none";
        screen4.style.display="none";
    }else if(screenselect.value==="screen3"){
        screen1.style.display="none";
        screen2.style.display="none";
        screen3.style.display="block";
        screen4.style.display="none";
        screenstyles.href="team32.css";
    }else if(screenselect.value==="screen4"){
        screen1.style.display="none";
        screen2.style.display="none";
        screen3.style.display="none";
        screen4.style.display="block";
        screenstyles.href="team64.css";
    }
});
