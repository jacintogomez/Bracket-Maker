const screenselect=document.getElementById("screenselector");
const screenstyles=document.getElementById("screenstyles");
const screen1=document.getElementById("screen1"); //8 teams
const screen2=document.getElementById("screen2"); //16 teams
const screen3=document.getElementById("screen3"); //32 teams
const screen4=document.getElementById("screen4"); //64 teams

screenselect.addEventListener("change",function(){
    if (screenselect.value==="screen1") {
        screen1.style.display="block";
        screen2.style.display="none";
        screen3.style.display="none";
        screen4.style.display="none";
        screenstyles.href="team8.css";
        listofids=['round2first','round2second','round2third','round2fourth','round2fifth','round2sixth','round2seventh','round2eighth'];
    }else if(screenselect.value==="screen2"){
        screen1.style.display="non"
        screen2.style.display="block";
        screen3.style.display="none";
        screen4.style.display="none";
        screenstyles.href="team16.css";
        listofids=['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth','thirteenth','fourteenth','fifteenth','sixteenth'];
    }else if(screenselect.value==="screen3"){
        screen1.style.display="none";
        screen2.style.display="none";
        screen3.style.display="block";
        screen4.style.display="none";
        screenstyles.href="team32.css";
        listofids=['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth','thirteenth','fourteenth','fifteenth','sixteenth','seventeenth','eighteenth','nineteenth','twentieth','twenty1','twenty2','twenty3','twenty4','twenty5','twenty6','twenty7','twenty8','twenty9','thirty0','thirty1','thirty2'];
    }else if(screenselect.value==="screen4"){
        screen1.style.display="none";
        screen2.style.display="none";
        screen3.style.display="none";
        screen4.style.display="block";
        screenstyles.href="team64.css";
        listofids=['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth','thirteenth','fourteenth','fifteenth','sixteenth','seventeenth','eighteenth','nineteenth','twentieth','twenty1','twenty2','twenty3','twenty4','twenty5','twenty6','twenty7','twenty8','twenty9','thirty0','thirty1','thirty2','thirty3','thirty4','thirty5','thirty6','thirty7','thirty8','thirty9','forty0','forty1','forty2','forty3','forty4','forty5','forty6','forty7','forty8','forty9','fifty0','fifty1','fifty2','fifty3','fifty4','fifty5','fifty6','fifty7','fifty8','fifty9','sixty0','sixty1','sixty2','sixty3','sixty4'];
    }
});
