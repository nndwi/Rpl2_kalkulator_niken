const display=document.querySelector(".display");
const buttons=document.querySelectorAll("button");
const specialChar=["%","*","/","-","+","="];
let output="";

const calculate=btnValue=>{
    display.focus();
    if (btnValue==="=" && output!=""){
        output=(output.replace("%","/100"))
        output=eval(output);
    }
    else if(btnValue==="AC"){
        output="";
    }
    else if(btnValue==="DEL"){
        output=output.toString().slice(0,-1)
    }
    else{
        if(btnValue==="" &&specialChar.includes(btnValue)) return;
        output+=btnValue;
    }
    display.value=output;
};
buttons.forEach(buttons=>{
    buttons.addEventListener("click", (e)=>calculate(e.target.dataset.value));
});