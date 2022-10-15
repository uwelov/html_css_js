let block = [
    document.querySelector(".left_top"), //0
    document.querySelector(".center_top"), //1
    document.querySelector(".right_top"), //2
    document.querySelector(".left_center"), //3
    document.querySelector(".center"), //4
    document.querySelector(".right_center"), //5
    document.querySelector(".left_bottom"), //6
    document.querySelector(".center_bottom"), //7
    document.querySelector(".right_bottom") //8
];
let move = 0;
let logic = [
    null, null, null,
    null, null, null,
    null, null, null
];
let btn = document.querySelector(".go_work");

function restart() {
    move = 0;
    for (let i = 0; i < block.length; i++) {
        block[i].innerText = "";
    }
}

function work_on0() {
    if (block[0].innerText == "") {
        move++;
        if (move % 2 == 0) {
            block[0].innerText = "x";
            logic[0] = "x";
        } else {
            block[0].innerText = "o";
            logic[0] = "o";
        }
    }
}

function work_on1() {
    if (block[1].innerText == "") {
        move++;
        if (move % 2 == 0) {
            block[1].innerText = "x";
            logic[1] = "x";
        } else {
            block[1].innerText = "o";
            logic[1] = "o";
        }
    }
}

function work_on2() {
    if (block[2].innerText == "") {
        move++;
        if (move % 2 == 0) {
            block[2].innerText = "x";
            logic[2] = "x";
        } else {
            block[2].innerText = "o";
            logic[2] = "o";
        }
    }
}

function work_on3() {
    if (block[3].innerText == "") {
        move++;
        if (move % 2 == 0) {
            block[3].innerText = "x";
            logic[3] = "x";
        } else {
            block[3].innerText = "o";
            logic[3] = "o";
        }
    }
}

function work_on4() {
    if (block[4].innerText == "") {
        move++;
        if (move % 2 == 0) {
            block[4].innerText = "x";
            logic[4] = "x";
        } else {
            block[4].innerText = "o";
            logic[4] = "o";
        }
    }
}

function work_on5() {
    if (block[5].innerText == "") {
        move++;
        if (move % 2 == 0) {
            block[5].innerText = "x";
            logic[5] = "x";
        } else {
            block[5].innerText = "o";
            logic[5] = "o";
        }
    }
}

function work_on6() {
    if (block[6].innerText == "") {
        move++;
        if (move % 2 == 0) {
            block[6].innerText = "x";
            logic[6] = "x";
        } else {
            block[6].innerText = "o";
            logic[6] = "o";
        }
    }
}

function work_on7() {
    if (block[7].innerText == "") {
        move++;
        if (move % 2 == 0) {
            block[7].innerText = "x";
            logic[7] = "x";
        } else {
            block[7].innerText = "o";
            logic[7] = "o";
        }
    }
}

function work_on8() {
    if (block[8].innerText == "") {
        move++;
        if (move % 2 == 0) {
            block[8].innerText = "x";
            logic[8] = "x";
        } else {
            block[8].innerText = "o";
            logic[8] = "o";
        }
    }
}

function final() {
    if (logic[0] == logic[1] && logic[1] == logic[2] && logic[0] == logic[2]) {
        console.log("Победитель " + logic[0]);
    } else if (logic[3] == logic[4] && logic[4] == logic[5] && logic[3] == logic[5]) {
        console.log("Победитель " + logic[3]);
    } else if (logic[6] == logic[7] && logic[7] == logic[8] && logic[6] == logic[8]) {
        console.log("Победитель " + logic[6]);
    } else if (logic[1] == logic[4] && logic[4] == logic[7] && logic[1] == logic[7]) {
        console.log("Победитель " + logic[1]);
    } else if (logic[2] == logic[5] && logic[5] == logic[8] && logic[2] == logic[8]) {
        console.log("Победитель " + logic[2]);
    } else if (logic[0] == logic[4] && logic[4] == logic[8] && logic[0] == logic[8]) {
        console.log("Победитель " + logic[0]);
    } else if (logic[2] == logic[4] && logic[4] == logic[6] && logic[2] == logic[6]) {
        console.log("Победитель " + logic[2]);
    } else if (logic[0] == logic[3] && logic[3] == logic[6] && logic[0] == logic[6]) {
        console.log("Победитель " + logic[0]);
    }
    else{
        console.log("Ничья");
    }
}
btn.onclick = restart;
block[0].onclick = work_on0;
block[1].onclick = work_on1;
block[2].onclick = work_on2;
block[3].onclick = work_on3;
block[4].onclick = work_on4;
block[5].onclick = work_on5;
block[6].onclick = work_on6;
block[7].onclick = work_on7;
block[8].onclick = work_on8;
setInterval(final, 1000);