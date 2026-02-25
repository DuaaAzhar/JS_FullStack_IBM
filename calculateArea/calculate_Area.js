let length= document.getElementById('length').value;
let width = document.getElementById('width').value;


function calculateArea() {
 length = parseFloat(length);
 width = parseFloat(width);
 let area = length * width; 
 document.getElementById('result').innerText = `The area of rectangle is: ${area}`;
   
}