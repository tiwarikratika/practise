num1 = document.querySelector(".input1");
num2 = document.querySelector(".input2");
btn1 = document.querySelector(".add");
btn2 = document.querySelector(".subtract");
btn3 = document.querySelector(".multiply");
btn4 = document.querySelector(".divide");
out = document.querySelector(".output");

btn1.addEventListener("click",summation);
btn2.addEventListener("click",minus);
btn3.addEventListener("click",product);
btn4.addEventListener("click",division);

function summation()
{
    var ans1 = Number(num1.value)+Number(num2.value);
    out.innerText = ans1;
}

function minus()
{
    var ans2 = Number(num1.value)-Number(num2.value);
    out.innerText = ans2;

}


function product()
{
    var ans3 = Number(num1.value)*Number(num2.value);
    out.innerText = ans3;
}

function division()
{
    var ans4 = Number(num1.value)-Number(num2.value);
    out.innerText = ans4;
}
