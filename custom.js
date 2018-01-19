window.addEventListener("load",()=>{
    document.querySelector("#add").addEventListener("click", add);
    document.querySelector("#subtract").addEventListener("click", subtract);
    document.querySelector("#mult").addEventListener("click", multiplication);
    document.querySelector("#div").addEventListener("click", division);
    
})

function add(){
    console.log("Test.....");
    var first=parseInt(document.querySelector("#firstnum").value);
    var second=parseInt(document.querySelector("#secondnum").value);
    var result=first+second;
    document.querySelector("#p1").innerText = `Result=${result}`;
}
function subtract(){
    console.log("Test.....");
    var first=parseInt(document.querySelector("#firstnum").value);
    var second=parseInt(document.querySelector("#secondnum").value);
    var result=first-second;
    document.querySelector("#p1").innerText = `Result=${result}`;
}
function multiplication(){
    console.log("Test.....");
    var first=parseInt(document.querySelector("#firstnum").value);
    var second=parseInt(document.querySelector("#secondnum").value);
    var result=first*second;
    document.querySelector("#p1").innerText = `Result=${result}`;
}
function division(){
    console.log("Test.....");
    var first=parseInt(document.querySelector("#firstnum").value);
    var second=parseInt(document.querySelector("#secondnum").value);
    var result=first/second;
    document.querySelector("#p1").innerText = `Result=${result}`;
}