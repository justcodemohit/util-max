const display=document.getElementById("display");
function appendValue(value){
    display.value+=value;
}
function clearDisplay(){
    display.value="";
}
function deleteLast(){
display.value=display.value.slice(0,-1);
}
function calculate()
{
    
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="Error";
    }
}
document.addEventListener("keydown",(event)=> {
     if(event.key==="Enter"){
        calculate();
     }
     if(event.key==="Backspace"){
        deleteLast();
     }
});

