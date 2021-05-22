qty="";
function next()
{
    window.location="index2.html";
}

function plus()
{
    qty=document.getElementById("q").value;
    qty=qty+1;
    document.getElementById("q").innerHTML=qty;
}