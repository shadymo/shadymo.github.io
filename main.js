const songs = ['80Way.mp3', '2020 Vision.mp3', 'aston.mp3', 'connections.mp3',
              'Flamingo.mp3', 'Go Get It.mp3', 'high.m4a', 'HitList.mp3',
              'Level Up.mp3', 'mfeature.mp3', 'No Hook Part 2.mp3', 'Pop A Ten.mp3',
              'Tactical.mp3', 'Talk To Em.mp3', 'Tired of this Shit.mp3', 'We Dont Do Baccardi.mp3'];


const music = document.getElementById('music');
let counter = 0;
let isShuffleOn = false;




function play(song){
    if(song){
        music.src = `./songs/${song}`
        document.getElementById('current-song').innerText = convertSongName(song);
        getCounterFromSong(song)

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
  if(isShuffleOn){
    let shuffledCounter = Math.floor(Math.random() *songs.length)
    counter = shuffledCounter;
    play();
  }else{
    if(counter < songs.length -1){
        counter +=1
    }else{
        counter = 0
    }
    play();
  }

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

function getCounterFromSong(song){
  for(var i = 0; i < songs.length; i++){
    if(songs[i] == song){
      counter = i;
    }
  }
}


document.addEventListener('click', (e)=>{
    let target = e.target;

    if(target.id == 'start'){
        document.getElementById('welcome-screen').remove()
        document.getElementById('music-player').style.display = 'flex';
        createSongElements();
        play();
    }else if(target.id == 'next'){
        nextSong();
    }else if(target.id == 'shuffle'){
      isShuffleOn = !isShuffleOn;
      document.getElementById('shuffle-check').innerText = isShuffleOn;
      nextSong();
    }

    if(target.classList[0] == 'songName'){
        let songPath = ''
        if(target.innerText == 'high'){
            songPath = target.innerText + '.m4a';
        }else{
            songPath = target.innerText + '.mp3'
        }
        play(songPath)
    }
})
