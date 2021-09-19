let popped = 0;
let score= -1;
let lives= 3 ;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloonred"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                score++
                removeEvent(e);
                checkAllPopped();
               
    }
    else if (e.target.className === "balloon"){
        
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "Fail";
        lives--;
        console.log(lives)

        removeEvent(e);
        checkAllPopped();
       
}   
});


function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 11){
        console.log('all popped! your score is ', score);
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = `<h1> Score ${score} </h1>`;
        message.style.display = 'block';

        
    }
    else if (lives === 0 ){
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = `<h1> Score ${score} </h1>`;
        message.style.display = 'block';


    }
    
};

