const input = document.getElementById("user-input");

const numbers = document.querySelectorAll(".num")
.forEach(function(item)
{
    item.addEventListener("click" , function(event)
{
    if(input.innerText == "NaN"){
        input.innerText = "";
    }
    if(input.innerText == "0")
    {
        input.innerText = "";
    }
    input.innerText+=event.target.innerHTML.trim();
});
});


const calculate = document.querySelectorAll(".op")
.forEach(function(item)
{
   item.addEventListener("click" , function(event)
{
    let val = event.target.innerHTML;
    let lastval = input.innerText.slice(-1);
    if(!isNaN(lastval) && val === "=")
    {
        input.innerText = eval(input.innerText);
    }
    else if(val == "AC")
    {
        input.innerText = "0";
    }
    else if(val == "DEL")
    {
        input.innerText = input.innerText.slice(0 , -1);
        if(input.innerText.length === 0)
        {
            input.innerText ="0";
        }
    }
    else{
        if(!isNaN(lastval))
        {
            input.innerText += val;
        }
    }
});
});



