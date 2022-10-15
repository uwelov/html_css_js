let N = Number(prompt("Введите число N"));
let a = 0;
let b = 0;
while(a!=N){
    if(a*b==N){
        console.log(a+"*"+b+"="+N);
    }
    b++;
    if(b==N){
        b=0;
        a++;
    }
}