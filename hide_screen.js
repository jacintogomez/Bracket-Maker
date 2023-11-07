const screenselect=document.getElementById("screenselector");
const screenstyles=document.getElementById("screenstyles");
const screenscript=document.getElementById("screenscript");
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
        screenscript.src="into8.js";
    }else if(screenselect.value==="screen2"){
        screen1.style.display="none"
        screen2.style.display="block";
        screen3.style.display="none";
        screen4.style.display="none";
        screenstyles.href="team16.css";
        screenscript.src="into16.js";
    }else if(screenselect.value==="screen3"){
        screen1.style.display="none";
        screen2.style.display="none";
        screen3.style.display="block";
        screen4.style.display="none";
        screenstyles.href="team32.css";
        screenscript.src="into32.js";
    }else if(screenselect.value==="screen4"){
        screen1.style.display="none";
        screen2.style.display="none";
        screen3.style.display="none";
        screen4.style.display="block";
        screenstyles.href="team64.css";
        screenscript.src="into64.js";
    }
});
