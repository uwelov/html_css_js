let my_win = 0; pc_win = 0;
let lvl = 1;
let my_sub = prompt("select a subject: rock, scissors or paper");
pc_sub = ["rock"];
console.log(pc_sub);
//pc_sub = random.choice(["камень","ножницы","бумага"])
//while(my_win<3 && pc_win<3){
   console.log("------------------------lvl"+lvl+"------------------------")
    lvl++;
    if(my_sub == "rock"){
        if(pc_sub=="scissors"){
            console.log("you win");
            my_win++;
        }
        else if(pc_sub=="paper"){
            console.log("you lose");
            pc_win++;
        }
        else{
            console.log("lol");
            lvl--;
        }
    }
    else if(my_sub=="scissors"){
        if(pc_sub=="paper"){
            console.log("you win");
            my_win++;
        }
        else if(pc_sub=="rock"){
            console.log("you lose");
            pc_win++;
        }
        else{
            console.log("lol");
            lvl--;
        }
    }
    else if(my_sub=="paper"){
        if(pc_sub=="rock"){
            console.log("you win");
            my_win++;
        }
        else if(pc_sub=="scissors"){
            console.log("you lose");
            pc_win++;
        }
        else{
            console.log("lol");
            lvl--;
        }
    }
}
//if(my_win>pc_win){
    console.log("you winner")
}
//else{
    console.log("you loser");
}