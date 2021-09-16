function main(numOne,numTwo){


    var product = numOne * numTwo;




    return product.toFixed(2);
}

console.log(main(2.5,2.0));
console.log(main(5.5,5.5));
console.log(main(100.25,43.20));

module.exports=main;