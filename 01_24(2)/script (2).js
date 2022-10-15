let surname = prompt("Введите Вашу фамилию");
let name = prompt("Введите Ваше имя");
let age =Number(prompt("Введите Ваш возраст"));
if (age < 18) {
    console.log("Здраствуйте " + name + " " + surname + ". Вы несовершеннолетний.");
} else if (age >= 18) {
    console.log("Здраствуйте " + name + " " + surname + ". Вы совершеннолетний.");
} else {
    console.log("Что-то пошло не так :(");
}