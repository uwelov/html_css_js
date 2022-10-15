let age = Number(prompt("Введите возраст"));
let gender = prompt("Введите пол");
let man = "м";
let woman = "ж";
if (gender == man) {
    if (age < 18) {
        console.log("мальчик");
    } else {
        console.log("мужчина");
    }
} else if (gender == woman) {
    if (age < 18) {
        console.log("девочка");
    } else {
        console.log("девушка");
    }
} else {
    console.log("что-то пошло не так :(");
}