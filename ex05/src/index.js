function main(numOne,numTwo){


    var product = numOne * numTwo;




    return product;
}

console.log(main(2.5,2.0).toFixed(1));
console.log(main(5.5,5.5).toFixed(2));
console.log(main(100.25,43.20).toFixed(1));

module.exports=main;