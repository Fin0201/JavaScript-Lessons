//Invoice example
/*
var sign = "Bristol Zoo!";
var length = sign.length;
var subtotal = length * 2.99;
var shipping = 4.99;
var total = subtotal+shipping;

document.getElementById("userSign").innerHTML= sign;
document.getElementById("tiles").textContent = length;
document.getElementById("subtotal").textContent = `£${subtotal}`;
document.getElementById("shipping").textContent = `£${shipping}`;
document.getElementById("total").textContent = `£${total.toFixed(2)}`;
*/
function CalculateCost() {
    var sign = document.getElementById("user").value;
    document.getElementById("userSign").innerHTML = sign;

    var sign = "Bristol Zoo!";
var length = sign.length;
var subtotal = length * 2.99;
var shipping = 4.99;
var total = subtotal+shipping;

document.getElementById("userSign").innerHTML= sign;
document.getElementById("tiles").textContent = length;
document.getElementById("subtotal").textContent = `£${subtotal}`;
document.getElementById("shipping").textContent = `£${shipping}`;
document.getElementById("total").textContent = `£${total.toFixed(2)}`;
  }