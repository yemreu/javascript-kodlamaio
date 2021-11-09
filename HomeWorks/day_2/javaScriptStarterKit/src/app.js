//1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )
function findPrime(...numbers){
    numbers.map(number => {
        if(number < 3){
            console.log(number + " bir asal sayı değildir.");
        }else{
            let kontrol = false;
            for(let i=2;i<=number/2;i++){
                if(number % i === 0) kontrol = true;
            }
            if(kontrol){
                console.log(number + " bir asal sayı değildir.");
            }else{
                console.log(number + " bir asal sayıdır.");
            }
        }
    });
}

findPrime(-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,607);

//2- Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)
function friendNumbers(numA,numB){
    let sumA = 1,sumB = 1;
    for(let i=2;i<numA;i++){
        if(numA % i === 0) sumA += i;
    }
    for(let j=2;j<numB;j++){
        if(numB % j === 0) sumB += j;
    }
    if(numA === sumB && numB === sumA) {
        console.log(numA + " ve " + numB + " arkadaş sayıdır.");
    }else{
        console.log(numA + " ve " + numB + " arkadaş sayı değildir.");
    }
}

friendNumbers(17296,18416);

//3- 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
function perfectNumbers(){
    let iteration = 1;
    while(iteration <= 1000){
        let sum = 0
        for(let i=1;i<iteration;i++){
            if(iteration % i === 0) sum += i;
        }
        if(iteration === sum) {
            console.log(iteration + " mükemmel sayıdır.");
        }else{
            console.log(iteration + " mükemmel sayı değildir.");
        }
        iteration++;
    }
}

perfectNumbers();

//4- 1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
function primeNumbers(){
    let iteration = 1;
    while(iteration <= 1000){
        if(iteration < 3){
            console.log(iteration + " bir asal sayı değildir.");
        }else{
            let kontrol = false;
            for(let i=2;i<=iteration/2;i++){
                if(iteration % i === 0) kontrol = true;
            }
            if(kontrol){
                console.log(iteration + " bir asal sayı değildir.");
            }else{
                console.log(iteration + " bir asal sayıdır.");
            }
        }
        iteration++;
    }
}

primeNumbers();