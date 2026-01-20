const screens=[screen1,screen2,screen3,screen4];
let allteams=teamof8ids.concat(teamof16ids,teamof32ids,teamof64ids);

function get_current_teamcount(){
    if(screen1.style.display!=='none'){return 8;}
    else if(screen2.style.display!=='none'){return 16;}
    else if(screen3.style.display!=='none'){return 32;}
    else {return 64;}
}

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

function form_current_bracket_state(){
    let entries=[];
    for(let entry of allteams){entries.push(document.getElementById(entry).textContent.trim());}
    const data={
        title:document.title,
        teams:get_current_teamcount(),
        entries:entries,
    }
    return data;
}

function save_game(){
    let state=form_current_bracket_state();
    const blob=new Blob([JSON.stringify(state)],{type:'application/json'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;
    a.download=document.title+'-bracket.json';
    a.click();
    URL.revokeObjectURL(url);
}

function restore_bracket(data){
    document.getElementById('main-heading').innerHTML=data.title;
    switch_to_saved_teamcount(data.teams);
    for(const [i,x] of data.entries.entries()){
        const namefield=document.getElementById(allteams[i]).querySelector('.namefield');
        if(namefield){
            namefield.textcontent=x;
        }
    }
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
}