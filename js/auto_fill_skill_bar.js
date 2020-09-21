var skill_display = document.querySelectorAll('.skill_display > div');

function initialisebar(bar){
    bar.setAttribute('data-visited', false);
    bar.style.width = 0 + "%";
}

for(let bar of skill_display){
    initialisebar(bar);
}

function fillbar(bar){
    let current_width = 0;
    let target_width = bar.getAttribute('data-bar-width');
    let Interval = setInterval(function(){
        if ( current_width >= target_width ){
            clearInterval(Interval);
            return;
        }
        current_width++;
        bar.style.width = current_width + "%";
    }, 5);

}

function CheckScroll(){
    for(let bar of skill_display){
        let barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
        (barCoordinates.top <= (window.innerHeight - barCoordinates.height))){
            bar.setAttribute('data-visited', true);
            fillbar(bar);
        } else if (barCoordinates.top > window.innerHeight){
            bar.setAttribute('data-visited', false);
            initialisebar(bar);
        }
    };
};


window.addEventListener('scroll', CheckScroll);