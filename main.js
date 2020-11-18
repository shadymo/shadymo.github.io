const songs = [ 'aston.mp3', 'connections.mp3', 'high.m4a', 'mfeature.mp3', 'Tactical.mp3', 'Tired of this shit.mp3']


const music = document.getElementById('music');
let counter = 0;




function play(song){
    if(song){
        music.src = `./songs/${song}`
        document.getElementById('current-song').innerText = convertSongName(song);

    }else{
        music.src = `./songs/${songs[counter]}`;
        document.getElementById('current-song').innerText = convertSongName(songs[counter]);

    }
    music.play();
    music.onended = function(){
        nextSong();
    }
}

function nextSong(){
    if(counter < songs.length -1){
        counter +=1
    }else{
        counter = 0
    }
    play();
}

function createSongElements(){
    let songHolder = document.getElementById('song-holder');
    songs.forEach(song =>{
        let p = document.createElement('p');
        p.innerText = convertSongName(song);
        p.classList.add('songName')
        songHolder.appendChild(p)
        
    })
}

function convertSongName(path){
 let pathArr = path.split('');
 let word = ''
 for(var i=0; i < pathArr.length; i++){
    if(pathArr[i] != '.'){
        word += pathArr[i]
    }else{
        return word;
    }
 }
 
    return word;
}



document.addEventListener('click', (e)=>{
    let target = e.target;
    
    if(target.id == 'start'){
        document.getElementById('start').style.display = 'none';
        document.getElementById('music-player').style.display = 'flex';
        createSongElements();
        play();
    }
    if(target.id == 'next'){
        nextSong();
    }
    
    if(target.classList[0] == 'songName'){
        let songPath = ''
        if(target.innerText == 'high'){
            songPath = target.innerText + '.m4a';
        }else{
            songPath = target.innerText + '.mp3'
        }
       console.log(songPath);
        play(songPath)
        
    }
    
})

