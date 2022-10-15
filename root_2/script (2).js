let btn = document.querySelector(".go_work");
let image = ["element1.png",
              "element2.png",
              "element3.png",
              "element4.png",
              "element5.png",
              "element6.png",
              "element7.png",
              "element8.png",
              "element9.png",
              "element10.png",
              "element11.png",
              "element12.png",
              "element13.png",
              "element14.png",
              "element15.png",
              "element16.png",
              "element17.png",
              "element18.png",
              "element19.png",
              "element20.png",
              "element21.png",
              "element22.png",
              "element23.png",
              "element24.png",
              "element25.png",
              "element26.png",
              "element27.png",
              "element28.png",
              "element29.png",
              "element30.png",
              "element31.png",
              "element32.png",
              "element33.png",
              "element34.png",
              "element35.png",
              "element36.png"
];
let rnd_arr = [
        document.querySelector("#el1"), //0
        document.querySelector("#el2"), //1
        document.querySelector("#el3"), //2
        document.querySelector("#el4"), //3
        document.querySelector("#el5"), //4
        document.querySelector("#el6"), //5
        document.querySelector("#el7"), //6
        document.querySelector("#el8"), //7
        document.querySelector("#el9"), //8
        document.querySelector("#el10"), //9
        document.querySelector("#el11"), //10
        document.querySelector("#el12"), //11
        document.querySelector("#el13"), //12
        document.querySelector("#el14"), //13
        document.querySelector("#el15"), //14
        document.querySelector("#el16"), //15
        document.querySelector("#el17"), //16
        document.querySelector("#el18"), //17
        document.querySelector("#el19"), //18
        document.querySelector("#el20"), //19
        document.querySelector("#el21"), //20
        document.querySelector("#el22"), //21
        document.querySelector("#el23"), //22
        document.querySelector("#el24"), //23
        document.querySelector("#el25"), //24
        document.querySelector("#el26"), //25
        document.querySelector("#el27"), //26
        document.querySelector("#el28"), //27
        document.querySelector("#el29"), //28
        document.querySelector("#el30"), //29
        document.querySelector("#el31"), //30
        document.querySelector("#el32"), //31
        document.querySelector("#el33"), //32
        document.querySelector("#el34"), //33
        document.querySelector("#el35"), //34
        document.querySelector("#el36") //35
];
let num = new Array(36);

let rand_card;
let get;
let score = 0;

function close() {
    for (let i = 0; i < rnd_arr.length; i++) {
        rnd_arr[i].style.backgroundImage = "url(photo/element37.jpg)";
        rand_card = "url(photo/element" + (1 + Math.round(Math.random() * 35)) + ".png)";
        document.querySelector("#el_pc").style.backgroundImage = rand_card;
    }
}

function open() {
    while (score != 36) {
        get = 1 + Math.round(Math.random() * 35);
        console.log(get, score);
        if (image[get] != "") {
            rnd_arr[score].style.backgroundImage = "url(/photo/element" + get + ".png)";
            num[score] = rnd_arr[score].style.backgroundImage;
            image[get] = "";
        } else {
            continue;
        }
        score++;
    }
    setTimeout(close, 5000);
}

function final0() {
    if (rand_card == rnd_arr[0].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final1() {
    if (rand_card == rnd_arr[1].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final2() {
    if (rand_card == rnd_arr[2].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final3() {
    if (rand_card == rnd_arr[3].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final4() {
    if (rand_card == rnd_arr[4].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final5() {
    if (rand_card == rnd_arr[5].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final6() {
    if (rand_card == rnd_arr[6].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final7() {
    if (rand_card == rnd_arr[7].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final8() {
    if (rand_card == rnd_arr[8].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final9() {
    if (rand_card == rnd_arr[9].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final10() {
    if (rand_card == rnd_arr[10].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final11() {
    if (rand_card == rnd_arr[11].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final12() {
    if (rand_card == rnd_arr[12].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final13() {
    if (rand_card == rnd_arr[13].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final14() {
    if (rand_card == rnd_arr[14].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final15() {
    if (rand_card == rnd_arr[15].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final16() {
    if (rand_card == rnd_arr[16].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final17() {
    if (rand_card == rnd_arr[17].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final18() {
    if (rand_card == rnd_arr[18].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final19() {
    if (rand_card == rnd_arr[19].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final20() {
    if (rand_card == rnd_arr[20].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final21() {
    if (rand_card == rnd_arr[21].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final22() {
    if (rand_card == rnd_arr[22].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final23() {
    if (rand_card == rnd_arr[23].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final24() {
    if (rand_card == rnd_arr[24].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final25() {
    if (rand_card == rnd_arr[25].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final26() {
    if (rand_card == rnd_arr[26].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final27() {
    if (rand_card == rnd_arr[27].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final28() {
    if (rand_card == rnd_arr[28].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final29() {
    if (rand_card == rnd_arr[29].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final30() {
    if (rand_card == rnd_arr[30].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final31() {
    if (rand_card == rnd_arr[31].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final32() {
    if (rand_card == rnd_arr[32].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final33() {
    if (rand_card == rnd_arr[33].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final34() {
    if (rand_card == rnd_arr[34].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}

function final35() {
    if (rand_card == rnd_arr[35].style.backgroundImage) {
        console.log("Вы угадали :)");
    } else {
        console.log("Вы не угадали:(");
    }
}
rnd_arr[0].onclick = final0;
rnd_arr[1].onclick = final1;
rnd_arr[2].onclick = final2;
rnd_arr[3].onclick = final3;
rnd_arr[4].onclick = final4;
rnd_arr[5].onclick = final5;
rnd_arr[6].onclick = final6;
rnd_arr[7].onclick = final7;
rnd_arr[8].onclick = final8;
rnd_arr[9].onclick = final9;
rnd_arr[10].onclick = final10;
rnd_arr[11].onclick = final11;
rnd_arr[12].onclick = final12;
rnd_arr[13].onclick = final13;
rnd_arr[14].onclick = final14;
rnd_arr[15].onclick = final15;
rnd_arr[16].onclick = final16;
rnd_arr[17].onclick = final17;
rnd_arr[18].onclick = final18;
rnd_arr[19].onclick = final19;
rnd_arr[20].onclick = final20;
rnd_arr[21].onclick = final21;
rnd_arr[22].onclick = final22;
rnd_arr[23].onclick = final23;
rnd_arr[24].onclick = final24;
rnd_arr[25].onclick = final25;
rnd_arr[26].onclick = final26;
rnd_arr[27].onclick = final27;
rnd_arr[28].onclick = final28;
rnd_arr[29].onclick = final29;
rnd_arr[30].onclick = final30;
rnd_arr[31].onclick = final31;
rnd_arr[32].onclick = final32;
rnd_arr[33].onclick = final33;
rnd_arr[34].onclick = final34;
rnd_arr[35].onclick = final35;
btn.onclick = open;
