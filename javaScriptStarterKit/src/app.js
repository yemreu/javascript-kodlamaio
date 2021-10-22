console.log("Hello Kodlama.io");

var dolarDun = 9.20;
let dolarBugun = 9.30;

{
    dolarDun = 9.101;
}

console.log(dolarDun);

const euroDun = 11.2;
//euroDun = 11;

console.log(euroDun);

//array
//camelCase
//PascalCase
let konutKredileri = ["Konut Kredisi" , "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredisi"];

console.log(konutKredileri);

console.log("<ul>");
for(let i=0;i<konutKredileri.length;i++){
    console.log("<li>" + konutKredileri[i] + "</li>");
}
console.log("</ul>");