class Szazlabu {
#labakSzama;
constructor(labakSzama) {
this.#labakSzama = labakSzama;
}
toString(){
    return this.#labakSzama+' lábú százlábú';
}
}


let labakbolSzazlabuk = function (tomb) {
    let CentipedeArray =  [];
    tomb.forEach((e) =>{
        CentipedeArray.push(new Szazlabu(parseInt(e)));
    });
    return CentipedeArray;
}



document.addEventListener('DOMContentLoaded',() => {
let tomb = [];
for (let i = 0; i < 30; i++) {
    tomb.push(Math.floor(Math.random()* 30 + 1));
}
tomb.forEach((e) => {
    console.log(e);
});

document.getElementById('otteloszt').addEventListener('click', () => {
    let ottelOszthato = tomb.filter(e => e % 5 == 0);
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

/*
// 1. feladat része

let ottelOszthato = tomb.filter(e => e % 5 == 0);
console.log(ottelOszthato);

ottelOszthato.forEach((e) => {
    console.log(e);
});
*/

});