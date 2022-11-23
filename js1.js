console.log("Welcome To My Spotify")

// Initialize The Variables
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif')
let songItems=Array.from(document.getElementsByClassName('songItem'));

// Songs List
let songs = [
    {songName:"Arabic Instrument Ringtone" , filePath:"songs/1.mp3" , coverPath:"covers/1.jpg"} ,
    {songName:"Heat Waves" , filePath:"songs/2.mp3" , coverPath:"covers/2.jpg"} ,
    {songName:"Aurora-Runaway" , filePath:"songs/3.mp3" , coverPath:"covers/3.jpg"} ,
    {songName:"Talking To The Moon" , filePath:"songs/4.mp3" , coverPath:"covers/4.jpg"} ,
    {songName:"Ces't La Vie" , filePath:"songs/5.mp3" , coverPath:"covers/5.jpg"} ,
    {songName:"Copines" , filePath:"songs/1.mp3" , coverPath:"covers/7.jpg"} ,
]

// Songs Title Automatically Change
songItems.forEach((element, i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle Play/Pause
masterPlay.addEventListener('click',()=>{
   if(audioElement.paused||audioElement.currentTime<=0)
   {
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play')
    masterPlay.classList.add('fa-circle-pause')
    gif.style.opacity=1
}
else{
    audioElement.pause()
    masterPlay.classList.remove('fa-circle-pause')
    masterPlay.classList.add('fa-circle-play')    
    gif.style.opacity=0
   }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    // Seekbar Update
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress
})

// Randolmly change seekbar

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

// Song Change
// songName.addEventListener((element, i),()=>{
//     console.log(element,i)
//     element.getElemenetsByTagName("img")
// })

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.add("fa-circle-play")
        element.classList.remove("fa-circle-pause")
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = `songs/${index}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');  
    })
})




