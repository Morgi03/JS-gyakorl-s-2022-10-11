class Szazlabu {
#labakSzama;
constructor(labakSzama) {
this.#labakSzama = labakSzama;
}

// Tiszta
toString(){
    return this.#labakSzama+' lábú százlábú';
}
}

// Tiszta
let labakbolSzazlabuk = function (tomb) {
   return tomb.map(/* Tiszta*/ szam => new Szazlabu(szam));
}



let szazlabuMejelenites = function (id, szazlabuk){
    let elem = document.getElementById(id);
    szazlabuk.forEach(e => {
        let li = document.createElement('li');
        li.textContent = e.toString();
        elem.appendChild(li);
    });
}





document.addEventListener('DOMContentLoaded',() => {
let tomb = [];
for (let i = 0; i < 20; i++) {
    tomb.push(Math.floor(Math.random()* 30 + 1));
}
tomb.forEach((e) => {
    console.log(e);
});

document.getElementById('otteloszt').addEventListener('click', () => {
    let ottelOszthato = tomb.filter(e => e % 5 === 0);
    console.log(ottelOszthato);
    
    ottelOszthato.forEach((e) => {
        console.log(e);
    });
});


document.getElementById('addToArray').addEventListener('click',()=>{
tomb.push(document.getElementById('addnum').value); 
});


// Százlábú teszt
labakbolSzazlabuk(tomb).forEach((e)=>{
    console.log(e.toString());
});



document.getElementById('kiir').addEventListener('click',()=>{

    szazlabuMejelenites('lista', labakbolSzazlabuk(tomb));
});


/*
// 1. feladat része

let ottelOszthato = tomb.filter(e => e % 5 == 0);
console.log(ottelOszthato);

ottelOszthato.forEach((e) => {
    console.log(e);
});
*/

});