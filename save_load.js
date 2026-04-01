const screens=[screen1,screen2,screen3,screen4];
const allteamof8ids=teamof8ids.concat(intermediate8);
const allteamof16ids=teamof16ids.concat(intermediate16);
const allteamof32ids=teamof32ids.concat(intermediate32);
const allteamof64ids=teamof64ids.concat(intermediate64);

function switch_to_saved_teamcount(screen){
    for(let screen of screens){screen.style.display='none';}
    if(screen===8){
        screen1.style.display='block';
        screenselect.value='screen1';
        screenstyles.href='team8.css';
    }
    else if(screen===16){
        screen2.style.display='block';
        screenselect.value='screen2';
        screenstyles.href='team16.css';
    }
    else if(screen===32){
        screen3.style.display='block';
        screenselect.value='screen3';
        screenstyles.href='team32.css';
    }
    else {
        screen4.style.display='block';
        screenselect.value='screen4';
        screenstyles.href='team64.css';
    }
}

function get_team_ids(tc){
    if(tc===8){return allteamof8ids;}
    else if(tc===16){return allteamof16ids;}
    else if(tc===32){return allteamof32ids;}
    else if(tc===64){return allteamof64ids;}
}

function form_current_bracket_state(){
    let entries=[];
    let colors=[];
    const relevant_ids=get_team_ids(team_count);
    for(let entry of relevant_ids){
        entries.push(document.getElementById(entry).textContent.trim());
        colors.push(document.getElementById(entry).style.background);
    }
    const data={
        title:document.title,
        teams:team_count,
        entries:entries,
        colors:colors,
        input_field:enterfield.value,
    }
    return data;
}

function save_game(){
    let state=form_current_bracket_state();
    const blob=new Blob([JSON.stringify(state)],{type:'application/json'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;
    a.download=document.title+' bracket.json';
    a.click();
    URL.revokeObjectURL(url);
}

function restore_bracket(data){
    document.title=data.title;
    document.getElementById('main-heading').innerHTML=data.title;
    switch_to_saved_teamcount(data.teams);
    let relevant_ids=get_team_ids(data.teams);
    for(const [i,name] of data.entries.entries()){
        const element=document.getElementById(relevant_ids[i])
        const namefield=element?.querySelector('.namefield');
        if(namefield){namefield.innerHTML=name;}
    }
    for(const [i,color] of data.colors.entries()){
        const element=document.getElementById(relevant_ids[i]);
        if(element&&color){element.style.background=color;}
    }
    enterfield.value=data.input_field;
    team_count=data.teams;
}

function load_game(file){
    const reader=new FileReader();
    reader.onload=(event)=>{
        try{
            const data=JSON.parse(event.target.result);
            restore_bracket(data);
        }catch(e){
            alert('Invalid bracket file');
        }
    };
    reader.readAsText(file);
    document.getElementById('titlechanger').style.display='none';
    document.getElementById('titlechangebutton').style.display='none';
    loadbutton.style.display='none';
    savebutton.style.display='block';
    game_in_progress=true;
}