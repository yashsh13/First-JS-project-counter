// Main counter varaible
let counter = 0;

// Selecting all buttons
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

// Selecting html tag to display number
let num = document.getElementById('num');

// Event listener for button1
btn1.addEventListener('click',function (){
    counter = counter - 1;
    setclr(counter);
    num.textContent = counter;
})

// Event listener for button2
btn2.addEventListener('click',function (){
    counter = 0;
    setclr(counter);
    num.textContent = counter;
})

// Event listener for button3
btn3.addEventListener('click',function (){
    counter = counter + 1;
    setclr(counter);
    num.textContent = counter;
})

// Function to set colour of number
function setclr(count)
{
    if(count>0)
    {
        num.style.color = '#008000';
    }
    else if (count<0)
    {
        num.style.color = 'red';
    }
    else
    {
        num.style.color = '#102B42';
    }
}