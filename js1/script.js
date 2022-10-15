let element = [
    ["Максим", 13],
    ["Артур", 14],
    ["Давид", 15],
    ["Юрий", 12],
    ["Иван", 16],
    ["Михаил", 14],
    ["Егор", 15],
    ["Анастасия", 14],
    ["Дмитрий", 16],
    ["Денис", 14],
    ["Богдан", 15],
    ["Кирилл", 13]
];
let minimum = 0;
for (let x = 0; x < 12; x++)
    if (minimum > element[x][1]) {
        minimum = element[x][1];
    }
for (let y = 0; y < 12; y++) {
    if (element[y][1] == minimum) {
        console.log(element[y][0]);
    }
}