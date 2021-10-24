//var,let,const
let sayi1 = 10;
sayi1 = "Engin Demiroğ";
let student = {id:1,name:"engin"};
//console.log(student);

//function
function save(puan=10,ogrenci) {
    console.log(ogrenci.name + " : " + puan  );
}

//save(undefined,student);

//array
let students = ["Engin Demiroğ", "Ali","Veli"];

//console.log(students);

let students2 = [student,{id:2,name:"Ali"},"Ankara",{city:"İstanbul"}];

//console.log(students2);

//rest, spread, destructuring

//rest
//params
//varArgs
let showProducts = function(id,...products){
    console.log(id);
    console.log(products); // [] 
}

//console.log(typeof showProducts);
//showProducts(10,"Elma","Armut","Karpuz");

//spread
let points = [1,2,3,4,50,4,60,14];
//console.log(...points);
//console.log(Math.max(...points));
//console.log(..."ABC","D",..."EFG","H");

//destructuring
let populations = [10000,20000,30000];
let [small,medium,large] = populations;
console.log(small); 

// 2:23:18