const screenselect=document.getElementById('screenselector');
const screenstyles=document.getElementById('styles');
const screen1=document.getElementById('screen1'); //8 teams
const screen2=document.getElementById('screen2'); //16 teams
const screen3=document.getElementById('screen3'); //32 teams
const screen4=document.getElementById('screen4'); //64 teams

let team_count;
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
        screenstyles.href='team8.css';
        screen1.style.display='block';
        screen2.style.display='none';
        screen3.style.display='none';
        screen4.style.display='none';
        team_count=8;
    }else if(screenselect.value==='screen2'){
        listofids=teamof16ids;
        screenstyles.href='team16.css';
        screen1.style.display='none'
        screen2.style.display='block';
        screen3.style.display='none';
        screen4.style.display='none';
        team_count=16;
    }else if(screenselect.value==='screen3'){
        listofids=teamof32ids;
        screenstyles.href='team32.css';
        screen1.style.display='none';
        screen2.style.display='none';
        screen3.style.display='block';
        screen4.style.display='none';
        team_count=32;
    }else if(screenselect.value==='screen4'){
        listofids=teamof64ids;
        screenstyles.href='team64.css';
        screen1.style.display='none';
        screen2.style.display='none';
        screen3.style.display='none';
        screen4.style.display='block';
        team_count=64;
    }
    teamcountdisplay.innerHTML=team_count+' Teams';
});
