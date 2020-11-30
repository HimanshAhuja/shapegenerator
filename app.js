const button=document.getElementById("button");
var numberInTheShape=1;
var oldValue=0;

button.onclick=()=>{
    let n= document.getElementById("number").value;
    const circle=document.getElementById("circle");
    const square=document.getElementById("square");
    const rectangle=document.getElementById("retangle");
    const box=document.getElementById("box");
    let j;
    n=Number(oldValue)+Number(n);
    for(let j=numberInTheShape; j<=n; j++){
        var shape=document.createElement("div");
        shape.innerHTML+=numberInTheShape;
        if(square.checked){
            shape.classList.add("square");
        }   else if(circle.checked){
            shape.classList.add("circle");
        }   else{
            shape.classList.add("rectangle");
        }
        box.appendChild(shape);
        numberInTheShape++;
        oldValue=document.getElementById("box").lastElementChild.innerHTML;
    }
};