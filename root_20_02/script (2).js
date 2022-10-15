let circle = [
    document.querySelector(".left_top"), //0
    document.querySelector(".center_top"), //1
    document.querySelector(".right_top"), //2
    document.querySelector(".center"), //3
    document.querySelector(".left_bottom"), //4
    document.querySelector(".center_bottom"), //5
    document.querySelector(".right_bottom") //6
];
let btn = document.querySelector(".go_work");
let rnd;

function test() {
    rnd = Math.round(Math.random() * 6);
    console.log(rnd);
    for (let x = 0; x < circle.length; x++) {
        circle[x].style.backgroundColor = "green";
    }


    if (rnd == 1) {
        circle[3].style.backgroundColor = "white";
    } else if (rnd == 2) {
        circle[1].style.backgroundColor = "white";
        circle[5].style.backgroundColor = "white";
    } else if (rnd == 3) {
        circle[2].style.backgroundColor = "white";
        circle[3].style.backgroundColor = "white";
        circle[4].style.backgroundColor = "white";
    } else if (rnd == 4) {
        circle[0].style.backgroundColor = "white";
        circle[2].style.backgroundColor = "white";
        circle[4].style.backgroundColor = "white";
        circle[6].style.backgroundColor = "white";
    } else if (rnd == 5) {
        circle[0].style.backgroundColor = "white";
        circle[2].style.backgroundColor = "white";
        circle[3].style.backgroundColor = "white";
        circle[4].style.backgroundColor = "white";
        circle[6].style.backgroundColor = "white";
    } else if(rnd==6){
        circle[0].style.backgroundColor = "white";
        circle[1].style.backgroundColor = "white";
        circle[2].style.backgroundColor = "white";
        circle[4].style.backgroundColor = "white";
        circle[5].style.backgroundColor = "white";
        circle[6].style.backgroundColor = "white";
    }
}

btn.onclick = test;
