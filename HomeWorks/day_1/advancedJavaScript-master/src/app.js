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
let populations = [10000,20000,30000,[40000,100000]];
let [small,medium,large,[xLarge,max]] = populations;
//console.log(small); 
//console.log(medium); 
//console.log(large); 
//console.log(xLarge); 
//console.log(max); 

function someFunction([small1],number){
    console.log(small1);
}

//someFunction(populations);

let category = {id:1,name:"İçecek"};
//console.log(category.id);
//console.log(category.name);

let {id,name} = category;

//console.log(id);
//console.log(name);

//oop

class Customer{
    constructor(id,customerNumber){
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

let customer = new Customer(1,"12345");

//prototyping
customer.name = "Kodlama.io";
//console.log(customer.name);

Customer.bisey = "bisey";
//console.log(Customer.bisey);

//console.log(customer.customerNumber);

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber);
        this.firstName = firstName;
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber);
        this.companyName = companyName;
    }
}

//map, filter, reduce

let products = [
    {id:1,name:"Acer Laptop",unitPrice:15000},
    {id:2,name:"Asus Laptop",unitPrice:16000},
    {id:3,name:"Hp Laptop",unitPrice:13000},
    {id:4,name:"Dell Laptop",unitPrice:12000},
    {id:5,name:"Casper Laptop",unitPrice:17000}
];

console.log("<ul>");
products.map(product => console.log(`<li>${product.name}</li>`));
console.log("</ul>");

products.map(product => {
    console.log(product);
    console.log(`<li>${product.name}</li>`);
});

let filteredProducts = products.filter(product => product.unitPrice > 12000);
console.log(filteredProducts);

let cartTotal = products.reduce((acc,product) => acc + product.unitPrice,0);
console.log(cartTotal);

let cartTotal2 = products.filter(product => product.unitPrice > 13000)
                        .map(product => {
                            product.unitPrice = product.unitPrice * 1.18;
                            return product;
                        })
                        .reduce((acc,product) => acc + product.unitPrice,0);
console.log(cartTotal2);