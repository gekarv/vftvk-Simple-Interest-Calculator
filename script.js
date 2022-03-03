function compute(){   
    var principal = document.getElementById("principal");
    if(principal.value<=0){
        alert("Please enter positive value");
        principal.focus();
        return false;
    }
    else{
        var rate =  document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal.value*rate*years/100;
        var  year = new Date().getFullYear() + parseInt(years);
        document.getElementById("result").innerHTML="If you deposit "+principal.value+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    }
    return true;
}    
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}  