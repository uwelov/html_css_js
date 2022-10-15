let quest = document.querySelector (".questions");
let btn1 = document.querySelector (".ans1");
let btn2 = document.querySelector (".ans2");
let btn3 = document.querySelector (".ans3");
let btn4 = document.querySelector (".ans4");
let user_score = 0; step = 0;

let element_for_game=[
    ["Указати хибне твердження, якщо відомо, що с < b", "-4с<-4b", "4b<4b", "c+4<b+4", "c-4<b-4", "-4с<-4b"],
    ["Яка нерівність обов'язково виконується, якщо а<b, d>0", "ad<b", "a<bd", "a+d<b", "a<b+d", "a<b+d"],
    ["При яких значеннях b i c виконується рівність√-bc =√b ⋅ √-c", "b>0, c>0", "b≤0, c>0", "b<0, c<0", "b≥0, c≤0", "b≥0, c≤0"],
    ["Відомо, що а>с. Яка з нерівностей хибна?", "а-0,5>с-0,5", "0,5а>0,5с", "а+0,5>с+0,5", "-0,5а>-0,5с", "-0,5а>-0,5с"],
    ["Порівняти числа а і с, якщо а-с = -5,1", "а>с", "а=с", "а+0,5>с+0,5", "-0,5а>-0,5с", "а+0,5>с+0,5"],
    ["Від'ємні числа а і с такі, що а2>с2. Яке твердження є правильним?", "а>с", "а=с", "а<с", "порівняти неможливо", "а<с"],
    ["questions7", "answer1", "answer2", "answer3", "answer4", "true_ans"],
    ["questions8", "answer1", "answer2", "answer3", "answer4", "true_ans"],
    ["questions9", "answer1", "answer2", "answer3", "answer4", "true_ans"],
    ["questions10", "answer1", "answer2", "answer3", "answer4", "true_ans"],
    ["questions11", "answer1", "answer2", "answer3", "answer4", "true_ans"],
    ["questions12", "answer1", "answer2", "answer3", "answer4", "true_ans"],
    ["questions13", "answer1", "answer2", "answer3", "answer4", "true_ans"],
    ["questions14", "answer1", "answer2", "answer3", "answer4", "true_ans"],
    ["questions15", "answer1", "answer2", "answer3", "answer4", "true_ans"],
];

quest.innerText = element_for_game[0][0];
btn1.value = element_for_game[0][1];
btn2.value = element_for_game[0][2];
btn3.value = element_for_game[0][3];
btn4.value = element_for_game[0][4];


function go_work(){
    step++;
    quest.innerText = element_for_game[step][0];
    btn1.value = element_for_game[step][1];
    btn2.value = element_for_game[step][2];
    btn3.value = element_for_game[step][3];
    btn4.value = element_for_game[step][4];

}

function go_btn1(){
    if (btn1.value == element_for_game[step][5]){
        user_score++;
        console.log(user_score);
    }
    go_work();
}
function go_btn2(){
    if (btn2.value == element_for_game[step][5]){
        user_score++;
                console.log(user_score);

    }
    go_work();
}
function go_btn3(){
    if (btn3.value == element_for_game[step][5]){
        user_score++;
                console.log(user_score);

    }
    go_work();
}
function go_btn4(){
    if (btn4.value == element_for_game[step][5]){
        user_score++;
                console.log(user_score);

    }
    go_work();
}

btn1.onclick = go_btn1;
btn2.onclick = go_btn2;
btn3.onclick = go_btn3;
btn4.onclick = go_btn4;
