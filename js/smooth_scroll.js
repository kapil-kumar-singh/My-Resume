
var anchorTag = document.getElementsByTagName('a');

for(let i = 1 ; i <= 11 ; i++){
    anchorTag[i].addEventListener('click', function(event){
        event.preventDefault();
        var takeSectionId = this.textContent.trim().toLowerCase();
        var getSection = document.getElementById(takeSectionId);
        var interval = setInterval(function(){
            var targetCoordinates = getSection.getBoundingClientRect();
            if (targetCoordinates.top <= 0 ){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,25);
        }, 25) 
    });
};


var backToTop = document.querySelector('#btp a')
backToTop.addEventListener('click', function(event){
    event.preventDefault();
    var header = document.getElementsByTagName('header');
    var Interval = setInterval(function(){
        var topCoordinates = header[0].getBoundingClientRect();
        if (topCoordinates.top >= 0 ){
            clearInterval(Interval);
            return;
        }
        window.scrollBy(0, -25);
    }, 15);
    
});

