"use strict";

//Reference the wrapper and its card
let wrapper = document.getElementById("wrapper");
//this card is the one that rotates
let card = wrapper.querySelector(".hover-card");

//this callback is going to manage on what angle the card rotates.
//it determines the angle by the position of the mouse relative to itself:
function set_rotations(e) {

    //only variable you have to change if you want to add more  or less spinning:
    let rotation_max = 20;


    let rot_x = 0;
    let rot_y = 0;

    let w_width = wrapper.clientWidth;
    let h_width = w_width / 2;

    let w_height = wrapper.clientHeight;
    let h_height = w_height / 2;

    let mouse_x = e.offsetX;
    let mouse_y = e.offsetY;
    let percent_x = 0;
    let percent_y = 0;

    if(mouse_x <= w_width / 2)
    {
        percent_x = (mouse_x * 100) / h_width;
        percent_x = 100 - percent_x;
        rot_y = -(rotation_max / 100) * percent_x;
    }
    else if(mouse_x > w_width / 2)
    {
        percent_x = ((mouse_x - h_width) * 100) / h_width;
        rot_y = (rotation_max / 100) * percent_x;
    }
    if(mouse_y <= w_height / 2)
    {
        percent_y = (mouse_y * 100) / h_height;
        percent_y = 100 - percent_y;
        rot_x = (rotation_max / 100) * percent_y;
    }
    else if(mouse_y > w_height / 2)
    {
        percent_y = ((mouse_y - h_height) * 100) / h_height;
        rot_x = -(rotation_max / 100) * percent_y;

    }
    card.style.transform = `rotateY(${rot_y}deg) rotateX(${rot_x}deg)`;
}

//resets all the transform values to ZERO when leaving the wrapper with the mouse:
function reset_rotation() {
    card.style.transition = "transform .5s";
    card.style.transform = `rotateY(0) rotateX(0)`;
    setTimeout(() => {
        card.style.transition = "";
    }, 500);
}

wrapper.addEventListener("mousemove", set_rotations);
wrapper.addEventListener("mouseleave", reset_rotation);