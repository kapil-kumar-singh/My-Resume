"use strict"

var dark = true;

var sec = document.getElementsByTagName('section');
var dark_box = document.getElementById("dark_box");
var cricle = document.getElementById("cricle");
var para = document.getElementsByTagName('p');
var h1 = document.getElementsByTagName('h1');

var timeline_color  = document.getElementById("timeline_divider");

dark_box.addEventListener('click', function(){
    if( dark ){
        cricle.style.marginLeft = "72%";
        sec[0].classList.add("add_bc_even");
        sec[1].classList.add("add_bc_odd");
        sec[2].classList.add("add_bc_even");
        sec[3].classList.add("add_bc_odd");

        h1[1].classList.add('heading_color');
        h1[2].classList.add('heading_color');
        h1[3].classList.add('heading_color');


        para[1].classList.add('color_white');

        timeline_color.style.borderColor = "white"

        dark = false;
    } else{
        cricle.style.marginLeft = "0rem";
        sec[0].classList.remove("add_bc_even");
        sec[1].classList.remove("add_bc_odd");
        sec[2].classList.remove("add_bc_even");
        sec[3].classList.remove("add_bc_odd");

        h1[1].classList.remove('heading_color');
        h1[2].classList.remove('heading_color');
        h1[3].classList.remove('heading_color');




        para[1].classList.remove('color_white');
        timeline_color.style.borderColor = "black"


        dark = true;
    }
});
