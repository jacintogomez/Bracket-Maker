const screenselect=document.getElementById('screenselector');
const screenstyles=document.getElementById('styles');
const screen1=document.getElementById('screen1'); //8 teams
const screen2=document.getElementById('screen2'); //16 teams
const screen3=document.getElementById('screen3'); //32 teams
const screen4=document.getElementById('screen4'); //64 teams

const teamof8ids=['round2first8','round2second8','round2third8','round2fourth8','round2fifth8','round2sixth8','round2seventh8','round2eighth8'];
const teamof16ids=['first-16','second-16','third-16','fourth-16','fifth-16','sixth-16','seventh-16','eighth-16','ninth-16','tenth-16','eleventh-16','twelfth-16','thirteenth-16','fourteenth-16','fifteenth-16','sixteenth-16'];
const teamof32ids=['first-32','second-32','third-32','fourth-32','fifth-32','sixth-32','seventh-32','eighth-32','ninth-32','tenth-32','eleventh-32','twelfth-32','thirteenth-32','fourteenth-32','fifteenth-32','sixteenth-32','seventeenth-32','eighteenth-32','nineteenth-32','twentieth-32','twenty1-32','twenty2-32','twenty3-32','twenty4-32','twenty5-32','twenty6-32','twenty7-32','twenty8-32','twenty9-32','thirty0-32','thirty1-32','thirty2-32'];
const teamof64ids=['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth','thirteenth','fourteenth','fifteenth','sixteenth','seventeenth','eighteenth','nineteenth','twentieth','twenty1','twenty2','twenty3','twenty4','twenty5','twenty6','twenty7','twenty8','twenty9','thirty0','thirty1','thirty2','thirty3','thirty4','thirty5','thirty6','thirty7','thirty8','thirty9','forty0','forty1','forty2','forty3','forty4','forty5','forty6','forty7','forty8','forty9','fifty0','fifty1','fifty2','fifty3','fifty4','fifty5','fifty6','fifty7','fifty8','fifty9','sixty0','sixty1','sixty2','sixty3','sixty4'];

let teamcountdisplay=document.getElementById('team-count-display');

function changetitle(){
    document.title=document.getElementById('titlechanger').value;
    document.getElementById('main-heading').innerText=document.getElementById('titlechanger').value;
    document.getElementById('titlechanger').style.display='none';
    document.getElementById('titlechangebutton').style.display='none';
    loadbutton.style.display='none';
    savebutton.style.display='block';
}

screenselect.addEventListener('change',function(){
    if (screenselect.value==='screen1') {
        listofids=teamof8ids;
        enterfield='enternames8';
        screenstyles.href='team8.css';
        screen1.style.display='block';
        screen2.style.display='none';
        screen3.style.display='none';
        screen4.style.display='none';
        teamcountdisplay.innerHTML='8 Teams';
    }else if(screenselect.value==='screen2'){
        listofids=teamof16ids;
        enterfield='enternames16';
        screenstyles.href='team16.css';
        screen1.style.display='none'
        screen2.style.display='block';
        screen3.style.display='none';
        screen4.style.display='none';
        teamcountdisplay.innerHTML='16 Teams';
    }else if(screenselect.value==='screen3'){
        listofids=teamof32ids;
        enterfield='enternames32';
        screenstyles.href='team32.css';
        screen1.style.display='none';
        screen2.style.display='none';
        screen3.style.display='block';
        screen4.style.display='none';
        teamcountdisplay.innerHTML='32 Teams';
    }else if(screenselect.value==='screen4'){
        listofids=teamof64ids;
        enterfield='enternames64';
        screenstyles.href='team64.css';
        screen1.style.display='none';
        screen2.style.display='none';
        screen3.style.display='none';
        screen4.style.display='block';
        teamcountdisplay.innerHTML='64 Teams';
    }
});
