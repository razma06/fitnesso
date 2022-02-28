const sandra = document.getElementById("sandraLions");
const bodyBuilder = document.getElementById("bodyBuilder");
const drinker = document.getElementById("drinkWater");
const sandra1 = document.getElementById("sandraLions1");
const bodyBuilder1 = document.getElementById("bodyBuilder1");
const drinker1 = document.getElementById("drinkWater1");
const next = document.getElementById("next");
const prev = document.getElementById("previous");
const imgItems = [sandra, bodyBuilder, drinker];
const txtItems = [sandra1, bodyBuilder1, drinker1];
const barsBttn = document.querySelector(".fa-bars");
const sr = ScrollReveal({
    distance: '60px',
    duration: 1500,
    delay: 300,
});

var debounce_timer;
window.onscroll = function(){
    if(debounce_timer) {
        window.clearTimeout(debounce_timer);
    }
    debounce_timer = window.setTimeout(function() {
        let header = document.getElementById("navbar");
        if(this.scrollY==0){
            header.style.backgroundColor = "whitesmoke";
        }else if(this.scrollY>=900){
            header.style.backgroundColor = "white";
        }else{
            header.style.background = `rgba(250,250,250, 0.3)`;
        }
        console.log('Fire');
    }, 100);
};

var ind = 0;
next.addEventListener("click", function(){
    imgItems[ind].classList.remove("active");
    txtItems[ind].classList.remove("active");
    if(ind==2){
        ind=0;
    }else{
        ind++;
    }
    imgItems[ind].classList.add("active");
    txtItems[ind].classList.add("active");
});



prev.addEventListener("click", function(){
    imgItems[ind].classList.remove("active");
    txtItems[ind].classList.remove("active");
    if(ind==0){
        ind=2;
    }else{
        ind--;
    }
    imgItems[ind].classList.add("active");
    txtItems[ind].classList.add("active");
});


sr.reveal(`.left-side`, {origin: 'left', delay: 0, duration: 1000});
sr.reveal(`.right-side`, {origin: 'right', delay: 500});
sr.reveal(`.top-head`, {delay:200});
sr.reveal(`.flex-row`);


var isClicked = false;
const sideBar = document.querySelector(".nav-bar-list");
const bars = document.querySelector(".bars-button");
bars.addEventListener("click", function(){
    barsBttn.classList.toggle("bg-blue");
    sideBar.classList.toggle("active-flex")
});

