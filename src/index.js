


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

document.addEventListener('DOMContentLoaded',() => {
let tomb = [];
for (let i = 0; i < 30; i++) {
    tomb.push(Math.floor(Math.random()* 30 + 1));
}
});