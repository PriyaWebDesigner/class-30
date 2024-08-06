
function sum(){
    event.preventDefault();
    let x = document.getElementById('number1').value;  //40
    let y = document.getElementById('number2').value;  //30

    // console.log(x);
    // console.log(y);
    parseFloat(x);
    parseFloat(y);

    let result = parseFloat(x)+parseFloat(y);

    document.getElementById('result').innerHTML = 'The result is =' + result;
    // console.log('The result is =' + result);
}
sum();
// console.log('vegeg'+'ewgwfg')

function multiply(){
    event.preventDefault();
    let a = document.getElementById('price1').value;
    let b = document.getElementById('price2').value;

    let result = parseFloat(a)+parseFloat(b);
    document.getElementById('totalPrice').innerhtml = 'The Total Price is= '+totalPrice;
}
multiply();