


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

document.addEventListener('DOMContentLoaded',() => {
let tomb = [];
for (let i = 0; i < 30; i++) {
    tomb.push(Math.floor(Math.random()* 30 + 1));
}
tomb.forEach((e) => {
    console.log(e);
});

let ottelOszthato = tomb.filter(e => e % 5 == 0);
console.log(ottelOszthato);

ottelOszthato.forEach((e) => {
    console.log(e);
});

});