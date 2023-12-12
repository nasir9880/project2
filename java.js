let songindex=0;
let audioElement = new Audio('1.mp3');
let audioElement1 = new Audio('2.mp3');
let audioElement2 = new Audio('3.mp3');
let audioElement3 = new Audio('4.mp3');
let audioElement4 = new Audio('5.mp3');
let audioElement5 = new Audio('6.mp3');

let masterplay = document.getElementById('masterplay');
let masterplay1 = document.getElementById('masterplay1');
let masterplay2 = document.getElementById('masterplay2');
let masterplay3 = document.getElementById('masterplay3');
let masterplay4 = document.getElementById('masterplay4');
let masterplay5 = document.getElementById('masterplay5');
let masterplay6 = document.getElementById('masterplay6');

let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songItems =Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songname:"Mu gustas tu", filePath:"1.mp3", coverpath:"megust.jpg"},
    {songname:"until i found you", filePath:"2.mp3", coverpath:"p2.jpg"},
    {songname:"alor on dance", filePath:"3.mp3", coverpath:"alor.jpg"},
    {songname:"mount everest", filePath:"4.mp3", coverpath:"mount.jpg"},
    {songname:"calm down", filePath:"5.mp3", coverpath:"calm.jpg"},
    {songname:"snap", filePath:"6.mp3", coverpath:"snap.jpg"},
    
]

//masterplay handle play/pause
masterplay.addEventListener('click', ()=>{
if(audioElement.paused || audioElement.currentTime<=0){
audioElement.play();
masterplay.classList.remove('fa-circle-play');
masterplay.classList.add('fa-circle-pause');
gif.style.opacity=1;
}
else{
audioElement.pause();
masterplay.classList.remove('fa-circle-pause');
masterplay.classList.add('fa-circle-play');
gif.style.opacity=0;

}
})
//listen to event
audioElement.addEventListener('timeupdate', ()=>{
    
//upadte seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myprogressbar.value = progress;

})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;
})


songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    const neww=element.getElementsByClassName("songname")[0].textContent =songs[i].songname;
    console.log(neww)
});

masterplay1.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterplay1.classList.remove('fa-circle-play');
    masterplay1.classList.add('fa-circle-pause');
    gif.style.opacity=1;
    }
    else{
    audioElement.pause();
    masterplay1.classList.remove('fa-circle-pause');
    masterplay1.classList.add('fa-circle-play');
    gif.style.opacity=0;
    
    }
    })

    masterplay2.addEventListener('click', ()=>{
        if(audioElement1.paused || audioElement1.currentTime<=0){
        audioElement1.play();
        masterplay2.classList.remove('fa-circle-play');
        masterplay2.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        }
        else{
        audioElement1.pause();
        masterplay2.classList.remove('fa-circle-pause');
        masterplay2.classList.add('fa-circle-play');
        gif.style.opacity=0;
        
        }
        })

        masterplay3.addEventListener('click', ()=>{
            if(audioElement2.paused || audioElement2.currentTime<=0){
            audioElement2.play();
            masterplay3.classList.remove('fa-circle-play');
            masterplay3.classList.add('fa-circle-pause');
            gif.style.opacity=1;
            }
            else{
            audioElement2.pause();
            masterplay3.classList.remove('fa-circle-pause');
            masterplay3.classList.add('fa-circle-play');
            gif.style.opacity=0;
            
            }
            })


            masterplay4.addEventListener('click', ()=>{
                if(audioElement3.paused || audioElement3.currentTime<=0){
                audioElement3.play();
                masterplay4.classList.remove('fa-circle-play');
                masterplay4.classList.add('fa-circle-pause');
                gif.style.opacity=1;
                }
                else{
                audioElement3.pause();
                masterplay4.classList.remove('fa-circle-pause');
                masterplay4.classList.add('fa-circle-play');
                gif.style.opacity=0;
                
                }
                })


                masterplay5.addEventListener('click', ()=>{
                    if(audioElement4.paused || audioElement4.currentTime<=0){
                    audioElement4.play();
                    masterplay5.classList.remove('fa-circle-play');
                    masterplay5.classList.add('fa-circle-pause');
                    gif.style.opacity=1;
                    }
                    else{
                    audioElement4.pause();
                    masterplay5.classList.remove('fa-circle-pause');
                    masterplay5.classList.add('fa-circle-play');
                    gif.style.opacity=0;
                    
                    }
                    })

                    masterplay6.addEventListener('click', ()=>{
                        if(audioElement5.paused || audioElement5.currentTime<=0){
                        audioElement5.play();
                        masterplay6.classList.remove('fa-circle-play');
                        masterplay6.classList.add('fa-circle-pause');
                        gif.style.opacity=1;
                        }
                        else{
                        audioElement5.pause();
                        masterplay6.classList.remove('fa-circle-pause');
                        masterplay6.classList.add('fa-circle-play');
                        gif.style.opacity=0;
                        
                        }
                        })

                        